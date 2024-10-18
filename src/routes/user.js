const express = require("express");
const userRouter = express.Router();
const User = require("../../models/User");
const Show = require("../../models/Show");

userRouter.get("/", async (req, res) =>{
    const users = await User.findAll();
    res.json(users);
});

userRouter.get("/:id", async (req, res) =>{
    const parameter = req.params.id;
    const user = await User.findByPk(parameter);
    res.json(user);

})

userRouter.get("/:id/shows", async (req, res) =>{
    const parameter = req.params.id;
    const user = await User.findByPk(parameter, {include: Show});
    res.json(user);

})

userRouter.post("/:id/:showid", async(req, res) =>{
    const {id, showId} = req.params;
    const user = await User.findByPk(id);
    const show = await Show.findByPk(showId);
    await user.addShow(show);
    let foundUser = await User.findByPk(id, {include: Show});
    res.json(foundUser);

})