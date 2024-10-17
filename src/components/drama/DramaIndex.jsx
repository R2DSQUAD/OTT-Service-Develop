import React, { useEffect, useState } from 'react'
import DramaModal from './DramaModal'
import { useDispatch, useSelector } from 'react-redux'
import { itemThunk } from '../../slice/itemSlice'

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
  const items=useSelector(state=>state.item.items)
  useEffect(()=>{
    const type='드라마'
    dispatch(itemThunk(type))
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
  const [arr,setArr]=useState()
  const ageChangeFn=(e)=>{
    const h3=e.target.parentElement.children[0]
    const name=e.target.name
    const age=e.target.value
    h3.innerText=`${age}`
    age>0?setArr(items.filter(el=> el.age===age).slice(0,4)):setArr(items.slice(0,4))
  }
  const overFn=(e)=>{
    const divTag=e.target.parentElement
    const id=e.currentTarget.getAttribute('data-id')
    const selItem=items.filter(el=>el.id===id)
    divTag.children[1].innerText=selItem[0].title
  }
  const leaveFn=(e)=>{
    const divTag=e.target.parentElement    
    divTag.children[1].innerText=``
  }

  return (
    <>
    {dramaModal ? <DramaModal modalItem={modalItem}
      setDramaModal={setDramaModal}/>:<></>}
    <div className="drama">
      <div className="drama-con">
        <div className="topContent">
          <h1>드라마</h1>
          <hr />
        </div>
        <div className="drama-list">
          <div className="dramaList">
            <div className="drama-head">
            <h2>전체작품</h2>
            <select name="age" id="age" onChange={ageChangeFn} defaultValue={true}>
                <option value="all">전체</option>
                <option value="15">15</option>
                <option value="19">19</option>
              </select>
            </div>           
            <ul>
              {arr ?arr.map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )}):items.slice(0,4).map((el,idx)=>{
                  return(
                    <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                      <img src={`/images/itemData/${el.img}`} alt={el.img} />
                  </li>
                  )
                })}
            </ul>
          </div>
          <div className="dramaList">
            <h2>판타지</h2>
            <ul>
              {items &&items.filter(el => el.genre==="판타지").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn} onMouseEnter={overFn} onMouseLeave={leaveFn}>
                    <div className="item-img">
                      <img src={`/images/itemData/${el.img}`} alt={el.img} /><span></span>
                    </div>                
                </li>
                )
              })}
            </ul>
          </div>
          <div className="dramaList">
            <h2>액션</h2>
            <ul>
              {items &&items.filter(el => el.genre==="액션").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
          <div className="dramaList">
            <h2>호러</h2>
            <ul>
              {items &&items.filter(el => el.genre==="스릴러").map((el,idx)=>{
                return(
                  <li key={idx} data-id={el.id} onClick={dramaModalFn}>                
                    <img src={`/images/itemData/${el.img}`} alt={el.img} />
                </li>
                )
              })}
            </ul>
          </div>
          <div className="dramaList">
            <h2>로맨스</h2>
            <ul>
              {items &&items.filter(el => el.genre==="로맨스").map((el,idx)=>{
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