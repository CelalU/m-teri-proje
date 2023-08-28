const express = require("express");
const app = express();
const router = express.Router();

const db = require("./db");
const Tablo = require("./tablo");
const müşteri = require("./müşteri");

db.then(() => {
  console.log(" MongoDB bağlantısı başarılı");
}).catch((err) => {
  console.log("MongoDB bağlantı hatası: " + err);
});

router.post("/tablo", async (req, res) => {
  const tablo = new Tablo(req.body);
  try {
    await tablo.save();
    res.send(tablo);
  } catch (err) {
    console.log(err);
  }
});
router.get("/tablo", async (req, res) => {
  try {
    const tasks = await Tablo.find().sort({ precesdence: 1 });
    res.send(tasks);
    console.log(tasks);
  } catch (err) {
    console.log(err);
  }
});
router.get("tablo/name/:name ", async (req, res) => {
  try {
    const task = await Tablo.findOne({ name: req.params.name });
    res.send(task);
    console.log(task);
  } catch (err) {
    console.log(err);
  }
});

router.get("task/update/", async (req, res) => {
  try {
    const task = await Task.find().sort({ updatedat: -1 });
    res.send(task);
    console.log("siparişinizin son durumu");
  } catch (err) {
    console.log(err);
  }
});
router.get("/", (req, res) => {
  res.send("Ana sayfaya hoş geldiniz lütfen siparişinizi oluşturunuz.");
});
router.get("/celal/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const tasks = await Tablo.findById(id);
    res.send(tasks);
    console.log(tasks);
  } catch (err) {
    console.log(err);
  }
});

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server çalışıyor...");
});
