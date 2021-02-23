const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51IMyxVJdmac4EInlsBmhkZDXFNmItAoAjZ6ldjkeFjfKScwG7p3JWWshqSwF2BRWO1RBjqbhP7bWy5izUYcpQXha00h46rwzqF");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/vicky", (request, response) => response.status(200).send("Whats up"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment recieve BOOM!!! for this amount >>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subn=units od the currency
    currency: "eur",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// // Listen commant.
exports.api = functions.https.onRequest(app);
// //Example endpoint
// http://localhost:5001/clone-e9537/us-central1/api
