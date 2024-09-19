const clamscanConfig = {
    removeInfected: true, // If true, removes infected files
    quarantineInfected: false, // False: Don't quarantine, Path: Moves files to this place.
    scanLog: null, // Path to a writeable log file to write scan results into
    debugMode: true, // Whether or not to log info/debug/error msgs to the console
    fileList: null, // path to file containing list of files to scan (for scanFiles method)
    scanRecursively: true, // If true, deep scan folders recursively
    // clamscan: {
    //   path: '/usr/bin/clamscan', // Path to clamscan binary on your server
    //   db: null, // Path to a custom virus definition database
    //   scanArchives: true, // If true, scan archives (ex. zip, rar, tar, dmg, iso, etc...)
    //   active: true // If true, this module will consider using the clamscan binary
    // },
    clamdscan: {
      socket: '/var/run/clamav/clamd.ctl', // Socket file for connecting via TCP
      // host: 'localhost', // IP of host to connect to TCP interface
      // port: 3310, // Port of host to use when connecting via TCP interface
      timeout: 120000, // Timeout for scanning files
      localFallback: false, // Do no fail over to binary-method of scanning
      path: null, // Path to the clamdscan binary on your server
      // path: '/usr/bin/clamdscan', // Path to the clamdscan binary on your server
      configFile: null, // Specify config file if it's in an unusual place
      multiscan: true, // Scan using all available cores! Yay!
      // reloadDb: false, // If true, will re-load the DB on every call (slow)
      // active: true, // If true, this module will consider using the clamdscan binary
      // bypassRest: false, // Check to see if socket is available when applicable
    },
    preference: 'clamdscan' // If clamdscan is found and active, it will be used by default
  }

const clamdscanConfig = {
  remove_infected: false, // Don't remove infected files
  quarantine_infected: false, // Don't quarantine files
  scan_recursively: true,
  clamdscan: {
      host: process.env.CLAMAV_HOST, // ClamAV host (or 'mongo' if inside Docker network)
      port: process.env.CLAMAV_PORT, // Port where ClamAV is running
      timeout: 60000, // 60 seconds timeout
      local_fallback: false, // Don't use local binary as a fallback
  },
}
module.exports = {
  clamscanConfig,
  clamdscanConfig
}
  