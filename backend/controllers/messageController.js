const Message = require("../models/messages")
const mongoose = require('mongoose')

const createMessage = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const newMessage = await Message.create({ name, email, message });
    return res.status(201).json({ message: "Message created", newMessage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createMessage }
