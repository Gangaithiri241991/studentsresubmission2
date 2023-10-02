import express from "express";
import {
  addMentorsData,
  deletaMentorsData,
  getAllMentors,
  getMentorsById,
  updateMentorsData,
} from "../Controllers/mentors.js";
//import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    if (req.query.experience) {
      req.query.experience = +req.query.experience;
    }

    if (req.query.taskCompletion) {
      req.query.taskCompletion = +req.query.taskCompletion;
    }

    const mentor = await getAllMentors(req);
    if (mentor.length <= 0) {
      res.status(400).json({ data: "User Not found" });
      return;
    }
    res.status(200).json({ data: mentor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});

// using query params
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await getMentorsById(id);
    if (!mentor) {
      res.status(400).json({ data: "User Not found" });
      return;
    }
    res.status(200).json({ data: mentor});
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newMentor = req.body;
    if (!newMentor) {
      return res.status(400).json({ data: "No details provided" });
    }
    const result = await addMentorsData(newMentor);
    res
      .status(200)
      .json({ data: { result: result, message: "Added Sucessfully" } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    if (!id || !updatedData) {
      return res.status(400).json({ data: "Wrong Request" });
    }
    const result = await updateMentorsData(id, updatedData);
    res
      .status(200)
      .json({ data: { result: result, message: "Updated Sucessfully" } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ data: "Wrong Request" });
    }
    const result = await deletaMentorsData(id);
    res
      .status(200)
      .json({ data: { result: result, message: "Deleted Sucessfully" } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Internal server Error" });
  }
});

export const mentorsRouter = router;