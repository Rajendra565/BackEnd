const os = require("os");

// 1. Get the operating system's default directory for temporary files
console.log("Temp Directory:", os.tmpdir());

// 2. Get the hostname of the operating system
console.log("Hostname:", os.hostname());

// 3. Get the operating system name
console.log("OS Type:", os.type());

// 4. Get the operating system platform
console.log("Platform:", os.platform());

// 5. Get the operating system architecture
console.log("Architecture:", os.arch());

// 6. Get the operating system release
console.log("OS Release:", os.release());

// 7. Get the system uptime in seconds
console.log("Uptime (seconds):", os.uptime());

// 8. Get the total system memory in bytes
console.log("Total Memory (bytes):", os.totalmem());

// 9. Get the free system memory in bytes
console.log("Free Memory (bytes):", os.freemem());

// 10. Get information about each CPU/core installed
console.log("CPU Info:", os.cpus());

// 11. Get the network interfaces
console.log("Network Interfaces:", os.networkInterfaces());

// 12. Get the endianness of the CPU
console.log("Endianness:", os.endianness());

// 13. Get the priority of a process (default is the current process)
console.log("Process Priority:", os.getPriority());

// 14. Get the home directory of the current user
console.log("Home Directory:", os.homedir());

// 15. Get the user information
console.log("User Info:", os.userInfo());

// 16. Get the load average (1, 5, and 15 minutes)
console.log("Load Average:", os.loadavg());

// 17. Get the operating system constants
console.log("OS Constants:", os.constants);
