import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Music from "./components/Music";

function App() {
  const [count, setCount] = useState(0);

  const songs = [
    {
      name: "AjaniPutra",
      desc: "Sentimental",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      fav: false,
    },
    {
      name: "Simhadri Simha",
      desc: "Romantic",
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      fav: false,
    },
    {
      name: "simple Love",
      desc: "Emotional",
      fav: false,
      img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://plus.unsplash.com/premium_photo-1664699106229-1bc773380c35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://plus.unsplash.com/premium_photo-1673533034198-89bdebdd82d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://media.istockphoto.com/id/683208442/photo/bluetooth-speaker.webp?b=1&s=170667a&w=0&k=20&c=W2Tstf2yqEOynuBOT8-r2XxVkeBl27We-WR8BBXUo2o=",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://media.istockphoto.com/id/1445900203/photo/beautiful-young-woman-listening-to-music-using-headphones-asian-indian-girl-removing-her.webp?b=1&s=170667a&w=0&k=20&c=5qq_13rgZXY-k_ELu4rExTGwD4W51n0SyUWUxOTn3Fs=",
      fav: false,
    },
    {
      name: "KgF",
      desc: "gangster",
      img: "https://media.istockphoto.com/id/1431385333/photo/rear-view-of-man-with-headphones-on-beach.webp?b=1&s=170667a&w=0&k=20&c=vxaPQOUjPUDubo8DIXgpnJYyDbJDcFgV-HqcxkPDVh8=",
      fav: false,
    },
    {
      name: "Halunda Thavaru",
      desc: "Mother sentiment",
      img: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
    {
      name: "O manse",
      desc: "gaja",
      img: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww",
      fav: false,
    },
  ];

  const [data, setData] = useState(songs);

  const handleClick = (index) => {
    console.log(index);
    // console.log(cnt);
    setData((prev) => {
      return prev.map((song, i) => {
        if (i === index) {
          return { ...song, fav: !song.fav };
        }
        return song;
      });
    });

    setCount(() => {
      return data.filter((song) => song.fav).length;
    });
  };

  useEffect(() => {
    setCount(() => {
      return data.filter((song) => song.fav).length;
    });
  }, [data]);
  return (
    <>
      <Navbar count={count} />
      <p>{count}</p>
      <div id="cards" className="bg-zinc-200">
        {data.map((song, i) => (
          <Music key={i} song={song} handleClick={handleClick} index={i} />
        ))}
      </div>
    </>
  );
}

export default App;
