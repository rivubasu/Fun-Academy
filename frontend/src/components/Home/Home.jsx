import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import canvas from "../Data/canvas.png";
import pronounce from "../Data/ponounce.png";
import game from "../Data/tts.png";
import youtube from "../Data/youtube.png";
import "./Home.scss"; // Import CSS file for styling

function Home() {
  const history = useHistory();
  const submitHandler = async () => {
    const { res } = await axios.post("/api/auth/logout");
    localStorage.setItem("userInfo", "");
    history.push("/");
  };
  return (
    <div className="skewed-bg">
      <header>
        <nav>
          <ul>
            <li>
              <a style={{ color: "white" }} className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <button>
                <Link to="#" onClick={submitHandler}>
                  LogOut
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/contact">Contact Us</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="cardWrapper">
          <div className="card card1">
            <Link to="/keypress">
              <div className="centerView">
                <h2>Pronounciation</h2>
                <img src={pronounce} alt="Logo" />
              </div>

              <p>
                At our website, children can enhance their alphabet
                pronunciation skills by listening to a variety of engaging
                sounds.
              </p>
            </Link>
          </div>
          <div className="card card2">
            <a href="https://www.youtube.com/">
              <div className="centerView">
                <h2>Videos</h2>
                <img src={youtube} alt="Logo" />
              </div>

              <p>
                With the power of visual learning! Children can easily grasp the
                alphabet by watching our interactive videos.
              </p>
            </a>
          </div>

          <div className="card card3">
            <Link to="/whiteboard">
              <div className="centerView">
                <h2>Canvas</h2>
                <img src={canvas} alt="Logo" />
              </div>

              <p>
                Let your child's creativity soar! With canvas feature children
                can practice writing the alphabet.
              </p>
            </Link>
          </div>
          <div className="card card4">
            <Link to="/texttospeech">
              <div className="centerView">
                <h2>Text to Speech</h2>
                <img src={game} alt="Logo" />
              </div>
              <p>
                Listen to the text read aloud, boosting comprehension and
                pronunciation.
              </p>
            </Link>
          </div>
        </div>
      </main>
      <div className="footer">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
