let d = {};
while(true){
    i = 0;
    d[String(i)] = "A".repeat(1000000000);
    console.log("3bg added!");
    console.log(d[String(i)]);
    i++;
}