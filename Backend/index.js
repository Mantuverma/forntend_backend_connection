import express from "express"

const app = express();

app.get('/',(req,res)=>{
    res.send('sever is ready to listen');

})
app.get("/api/jockes",(req,res)=>{
    const jockes=[
        {
            id:1,
            title:'first jocks',
            content:'this is first jokes content'
        },
        {
            id:2,
            title:'second jocks',
            content:'this is second jokes content'
        },
        {
            id:3,
            title:'third jocks',
            content:'this is third jokes content'
        },
        {
            id:4,
            title:'fourth jocks',
            content:'this is fourth jokes content'
        }
    ]
    res.send(jockes)
})
const port =process.env.PORT || 8000;

app.listen(port,()=>{
   console.log(`server is running on port ${port}`);
})