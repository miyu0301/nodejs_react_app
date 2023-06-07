import express from "express";

const app: express.Express = express();
const port = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world!");
});

app.get("/api", (req: express.Request, res: express.Response) => {
    res.json([
    {
        id:1,
        name:"apple",
        price:200,
        image:"https://source.unsplash.com/gDPaDDy6_WE",
    },
    {
        id:2,
        name:"banana",
        price:300,
        image:"https://source.unsplash.com/zrF6ACPLhPM",
    },
    {
        id:3,
        name:"orange",
        price:"150",
        image:"https://source.unsplash.com/bogrLtEaJ2Q",
    },
    {
        id:4,
        name:"melon",
        price:"2000",
        image:"https://source.unsplash.com/8keUtGmy0xo",
    },
  ])
});

app.listen(port, () => {
    console.log(`Server working on port ${port}`)
});