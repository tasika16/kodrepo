const { init } = require('./web/server');
const { connect } = require('./db');
async function startup() {
  try {
    await init();
    console.log('Server is ready');
    await connect();
    console.log('Database is ready!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startup();