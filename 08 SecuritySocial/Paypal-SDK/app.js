const express = require("express");
const ejs = require("ejs");

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AZiDZgpVJtkNYQcrZ2ZhM_Vdutlz7Ddh8hd4wlQrkhej0V7VMkO38dGVFqbomHw-fiC-53Ty1khHBeU1",
  client_secret:
    "EFTejA4DcgPqehQgEHM4XR2U1ESFg6Kg6YOnwy5hG92GGMJNX1qSfoPkjisoy3XOOySlo4HSggiW8iX7"
});

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.post("/pay", (req, res) => {
  const payment_request = {
    intent: "sale",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel"
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Red Sox Hat",
              sku: "001",
              price: "25.00",
              currency: "USD",
              quantity: 1
            }
          ]
        },
        amount: {
          currency: "USD",
          total: "25.00"
        },
        description: "Hat for the best team ever"
      }
    ]
  };

  paypal.payment.create(payment_request, function(error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

app.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const payment = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "25.00"
        }
      }
    ]
  };

  paypal.payment.execute(paymentId, payment, function(
    error,
    payment
  ) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send("Success");
    }
  });
});

app.get("/cancel", (req, res) => res.send("Cancelled"));

app.listen(3000, () => console.log("Server Started"));
