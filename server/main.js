const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var data = null;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/anime_website");

    const cardSchema = new mongoose.Schema({
        title: String,
        desc: String,
        src: String,
        page: {
            title: String,
            desc: String,
            src: String
        },
        cards: [
            {
                title: String,
                desc: String,
                src: String
            }
        ]
    });

    const card = new mongoose.model("card", cardSchema);

    const opm = new card({
        title: "One Punch Man",
        desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
        src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png",
        page: {
            title: "One Punch Man",
            desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
            src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
        },
        cards: [
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            }
        ]
    });
    await opm.save();
    data = await card.find();

}

const app = express();
app.use(cors());

app.get('/mkc', (req, res) => {
    res.json(data);
});

app.listen(3001, (err) => {
    console.log(err);
});