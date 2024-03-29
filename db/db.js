const oracledb = require("oracledb");

let connectionPool;

const connectionConfig = {
  user: "ACADEMIA_PLUS_NEW",
  password: "12345",
<<<<<<< HEAD
  connectString: "localhost/xepdb1",
=======
  connectString: "DESKTOP-J44KCUR/xepdb1",
>>>>>>> d1515310f5d61b5174346574dbc83a54e75877ab
};

async function initializeConnectionPool() {
  try {
    connectionPool = await oracledb.createPool(connectionConfig);
    console.log("Connection pool created.");
  } catch (err) {
    console.error("Error creating connection pool:", err);
    throw err;
  }
}

async function run(query, bindParams) {
  let connection;

  try {
    connection = await connectionPool.getConnection();

    if (bindParams) {
      const result = await connection.execute(query, bindParams, {
        autoCommit: true,
      });
      return { success: true, data: result.rows, error: null };
    } else {
      const result = await connection.execute(query, [], { autoCommit: true });
      return { success: true, data: result.rows, error: null };
    }
  } catch (err) {
    console.error("Error executing query:", err);
    return { success: false, data: null, error: err.message };
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
}

initializeConnectionPool();

module.exports = { run };