const os = require("os");

if (os.platform() === "win32") {
    console.log("Hello windows user!");
} 
else if (os.platform() === "darwin") {
    console.log("Hello mac user!");
} 
else {
    console.log("Hello user!");
}

console.log(os.totalmem());
console.log(os.freemem());