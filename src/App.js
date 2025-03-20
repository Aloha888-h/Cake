import React, { useState } from "react";
import "./styles.css";

const cakes = [
  { name: " Birthday Cake", image: "https://img.freepik.com/premium-vector/colorful-pixel-art-birthday-cake-with-candle_1292377-13627.jpg" },
  { name: " Strawberry Cake", image: "https://img.freepik.com/premium-vector/strawberry-cake-pixel-art-style_475147-2716.jpg" },
  { name: " Love Cake", image: "https://www.shutterstock.com/image-vector/cake-heart-on-top-pixel-260nw-2250588067.jpg" },
  { name: "Chocolate Cake", image: "https://www.wikihow.com/images/thumb/1/1a/M1-Draw-a-Pixel-Art-Cake8.png/460px-M1-Draw-a-Pixel-Art-Cake8.png" },
  { name: "Candle Cake", image: "https://static.vecteezy.com/system/resources/thumbnails/045/712/352/small_2x/birthday-cake-in-pixel-art-style-vector.jpg" },
  { name: "Lemon Cake", image: "https://www.shutterstock.com/image-illustration/pixel-art-piece-birthday-cake-260nw-2551492315.jpg" },
  { name: "Cupcake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNCK4zpORicz3Gw6TemPgMfk7X-a94sInD02_qdnS-1zmPeVy1edGLk-tMT2rwUS5QnM&usqp=CAU" },
  { name: "Ballon Cake", image: "https://static.vecteezy.com/system/resources/previews/022/222/387/non_2x/party-cake-with-balloon-in-pixel-art-style-vector.jpg" },
  { name: "🔄 Loading...", image: "" },
  { name: "❌ Error 404: Cake Not Found", image: "" }
];

export default function App() {
  const [cake, setCake] = useState(null);

  const getRandomCake = () => {
    const randomIndex = Math.floor(Math.random() * 10);
    setCake(cakes[randomIndex]);
  };

  return (
    <div className="container">
      {!cake ? (
        <button className="gift-box" onClick={getRandomCake}>
          🎁 Click Gift Box
        </button>
      ) : (
        <div className="result">
          <h2>{cake.name}</h2>
          {cake.image ? <img src={cake.image} alt="Cake" /> : <p>{cake.name}</p>}
        </div>
      )}
    </div>
  );
}

