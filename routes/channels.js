const express = require('express');
const router = express.Router();
const Channel = require("../models/channel");

// Retriving * data.

router.get("/", async (req, res) => {
    try {
        const channels = await Channel.find();
        res.json(channels)
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Retriving {id} data.

router.get("/:id", get, (req, res) => {
    res.status(201).json(res.channel);
});

// Creating {record}.

router.post("/", async (req, res) => {
    const channel = new Channel({
        name: req.body.name,
        subscribers: req.body.subscribers
    });

    try {
        const record = await channel.save();
        res.status(201).json(channel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating {record}.

router.patch("/:id", get, async (req, res) => {
    if(req.body.name != null)
    {
        res.channel.name = req.body.name
    }

    if(req.body.subscribers != null)
    {
        res.channel.subscribers = req.body.subscribers;
    }

    try {
        const updatedChannel = await res.channel.save();
        res.json(updatedChannel);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Deleting {record}.

router.delete("/:id", get, async (req, res) => {
    try {
        await res.channel.remove();
        res.json({ message: "Deleted " + res.channel.name + " with an ID of " + res.channel.id + " from the database." })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function get(req, res, next)
{
    let channel;

    try {
        channel = await Channel.findById(req.params.id);
        if(channel == null)
        {
            return res.status(404).json({ message: "Unable to locate record of " + req.params.id });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.channel = channel;
    next();
}

module.exports = router