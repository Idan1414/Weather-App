import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


function WeatherForm(props) {
  const inputRef = useRef();
  const nav = useNavigate();



  const onSearchClick = () => {
    nav("/?q="+inputRef.current.value)
    //props.doApiFromFather(inputRef.current.value);
  }
  return (
    <header className='container-fluid bg-warning bg-gradient p-2 mt-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo fst-italic col-auto text-light'>
            <h2 style={{
              color: "black",
              padding: "10px",
              fontSize: 33
            }}> Idan's Weather Website </h2>
          </div>
          <div className='d-flex col-md-4'>
            <input onKeyDown={(e)=>{
              if(e.key == "Enter")
              return onSearchClick();
            }} ref={inputRef} id="id_input" placeholder='Search for a city...' />
            <button onClick={onSearchClick} id='search_btn' className='btn btn-dark'> Search </button>
          </div>
        </div>
      </div>
    </header>

  )
}

export default WeatherForm