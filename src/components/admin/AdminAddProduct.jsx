import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const addProductData ={
    title:"",
    price:"",
    age:"",
    year:"",
    genre:"",
    time:"",
    comment:"",
    type:""


}


    const AdminAddProduct = () => {
    const [add,setAdd]=useState(addProductData)
    const [postImg, setPostImg] = useState('');
    const [previewImg, setPreviewImg] = useState([]);
    const navigate=useNavigate()


    function uploadFile(e) {
        let fileArr = e.target.file[0];
        setPostImg(fileArr);

        let fileRead = new FileReader();
        fileRead.onload = function() {
            setPreviewImg(fileRead.result);
        };
        if(fileArr && fileArr.type.match('image.*')){
            fileRead.readAsDataURL(fileArr);
        }
    }
    const onAddChangeFn= (e) =>{
        const name=e.target.name
        const value=e.target.value

        setAdd({
            ...add,
            [name]:value
        })
    }
    const onAddFn = (e) =>{
    const addAxiosFn = async (e) =>{
        const res = await axios.get(`http://localhost:3001/allItems`)

        const num = res.data.findIndex(el=>{
            return el.title === add.title
        })

        if(num != -1){
            alert("제목을 바꿔주세요")
            return
        }
        const addOk = await axios.post(`http://localhost:3001/allItems`,add)
        navigate(0)
        alert('상품추가 성공')
    }
    addAxiosFn()

    }

  return (
    <>
    <div className="add-product">
    <div className="add-product-con">
      <h1>상품추가</h1>
      <ul>
        <li>
          <input type="text" name="title" id="title" placeholder='제목'          
             value={add.title}
             onChange={onAddChangeFn}/>
        </li>
        <li>
          <input type="text" name="price" id="price" placeholder='가격'
            value={add.price}
            onChange={onAddChangeFn}/>
        </li>
        <li>
          <input type="text" name="age" id="age" placeholder='연령대'
             value={add.age}
             onChange={onAddChangeFn}/>
        </li>
        <li>
          <input type="text" name="year" id="year" placeholder='년도'
             value={add.year}
             onChange={onAddChangeFn}/>
        </li>
        <li>
          <input type="text" name="genre" id="genre" placeholder='장르'
            value={add.genre}
            onChange={onAddChangeFn} />
        </li>
        <li>
          <input type="text" name="time" id="time" placeholder='상영시간'
            value={add.time}
            onChange={onAddChangeFn} />
        </li>
        <li>
          <input type="text" name="comment" id="comment" placeholder='내용'
             value={add.comment}
             onChange={onAddChangeFn}/>
        </li>
        <li>
            <input multiple type="file" accept='image/jpg,image/png,image/jpeg,image/webp' name='img'
            onChange={uploadFile}
            className='s1' />
        </li>

        <li>
          <select name="type" id="type"value={add.type}
             onChange={onAddChangeFn}>
            <option value='영화'>영화</option>
            <option value="드라마">드라마</option>
            <option value="애니메이션">애니메이션</option>
            <option value="웹툰">웹툰</option>
          </select>
        </li>
        <li>
          <button  onClick={onAddFn} >상품추가</button>        
        </li>
      </ul>
    </div>
  </div>
</>
  )

}

export default AdminAddProduct