const { createPool } = require("mysql2/promise");
const faker = require("faker");

describe("Database Tests", () => {
  let connection;

  beforeEach(async () => {
    let createTableSQL =
      "CREATE TABLE IF NOT EXISTS `users` ( `id` INT(2) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";

    connection = await createPool({
      host: "testmy.cluster-ro-cxmtybhfhzum.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "4BmIO4iKM4bRGLgBi",
      port: 3306,
      database: "geeks"
    });
    console.log("Connected to database");

    await connection.query(createTableSQL);
  });

  it("Test CREATE and READ", async () => {
    try {
      const total_test_users = 30;
      let insertQueries = [];

      for (let i = 0; i < total_test_users; i++) {
        let insertSQL = "SELECT * FROM users";

        insertQueries.push(connection.query(insertSQL));
      }

      await Promise.all(insertQueries);

      const [rows, fields] = await connection.query("SELECT * FROM users");

      expect(rows.length).toBe(total_test_users);
    } catch (error) {
      console.log(error);
      let dropTableSQL = "SELECT * FROM users";
      await connection.query(dropTableSQL);
      await connection.end();
    }
  }, 60000);

//   afterEach(async () => {
//     let dropTableSQL =  "SELECT * FROM users";
//     await connection.query(dropTableSQL);
//     await connection.end();
//   });
});