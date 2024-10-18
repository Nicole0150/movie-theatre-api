const express = require("express");
const showRouter = express.Router();
const User = require("../../models/User");
const Show = require("../../models/Show");

showRouter.use(express.json()); 
showRouter.use(express.urlencoded({extended: true})); 

showRouter.get("/", async (req, res) =>{
    const users = await User.findAll();
    res.json(users);
});

showRouter.get("/:id", async (req, res) =>{
    const parameter = req.params.id;
    const show = await Show.findByPk(parameter);
    res.json(show);
})

showRouter.get("/:id/users", async (req, res) =>{
    const parameter = req.params.id;
    const show = await Show.findByPk(parameter, {include: User});
    res.json(show);
})

showRouter.put("/:id", async (req, res) =>{
    const showId = req.params.id;
    const available = req.body;
    const show = await Show.findByPk(showId);
    show.available = available;
    res.json(show);
})

showRouter.delete("/:id", async(req, res) =>{
    const route = req.params.id;
    const del = await Show.destroy({where: {id: route}});
    res.json(del);
})

showRouter.get("/", async (req, res) =>{
    const genre = req.query.genre
    const shows = await Show.findAll({where: {genre}});
    res.json(shows);
})

module.exports = showRouter;