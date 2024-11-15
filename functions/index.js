const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51QLQvdEQbX972pXlHxxdWtdan0p2prjVZc5jB6vzPXeO18BbCJVJTietS1WRntZ5bH8T0bb3Kak3DaUuyc5dR7Ud00cHf4f9tu"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/payments/create", async (req, res) => {
  try {
    const { total } = req.body;

    console.log("Payment Request Received. Total amount:", total);

    if (!total) {
      return res.status(400).send({ error: "Total amount is required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log("Payment Intent Created:", paymentIntent);

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Export the API
exports.api = functions.https.onRequest(app);
