const express = require("express");
const usersRouter = express.Router();
const {User, Show} = require("../../models/index");



usersRouter.get("/", async (request, response) => {
    const users = await User.findAll({});
    response.json(users); // returns all the info
})

usersRouter.get("/:id", async (req, res) =>{
    const parameter = req.params.id;
    const user = await User.findByPk(parameter);
    res.json(user);
})

usersRouter.get("/:id/shows", async (req, res) =>{
    const parameter = req.params.id;
    const user = await User.findByPk(parameter, {include: Show});
    res.json(user);
})

usersRouter.post("/:id/:showid", async(req, res) =>{
    const {id, showId} = req.params;
    const user = await User.findByPk(id);
    const show = await Show.findByPk(showId);
    await user.addShow(show);
    let foundUser = await User.findByPk(id, {include: Show});
    res.json(foundUser);

})

module.exports = usersRouter;

//something wrong with importing

//Eloises code works on her repo but not on mine even with corrected path.

//