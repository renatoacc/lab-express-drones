const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();
const mongoose = require("mongoose");
const Drones = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  const dronesFromDB = await Drones.find();
  res.render("drones/list.hbs", { dronesFromDB });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneForm = new Drones({ ...req.body });
  await droneForm.save();
  res.redirect("/drones");
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneIdFind = await Drones.findById(req.params.id);
  console.log(droneIdFind);
  res.render("drones/update-form.hbs", { droneIdFind });
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = mongoose.Types.ObjectId(req.params.id);
  console.log(droneId);
  await Drones.findByIdAndUpdate(droneId, { ...req.body });
  res.redirect("/drones");
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = mongoose.Types.ObjectId(req.params.id);
  await Drones.findByIdAndRemove(droneId, { ...req.body });
  res.redirect("/drones");

});

module.exports = router;
