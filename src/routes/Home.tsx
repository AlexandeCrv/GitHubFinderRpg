import { useState, useEffect } from "react";
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "../assets/logo.png";
import fundo from "../assets/fundo.png";
import "../components/Search";
import Search from "../components/Search";
import "./Projs";
import nuvem1 from "../assets/nuvem1.png";
import nuvem11 from "../assets/nuvem1-2.png";
import nuvem111 from "../assets/nuvem2-1.png";
import nuvem1111 from "../assets/nuvem2-2.png";
import espada from "../assets/espada.png";
import espadag from "../assets/espadag.png";
import pergaminho from "../assets/pergaminho.png";

import axios from "axios";
import link from "../assets/link.png";
import bbt from "../assets/bbt.png";
import escudo from "../assets/escudo (3).png";
import escudog from "../assets/escudo (4).png";
import lvl1 from "../assets/lvl 1.png";
import lvl10 from "../assets/lvl 10.png";
import lvl20 from "../assets/lvl 20.png";
import lvl30 from "../assets/lvl 30.png";
import lvl40 from "../assets/lvl 40.png";
import lvl50 from "../assets/lvl 50.png";
import lvl60 from "../assets/lvl 60.png";
import lvl70 from "../assets/lvl 70.png";
import lvl80 from "../assets/lvl 80.png";
import lvl90 from "../assets/lvl 90.png";
import lvl100 from "../assets/lvl 100.png";
import { useGitHub } from "../context/GitHubContext";
const Home = () => {
  const [isOpenFatak, setisOpenFatak] = useState(false);

  const [isOpenFdeff, setisOpenFdeff] = useState(false);
  const [imgbbt, setimgbbt] = useState("");
  const { user, setUser, setRepos } = useGitHub();
  const [proj, setProj] = useState<UserProps | null>(null);

  const getthub = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      const { data } = response;

      setUser(data);
      console.log(data);
    } catch (error) {
      alert("Player inexistente!");
    }
  };
  const getprojs = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user.login}/repos`
        );
        const { data } = response;
        setRepos(data);
      } catch (error) {
        alert("Player inexistente!");
      }
    }
  };

  const OpenFatak = () => {
    setisOpenFatak(!isOpenFatak);
  };
  const OpenFdeff = () => {
    setisOpenFdeff(!isOpenFdeff);
  };

  const atk = () => {
    OpenFatak();
  };
  const def = () => {
    OpenFdeff();
  };

  useEffect(() => {
    if (user) {
      const maxRepos = 100;
      const percentage = Math.min((user.public_repos / maxRepos) * 100, 100);

      let newImage = bbt;

      if (percentage >= 0 && percentage < 10) {
        newImage = lvl1;
      } else if (percentage >= 10 && percentage < 20) {
        newImage = lvl10;
      } else if (percentage >= 20 && percentage < 30) {
        newImage = lvl20;
      } else if (percentage >= 30 && percentage < 40) {
        newImage = lvl30;
      } else if (percentage >= 40 && percentage < 50) {
        newImage = lvl40;
      } else if (percentage >= 50 && percentage < 60) {
        newImage = lvl50;
      } else if (percentage >= 60 && percentage < 70) {
        newImage = lvl60;
      } else if (percentage >= 70 && percentage < 80) {
        newImage = lvl70;
      } else if (percentage >= 80 && percentage < 90) {
        newImage = lvl80;
      } else if (percentage >= 90 && percentage < 100) {
        newImage = lvl90;
      } else if (percentage >= 100) {
        newImage = lvl100;
      }

      if (imgbbt !== newImage) {
        setimgbbt(newImage);
      }
    }
  }, [user]);

  const getExperienceBarWidth = (repos: number) => {
    const maxRepos = 100;
    return `${Math.min((repos / maxRepos) * 100, 100)}%`;
  };
  return (
    <div className="home">
      <figure>
        <img className="logo" src={logo} alt="" />
      </figure>

      <div className="procura">
        <Search gethub={getthub} />
      </div>
      {isOpenFatak && (
        <div className="sujestaofqatak">
          <img className="pergaminho" src={pergaminho} alt="" />
          <div className="infosatak">
            <h1 className="h1atak">F.atak</h1>
            <p>
              Follow.atak são seus pontos de ataque no App, eles crescem de
              acordo com a quantidade de pessoas que você segue, logo crescendo
              seu network!
            </p>
            <figure>
              <img className="escudo-espadag" src={espadag} alt="" />
            </figure>
          </div>
        </div>
      )}

      {isOpenFdeff && (
        <div className="sujestaofdeff">
          <div>
            {" "}
            <img className="pergaminho" src={pergaminho} alt="" />
          </div>

          <div className="infosdeff">
            <h1 id="h1def" className="h1def">
              F.deff
            </h1>
            <p>
              Follow.deff são seus pontos de defesa no App, eles crescem de
              acordo com a quantidade seguidores que você tem, logo crescendo
              seu network!
            </p>
            <figure>
              <img className="escudo-espadag" src={escudog} alt="" />
            </figure>
          </div>
        </div>
      )}

      {user && (
        <div className="resphub">
          <figure className="fotos">
            <img className="fotohub" src={user.avatar_url} alt="" />

            <img id="bbt" className="fotohub" src={imgbbt} alt="" />
          </figure>
          <div className="infoshub">
            <div className="nomehub">
              <h2>{user.login}</h2>
              <p>{user.bio}</p>
            </div>

            <div className="barra">
              <p className="nivel">Nivel:{user.public_repos}</p>
              <div className="exphub">
                <div className="barraxp">
                  <div className="absolute">0</div>
                  <div className="absolute">10</div>
                  <div className="absolute">20</div>
                  <div className="absolute">30</div>
                  <div className="absolute">40</div>
                  <div className="absolute">50</div>
                  <div className="absolute">60</div>
                  <div className="absolute">70</div>
                  <div className="absolute">80</div>
                  <div className="absolute">90</div>
                  <div className="absolute">100</div>
                  <div
                    className="filled-bar"
                    style={{ width: getExperienceBarWidth(user.public_repos) }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="segefolow">
              <div>
                <p className="folow"> Follow.Atk</p>

                <div onClick={atk} className="button">
                  <p>
                    {user.following}
                    <img src={espada} alt="" />
                  </p>
                </div>
              </div>

              <div className="projetoseflows">
                <div>
                  <p>Confira os Projs!</p>

                  <Link className="button" to="/Projs" onMouseEnter={getprojs}>
                    <label htmlFor="">
                      Projetos <img src={link} alt="" />
                    </label>
                  </Link>
                </div>
              </div>
              <div>
                <p className="folow">Follow.Deff</p>

                <div onClick={def} className="button">
                  <p className="gap">
                    {user.followers} <img src={escudo} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="nuvens">
        <img className="cloud-1-1" src={nuvem1111} alt="" />
        <img className="cloud-1-2" src={nuvem1111} alt="" />
        <img className="cloud-2-1" src={nuvem111} alt="" />
        <img className="cloud-2-2" src={nuvem111} alt="" />
        <img className="cloud-2-3" src={nuvem1} alt="" />
        <img className="cloud-2-4" src={nuvem1} alt="" />
        <img className="cloud-2-5" src={nuvem1} alt="" />
        <img className="cloud-3-1" src={nuvem1} alt="" />
        <img className="cloud-3-2" src={nuvem11} alt="" />
      </div>
      <div>
        <img className="fundo" src={fundo} alt="" />
      </div>
    </div>
  );
};

export default Home;
