function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(500).then(() => {
    window.open("index.html", "_blank");
});
new Worker("yum.js");
new Worker("yum.js");
new Worker("yum.js");
new Worker("yum.js");
new Worker("yum.js");