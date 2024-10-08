import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainModal from "./MainModal";
const mainListData = {
  id: "",
  main_num: "",
  genre: "",
  title: "",
  comment: "",
  price: "",
  img: "",
};
const webtoonBanner = [];
const movieBanner = [];
const animeBanner =[];
const dramaBanner =[];
const mainBanner =[];

const MainIndex = () => {
 
  
 
  

  const [movieList, setMovieList] = useState([]);
  const [webtoonList, setWebtoonList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [dramaList, setDramaList] = useState([]);
  const [mainList, setMainList] = useState([]);


  const [mainModal, setMainModal] = useState(false);
  const [modalitem, setModalitem] = useState(mainListData);
  const onMainModalFn = (e) => {
    const litag = e.target.parentElement;
    const imgSrc = litag.children[0].getAttribute("src");
    const eId = e.currentTarget.getAttribute("data-id");
    const title = e.currentTarget.getAttribute("data-title");
    const price = e.currentTarget.getAttribute("data-price");
    const genre = e.currentTarget.getAttribute("data-genre");
    const comment = e.currentTarget.getAttribute("data-comment");
    const age = e.currentTarget.getAttribute("data-age");
    const year = e.currentTarget.getAttribute("data-year");
    const time = e.currentTarget.getAttribute("data-time");
    setModalitem({
      id: parseInt(eId),
      genre: genre,
      title: title,
      img: imgSrc,
      price: price,
      comment: comment,
      age:age,
      year:year,
      time:time
    });
    setMainModal(true);
  };
 
  
// 함수 표현식


// 함수를 3000 후에 실행 1000-> 1초

  useEffect(() => {
    const axiosFn = async () => {
      try {
        const res = await axios.get("http://localhost:3001/allItems");
        console.log(res.data);
        setWebtoonList(res.data);
        setMovieList(res.data);
        setAnimeList(res.data);
        setDramaList(res.data);
        setMainList(res.data);
       
      } catch (err) {
        alert(err);
      }
    };
    axiosFn();
  }, []);

  while (
    mainBanner.length < 7 &&
    mainBanner.length < mainList.length
  ) {
    const random = Math.floor(Math.random() * mainList.length);
    if (!mainBanner.includes(mainList[random])) {
      mainBanner.push(mainList[random]);
    }
  }
  if (webtoonList && webtoonList.length > 0) {
    const webtoonItemsOnly = webtoonList.filter((el) => el.type === "웹툰");

    while (
      webtoonBanner.length < 5 &&
      webtoonBanner.length < webtoonItemsOnly.length
    ) {
      const random = Math.floor(Math.random() * webtoonItemsOnly.length);
      if (!webtoonBanner.includes(webtoonItemsOnly[random])) {
        webtoonBanner.push(webtoonItemsOnly[random]);
      }
    }
  }

  if (movieList && movieList.length > 0) {
    const movieListItemsOnly = movieList.filter((el) => el.type === "영화");

    while (
      movieBanner.length < 5 &&
      movieBanner.length < movieListItemsOnly.length
    ) {
      const random = Math.floor(Math.random() * movieListItemsOnly.length);
      if (!movieBanner.includes(movieListItemsOnly[random])) {
        movieBanner.push(movieListItemsOnly[random]);
      }
    }
  }
  if (animeList && animeList.length > 0) {
    const animeListItemsOnly = animeList.filter((el) => el.type === "애니메이션");

    while (
      animeBanner.length < 5 &&
      animeBanner.length < animeListItemsOnly.length
    ) {
      const random = Math.floor(Math.random() * animeListItemsOnly.length);
      if (!animeBanner.includes(animeListItemsOnly[random])) {
        animeBanner.push(animeListItemsOnly[random]);
      }
    }
  }
  if (dramaList && dramaList.length > 0) {
    const dramaListItemsOnly = dramaList.filter((el) => el.type === "드라마");

    while (
      dramaBanner.length < 5 &&
      dramaBanner.length < dramaListItemsOnly.length
    ) {
      const random = Math.floor(Math.random() * dramaListItemsOnly.length);
      if (!dramaBanner.includes(dramaListItemsOnly[random])) {
        dramaBanner.push(dramaListItemsOnly[random]);
      }
    }
  }
  

  return (
    <>
      {mainModal && (
        <MainModal modalitem={modalitem} setMainModal={setMainModal} />
      )}
      {/* 모달창 정리 */}
      <div className="main">
        <div className="main-con">
          <div className="maintop">
            <div className="maintop-con">
              <div className="gallery">
                <ul>
                {mainBanner &&
                    mainBanner.map((el, index) => {
                       {
                        return (
                          <li key={index}>
                            <div className="image">
                              <img
                                src={`/images/itemData/${el.img}`}
                                alt={el.img}
                                onClick={onMainModalFn}
                                key={index}
                                data-id={el.id}
                                data-comment={el.comment}
                                data-title={el.title}
                                data-price={el.price}
                                data-age={el.age}
                                data-year={el.year}
                                data-time={el.time}
                              />
                            </div>
                          </li>
                        );
                      }
                    })}
                </ul>
              </div>
              <div className="bCon">
                <span className="spanLeft">왼쪽</span>
                <span className="spanRight">오른쪽</span>
              </div>
            </div>
          </div>
          <div className="movie">
            <div className="movie-con">
              <div className="top">
                <ul>
                  <li>영화</li>
                  <li>
                    <Link to={"movie"}>더보기</Link>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <ul>
                  {movieBanner &&
                    movieBanner.map((el, index) => {
                      if (el.type === "영화") {
                        return (
                          <li key={index}>
                            <div className="image">
                              <img
                                src={`/images/itemData/${el.img}`}
                                alt={el.img}
                                onClick={onMainModalFn}
                                key={index}
                                data-id={el.id}
                                data-comment={el.comment}
                                data-title={el.title}
                                data-price={el.price}
                                data-age={el.age}
                                data-year={el.year}
                                data-time={el.time}
                              />
                            </div>
                          </li>
                        );
                      }
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="main-drama">
            <div className="main-drama-con">
              <div className="top">
                <ul>
                  <li>드라마</li>
                 <li><Link to={"drama"}>더보기</Link></li> 
                </ul>
              </div>
              <div className="bottom">
                <ul>
                {dramaBanner &&
                    dramaBanner.map((el, index) => {
                      {
                        if (el.type === "드라마")
                          return (
                            <li key={index}>
                              <div className="image">
                                <img
                                  src={`/images/itemData/${el.img}`}
                                  alt={el.img}
                                  onClick={onMainModalFn}
                                  key={index}
                                  data-id={el.id}
                                  data-title={el.title}
                                  data-comment={el.comment}
                                  data-price={el.price}
                                  data-age={el.age}
                                  data-year={el.year}
                                  data-time={el.time}
                                />
                              </div>
                            </li>
                          );
                      }
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="main-anime">
            <div className="main-anime-con">
              <div className="top">
                <ul>
                  <li>애니메이션</li>
                  <li>
                    <Link to={"anime"}>더보기</Link></li>
                </ul>
              </div>
              <div className="bottom">
                <ul>
                {animeBanner &&
                    animeBanner.map((el, index) => {
                      {
                        if (el.type === "애니메이션")
                          return (
                            <li key={index}>
                              <div className="image">
                                <img
                                  src={`/images/itemData/${el.img}`}
                                  alt={el.img}
                                  onClick={onMainModalFn}
                                  key={index}
                                  data-id={el.id}
                                  data-title={el.title}
                                  data-comment={el.comment}
                                  data-price={el.price}
                                  data-age={el.age}
                                  data-year={el.year}
                                  data-time={el.time}
                                />
                              </div>
                            </li>
                          );
                      }
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="main-webtoon">
            <div className="main-webtoon-con">
              <div className="top">
                <ul>
                  <li>웹툰</li>
                  <li>
                    <Link to={"webtoon"}>더보기</Link>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <ul>
                  {webtoonBanner &&
                    webtoonBanner.map((el, index) => {
                      {
                        if (el.type === "웹툰")
                          return (
                            <li key={index}>
                              <div className="image">
                                <img
                                  src={`/images/itemData/${el.img}`}
                                  alt={el.img}
                                  onClick={onMainModalFn}
                                  key={index}
                                  data-id={el.id}
                                  data-title={el.title}
                                  data-comment={el.comment}
                                  data-price={el.price}
                                  data-age={el.age}
                                  data-year={el.year}
                                  data-time={el.time}
                                />
                              </div>
                            </li>
                          );
                      }
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIndex;
