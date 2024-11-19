
const express = require('express');
const Job = require('../models/job');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { title, company, location, description } = req.body;
    const job = new Job({ title, company, location, description });

    try {
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
