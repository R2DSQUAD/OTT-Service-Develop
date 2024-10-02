import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainModal from './MainModal'
const movieListData ={
  id:0,
  main_num:0,
  genre:'',
  title:'',
  comment:'',
  price:'',
  img:''
}
const webtoonBanner=[]
const movieBanner=[]

const MainIndex = () => {

  const[movieList,setMovieList] =useState([])
  const[webtoonList,setWebtoonList] = useState([])
  
  const [mainModal,setMainModal] =useState(false)
  const [modalitem,setModalitem] = useState(movieListData)
  const onMainModalFn = (e) =>{
    const litag = e.target.parentElement
    const imgSrc=litag.children[0].getAttribute('src')
    const eId = e.currentTarget.getAttribute('data-id')
    const title = e.currentTarget.getAttribute('data-title')
    const price =e.currentTarget.getAttribute('data-price')
    const genre =e.currentTarget.getAttribute('data-genre')
    const comment =e.currentTarget.getAttribute('data-comment')

    
    setModalitem({
      id:parseInt(eId),
      genre:genre,
      title:title,
      img:imgSrc,
      
      price:price,
      comment:comment

    })
    setMainModal(true)
  }
useEffect(()=>{
  const axiosFn1=async ()=>{
    try{
        const res = await axios.get('http://localhost:3001/movieItems')
        console.log(res.data)
        
      setMovieList(res.data)
    }catch(err){
      alert(err)
    }
  }
  axiosFn1()
},[])
useEffect(()=>{
  const axiosFn2=async ()=>{
    try{
        const res = await axios.get('http://localhost:3001/webtoonItems')
        console.log(res.data)
        
      setWebtoonList(res.data)
    }catch(err){
      alert(err)
    }
  }
  axiosFn2()
},[])

if (webtoonList.length > 0) {
  while (
    webtoonBanner.length < 5 &&
    webtoonBanner.length < webtoonList.length
  ) {
    const random = Math.floor(Math.random() * webtoonList.length);
    if (!webtoonBanner.includes(webtoonList[random])) {
      webtoonBanner.push(webtoonList[random]);
    }
  }
}
if (movieList.length > 0) {
  while (
    movieBanner.length < 5 &&
    movieBanner.length < movieList.length
  ) {
    const random = Math.floor(Math.random() * movieList.length);
    if (!movieBanner.includes(movieList[random])) {
      movieBanner.push(movieList[random]);
    }
  }
}




  return (
    <>
    {mainModal && <MainModal modalitem={modalitem} setMainModal={setMainModal}/>} 
    {/* 모달창 정리 */}
    <div className="main">
    <div className="main-con">
     <div className="best">
       <div className="best-con">
       <div className="bCon">
           <span className='spanLeft'>왼쪽</span>
           <span className='spanRight'>오른쪽</span>
       </div>
       
       <div className="gallery">
         <ul>
           <li>사진1</li>
           <li>사진2</li>
           <li>사진3</li>
           <li>사진4</li>
           <li>사진5</li>
           <li>사진6</li>
         </ul>
       </div>
      
       </div>
     </div>
     <div className="movie">
       <div className="movie-con">
         <div className="top">
           <ul>
             <li>영화</li>
             <li>
              <Link to={"/movie"}>더보기</Link></li>
           </ul>
         </div>
         <div className="bottom">
         <ul>
         {movieBanner && movieBanner.map((el,index)=>{
          
          return(
            <li key={index}>
                <div className='image'> 
                    <img src={`/images/movie/${el.img}`} alt={el.img} onClick={onMainModalFn} key={index} data-id={el.id} data-comment={el.comment} data-title={el.title}  data-price={el.price}/>
                </div>
            </li>
        );
        }
        )}
         </ul>
         </div>
       </div>
     </div>
     <div className="main-drama">
       <div className="main-drama-con">
       <div className="top">
           <ul>
             <li>드라마</li>
             <li>더보기</li>
           </ul>
         </div>
         <div className="bottom">
         <ul>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
         </div>
       </div>
     </div>
     <div className="main-anime">
       <div className="main-anime-con">
       <div className="top">
           <ul>
             <li>애니메이션</li>
             <li>더보기</li>
           </ul>
         </div>
         <div className="bottom">
         <ul>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
         </div>
       </div>
     </div>
     <div className="main-webtoon">
       <div className="main-webtoon-con">
       <div className="top">
           <ul>
             <li>웹툰</li>
             <li><Link to={'webtoon'}>더보기</Link></li>
           </ul>
         </div>
         <div className="bottom">
         <ul>
         {webtoonBanner && webtoonBanner.map((el,index)=>{
         {
          return(
            <li key={index}>
                <div className='image'> 
                    <img src={`/images/webtoon/${el.img}`} alt={el.img} onClick={onMainModalFn} key={index} data-id={el.id} data-title={el.title} data-comment={el.comment}  data-price={el.price}/>
                </div>
            </li>
        );}
        }
        )}
         </ul>
         </div>
       </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default MainIndex