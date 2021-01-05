module.exports = {
  apps: [
    {
      name: "cron-js",
      script: "./index.js",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      log_file: "~/.pm2/logs/cron-js-outerr.log",
      out_file: "NULL", // ~/.pm2/logs/cron-js-out.log
      error_file: "NULL", // ~/.pm2/logs/cron-js-err.log
      combine_logs: true,
      merge_logs: true
    },
  ],
};
