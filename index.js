// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


  async function getUserData(id) {
    if (typeof id !== "number" || id < 1 || id > 10) {
      throw new Error("Invalid ID");
    }
       const dbs = { db1: db1, db2: db2, db3: db3,};
    try {

      const dbKey = await central(id);

    
      const [userInfo, vaultInfo] = await Promise.all([
        dbKey === "db1" ? db1(id) : dbKey === "db2" ? db2(id) : db3(id),
        vault(id),
      ]);

    
      return {
        id: vaultInfo.id,
        name: vaultInfo.name,
        username: userInfo.username,
        email: vaultInfo.email,
        address: vaultInfo.address,
        phone: vaultInfo.phone,
        website: userInfo.website,
        company: userInfo.company,
      };
    } catch (error) {
      throw new Error(`Failed to fetch user data: ${error.message}`);
    }
  }

  // Test cases
  async function testGetUserById() {
    const testIds = [1, 2, 3, 4, 0, 10, -1, 5]; // Including IDs within and outside the range

    for (const id of testIds) {
      try {
        const user = await getUserById(id);
        console.log(`User with ID ${id}:`, user);
      } catch (error) {
        console.error(`Error for ID ${id}:`, error.message);
      }
    }
  }

 testGetUserById();
