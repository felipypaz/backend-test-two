import { Router } from "express";
const routes = new Router();
const Beer = require("../models/Beer");

routes.get("/", async (req, res) => {
  try {
    const all = await Beer.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
routes.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const beer = await Beer.findOne({ _id: id });
    if (!beer) {
      res.status(422).json({ message: "items nao encontrado" });
      return;
    }
    res.status(200).json(beer);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

routes.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    name,
    abv,
    ibu,
    category,
    description,
    website,
    address,
    city,
    state,
    country,
    coordinates,
  } = req.body;

  const beeer = {
    name,
    abv,
    ibu,
    category,
    description,
    website,
    address,
    city,
    state,
    country,
    coordinates,
  };

  try {
    const updateBeer = await Beer.updateOne({ _id: id }, beeer);
if (updateBeer.matchedCount === 0 ) {
  res.status(422).json({ message: "items nao encontrado" });
  return;
}
    res.status(200).json(beeer);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


routes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const beer = await Beer.findOne({ _id: id });
  if (!beer) {
    res.status(422).json({ message: "items nao encontrado" });
    return;
  }
  try {
    await Beer.deleteOne({_id: id})
    res.status(200).json({message: "ok" });

  } catch (error) {
    res.status(500).json({ error: error });
  }
})

export default routes;
