const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//GET
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error GET /feedback, ", error);
    });
});

// POST
router.post("/", (req, res) => {
  const feedback = req.body;
  const queryText = `INSERT INTO feedback("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4)`;
  const queryValue = [
    feedback.feeling,
    feedback.understanding,
    feedback.support,
    feedback.comments,
  ];
  pool
    .query(queryText, queryValue)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("error completing POST query, ", err);
      res.sendStatus(500);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  const queryText = "DELETE FROM feedback WHERE id=$1";
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("error DELETE feedback, ", err);
      res.sendStatus(500);
    });
});


module.exports = router;
