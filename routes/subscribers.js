const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Retriving * data.

router.get("/", async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Retriving {id} data.

router.get("/:id", get, (req, res) => {
    res.status(201).json(res.subscriber);
});

// Creating {record}.

router.post("/", async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedTo: req.body.subscribedTo
    });

    try {
        const record = await subscriber.save();
        res.status(201).json(subscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating {record}.

router.patch("/:id", get, async (req, res) => {
    if(req.body.name != null)
    {
        res.subscriber.name = req.body.name
    }

    if(req.body.subscribedTo != null)
    {
        res.subscriber.subscribedTo = req.body.subscribedTo;
    }

    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Deleting {record}.

router.delete("/:id", get, async (req, res) => {
    try {
        await res.subscriber.remove();
        res.json({ message: "Deleted " + res.subscriber.name + " with an ID of " + res.subscriber.id + " from the database." })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function get(req, res, next)
{
    let subscriber;

    try {
        subscriber = await Subscriber.findById(req.params.id);
        if(subscriber == null)
        {
            return res.status(404).json({ message: "Unable to locate record of " + req.params.id });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.subscriber = subscriber;
    next();
}

module.exports = router