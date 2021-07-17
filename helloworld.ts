let userName = process.argv[2]
if (!userName) {
    console.log("Hello, world");
} else {
    console.log("Hello, " + userName);
}