var cron = require("node-cron");
var {
  mongo_contabo,
  mongo_contabo_32768,
} = require("./cron/backup_mongos_contabo");

// cada min
cron.schedule(
  "* * * * *",
  () => {
    // console.log('Ya paso 1 min');
  },
  {
    scheduled: false,
    timezone: "America/Lima",
  }
);

// cada 5 min
cron.schedule(
  "*/5 * * * *",
  () => {
    console.log("Ya paso 5 min");
  },
  {
    scheduled: true,
    timezone: "America/Lima",
  }
);

// 6:00 am
cron.schedule(
  "00 06 * * *",
  () => {
    console.log("6:00 am");
  },
  {
    scheduled: true,
    timezone: "America/Lima",
  }
);

// 9:00 pm
cron.schedule(
  "0 21 * * *",
  () => {
    console.log("9:00 pm");
  },
  {
    scheduled: true,
    timezone: "America/Lima",
  }
);

// 9:00 pm
cron.schedule(
  "0 21 * * *",
  () => {
    console.log("9:00 pm");
    mongo_contabo("tuenvioexpress")
  },
  {
    scheduled: true,
    timezone: "America/Lima",
  }
);

// 9:01 pm
cron.schedule(
  "5 21 * * *",
  () => {
    console.log("9:05 pm");
    // mongo_contabo("dev_tuenvioexpress")
    },
  {
    scheduled: true,
    timezone: "America/Lima",
  }
);

// 9:02 pm
cron.schedule(
  "10 21 * * *",
  () => {
    console.log("9:10 pm");
    mongo_contabo_32768('equas');
  },
  {
    scheduled: true,
    timezone: "America/Lima",
  }
);
