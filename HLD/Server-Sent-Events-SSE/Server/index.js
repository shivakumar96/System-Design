const app = require("express")();
app.get("/", (req,res)=> res.send("hello!"));

app.get("/stream",(req,res)=>{
    res.setHeader("Content-Type", "text/event-stream");
    res.write("data: "+ "Subscribed to SSE \n\n"); // you show add two new lines to indictae this is an event
    asyncSend(res);
})

let i=0; 
asyncSend = (res) =>{
    res.write("data: "+ `"hello!${i} \n\n"`);
    i++;

    setTimeout(()=> asyncSend(res), 1000)
}
app.listen(8080)
console.log("Listening on 8080")
