import React, { useEffect, useState } from 'react'
import DramaModal from './DramaModal'
import { useDispatch, useSelector } from 'react-redux'
import { dramaThunk } from '../../slice/dramaSlice'


const item={
  title:'',
  price:'',
  img:''
}

const DramaIndex = () => {

  const [dramaModal,setDramaModal]=useState(false)
  const [modalItem,setModalItem]=useState(item)
  // const [dramaList,setDramaList]=useState([])
  const dispatch=useDispatch()
  const items=useSelector(state=>state.drama.items)
  useEffect(()=>{
    dispatch(dramaThunk())
  },[])

  const dramaModalFn=(e)=>{
    // console.log(e.target.parentElement)
    // console.log(e.currentTarget)
    const litag=e.target.parentElement
    // console.log(litag.children[0])
    const imgsrc=litag.children[0].getAttribute('src')
    // console.log(imgsrc)
    const id=e.currentTarget.getAttribute('data-id')
  
    // console.log(id)
    setModalItem({
      id: parseInt(id),
      img: imgsrc,
    })
    setDramaModal(true)
  }
  const a1=items.filter(el => el.year==="2023" && el.type==="드라마")
  const a2=a1.reverse()

  return (
    <>
    {dramaModal && <DramaModal modalItem={modalItem}
      setDramaModal={setDramaModal}/>}
    <div className="drama">
      <div className="drama-con">
        <h1>드라마</h1>
        <br />
        <br />
        <div className="drama-list">
          <div className="popularList">
            <h3>최신작품</h3>
            <ul>
              {a2 &&a2.filter(el => el.year==="2023" && el.type==="드라마").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
          <div className="actionList">
            <h3>액션</h3>
            <ul>
              {items &&items.filter(el => el.genre==="액션" && el.type==="드라마").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
          <div className="fantasyList">
            <h3>판타지</h3>
            <ul>
              {items &&items.filter(el => el.genre==="판타지" && el.type==="드라마").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
          <div className="horrorList">
            <h3>호러</h3>
            <ul>
              {items &&items.filter(el => el.genre==="스릴러" && el.type==="드라마").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
          <div className="romanceList">
            <h3>로맨스</h3>
            <ul>
              {items &&items.filter(el => el.genre==="로맨스" && el.type==="드라마").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DramaIndex