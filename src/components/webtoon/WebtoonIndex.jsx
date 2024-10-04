import axios from "axios";
import React, { useEffect, useState } from "react";
import WebtoonModal from "./WebtoonModal";

const webtoonItems = {
  id: 0,
  title: "",
  price: "",
  img: "",
};

const webtoonBanner = [];

const WebtoonIndex = () => {
  const [isWebtoon, setIsWebtoonModal] = useState(false);
  const [modalItem, setModalItem] = useState(webtoonItems);
  const [webtoonItem, setWebtoonItem] = useState([]);

  

  {webtoonItem &&
    webtoonItem.map((el, idx) => {

      if (webtoonItem && webtoonItem.length > 0) {
        const webtoonItemsOnly = webtoonItem.filter(el => el.type === "웹툰");
        
        while (webtoonBanner.length < 4 && webtoonBanner.length < webtoonItemsOnly.length) {
          const random = Math.floor(Math.random() * webtoonItemsOnly.length);
          if (!webtoonBanner.includes(webtoonItemsOnly[random])) {
            webtoonBanner.push(webtoonItemsOnly[random]);
          }
        }
      }
  })}

  useEffect(() => {
    const axiosFn = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/allItems`);
        setWebtoonItem(res.data);
      } catch (err) {
        alert("데이터가 없습니다. 네트워크 상태를 확인해주세요.");
      }
    };
    axiosFn();
  }, []);

  const webtoonModalFn = (e) => {
    const eId = e.currentTarget.getAttribute("data-id");
    setModalItem({
      id: parseInt(eId),
    });
    setIsWebtoonModal(true);
  };

  return (
    <>
      {isWebtoon ? (
        <WebtoonModal
          modalItem={modalItem}
          setIsWebtoonModal={setIsWebtoonModal}
        />
      ) : (
        <></>
      )}
      <div className="webtoon">
        <div className="webtoon-con">
          <div className="topContent">
            <h1>웹툰</h1>
            <hr />
          </div>
          <div className="bottomContent">
            <div className="mainBanner">
              <ul>
              {webtoonBanner &&
                  webtoonBanner.map((el, idx) => {
                    if (el.type === "웹툰") {
                      return (
                        <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                          <div className="itemImg">
                            <img
                              src={`/images/itemData/${el.img}`}
                              alt={el.img}
                            />
                          </div>
                        </li>
                      );
                    }
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>인기웹툰</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    if (el.type === "웹툰") {
                      return (
                        <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                          <div className="itemImg">
                            <img
                              src={`/images/itemData/${el.img}`}
                              alt={el.img}
                            />
                          </div>
                        </li>
                      );
                    }
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>공포 / 스릴러</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    if (el.type === "웹툰") {
                      if (el.genre === "스릴러" || el.genre === "공포") {
                        return (
                          <li
                            key={idx}
                            data-id={el.id}
                            onClick={webtoonModalFn}
                          >
                            <div className="itemImg">
                              <img
                                src={`/images/itemData/${el.img}`}
                                alt={el.img}
                              />
                            </div>
                          </li>
                        );
                      }
                    }
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>액션</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    if (el.type === "웹툰") {
                      if (el.genre === "액션") {
                        return (
                          <li
                            key={idx}
                            data-id={el.id}
                            onClick={webtoonModalFn}
                          >
                            <div className="itemImg">
                              <img
                                src={`/images/itemData/${el.img}`}
                                alt={el.img}
                              />
                            </div>
                          </li>
                        );
                      }
                    }
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>판타지</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    if (el.type === "웹툰") {
                      if (el.genre === "판타지") {
                        return (
                          <li
                            key={idx}
                            data-id={el.id}
                            onClick={webtoonModalFn}
                          >
                            <div className="itemImg">
                              <img
                                src={`/images/itemData/${el.img}`}
                                alt={el.img}
                              />
                            </div>
                          </li>
                        );
                      }
                    }
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebtoonIndex;
