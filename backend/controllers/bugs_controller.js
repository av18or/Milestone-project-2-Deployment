const express = require("express");
const router = require("express").Router();
const Bug = require("../models/bug.js");
// const User = require("../models/User.js");

// Create bug route
router.post("/", async (req, res) => {
    try {
        const Bugs = await Bug.create(req.body);
        // res.redirect("/bugs");
        console.log(Bugs);
        res.send(Bugs);
    } catch (e) {
        console.log(e.message);
        res.send(e)
    }
});
// Update specific bug
router.put("/:id", async (req, res) => {
  try {
    const Bugs = await Bug.findByIdAndUpdate(req.params.id,req.body);
    // res.redirect("/bugs");
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});
// get all bugs
router.get("/", async (req, res) => {
  try {
    const Bugs = await Bug.find();
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

router.get("/low", async (req, res) => {
  try {
    const Bugs = await Bug.find({ priority: "low" });
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

router.get("/medium", async (req, res) => {
  try {
    const Bugs = await Bug.find({priority: "medium"});
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});
  // Get all HIGH PRIORITY bugs
  router.get("/high", async (req, res) => {
    try {
      const Bugs = await Bug.find({ priority: "high"});
      console.log(Bugs);
      res.send(Bugs);
    } catch (e) {
      console.log(e.message);
      res.send(e);
    }
  });

  // Delete specific bug
router.delete("/delete/:bugId", async (req,res)=>{
    try {
        const foundBug  = await Bug.findByIdAndDelete(req.params.bugId);
        console.log(foundBug);  
    }catch (e){console.log(e.message); res.send(e);}
})

// get specific bug
router.get("/:bugId", async (req, res) => {
  try {
    const foundBug = await Bug.findById(req.params.bugId);
    console.log(foundBug);
    res.send(foundBug);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});




module.exports = router