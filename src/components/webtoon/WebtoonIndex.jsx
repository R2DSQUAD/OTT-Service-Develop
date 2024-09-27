import axios from "axios";
import React, { useEffect, useState } from "react";
import WebtoonModal from "./WebtoonModal";

const webtoonItems = {
  id: 0,
  title: "",
  price: "",
  img: "",
};


const WebtoonIndex = () => {
  const [isWebtoon, setIsWebtoonModal] = useState(false);
  const [modalItem, setModalItem] = useState(webtoonItems);
  const [webtoonItem, setWebtoonItem] = useState([]);


  useEffect(() => {
    const axiosFn = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/webtoonItems`);
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
      id: parseInt(eId)
    });
    setIsWebtoonModal(true);
  };

  return (
    <>
      {isWebtoon ? (
        <WebtoonModal modalItem={modalItem} setIsWebtoonModal={setIsWebtoonModal}/>
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
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    return (
                      <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                        <div className="itemImg">
                          <img src={`/images/webtoon/${el.img}`} alt={el.img} />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>인기웹툰</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    return (
                      <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                        <div className="itemImg">
                          <img src={`/images/webtoon/${el.img}`} alt={el.img} />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>공포 / 스릴러</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    return (
                      <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                        <div className="itemImg">
                          <img src={`/images/webtoon/${el.img}`} alt={el.img} />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>액션</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    return (
                      <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                        <div className="itemImg">
                          <img src={`/images/webtoon/${el.img}`} alt={el.img} />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="subMenu">
              <h2>판타지 / 이세계</h2>
              <ul>
                {webtoonItem &&
                  webtoonItem.map((el, idx) => {
                    return (
                      <li key={idx} data-id={el.id} onClick={webtoonModalFn}>
                        <div className="itemImg">
                          <img src={`/images/webtoon/${el.img}`} alt={el.img} />
                        </div>
                      </li>
                    );
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
