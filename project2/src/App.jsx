import React from "react";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import "./Player.css";
function App() {
  const [songs] = useState([
    {
      title: "Yoko Ono",
      artist: "Mob Rich",
      album: "Why No Why",
      img_src: "./Song_img/mob.jpeg",
      src: "./Songs/Yoko_Ono.mp3",
    },
    {
      title: "Stunnin",
      artist: "Curtis Waters",
      album: "Pity Party",
      img_src: "./Song_img/stunnin.jpeg",
      src:"./Songs/Stunnin.mp3",
    },
    {
      title: "Unholy",
      artist: "Sam Smith, Kim Petras",
      album: "Gloria",
      img_src: "./Song_img/unholy.png",
      src: "./Songs/Unholy.mp3",
    },
    {
      title: "Strange",
      artist: "Celeste",
      album: "Compilation 1.1",
      img_src: "./Song_img/Strange.jpg",
      src: "./Songs/Strange.mp3",
    },
    {
      title: "Lemon",
      artist: "Rihanna, N.E.R.D",
      album: "No One Ever Really Dies",
      img_src: "./Song_img/Lemon.jpeg",
      src: "./Songs/Lemon.mp3",
    },
    {
      title: "Boys A Liar Pt.2",
      artist: "Ice Spice, PinkPantheress",
      album: "Boy's a liar Pt. 2",
      img_src: "./Song_img/boy.jpeg",
      src: "./Songs/Boys_a_liar.mp3",
    },
    {
      title: "All I've Ever Known",
      artist: "Bahamas",
      album: "Bahamas Is Afie",
      img_src: "./Song_img/bahamas.jpeg",
      src: "./Songs/Bahamas.mp3",
    },
    {
      title: "Fake I.D.",
      artist: "Riton",
      album: "Fake ID",
      img_src: "./Song_img/fake_id.jpeg",
      src: "./Songs/Fake.mp3",
    },
    {
      title: "Big Bad Mood",
      artist: "Miraa May",
      album: "Let Me Die Inside You",
      img_src: "./Song_img/Jordan_Stephens.jpg",
      src: "./Songs/Big_bad_mood.mp3",
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
  
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;