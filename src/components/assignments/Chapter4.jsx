import React from 'react'
import "./Chapter4.css"

const Chapter4 = () => {

    const handleDoubleClick =(e)=>{
        e.stopPropagation();
        // alert("Double Clicked");
    }
    const handleClick =(e)=>{
        e.stopPropagation();
        // console.log("Clicked");
    }
    const handleInput =(e)=>{
        e.stopPropagation();
        // console.log("Focused on the onFocus ");
        
    }
    const handleBlur =(e)=>{
        e.stopPropagation();
        // console.log("Focused on the onBlur");
        
    }
    const handleCopy =()=>{
        // alert("Something is copied")
    }
    const handleCut =()=>{
        // alert("Something is cuted")
    }
    const handlePaste =()=>{
        // alert("Something is pasted")
    }
    const handleForm =(e)=>{
        e.preventDefault();
    }
    const handleCClick =(e)=>{
        // console.log("Input is clicked")
    }

  return (
    <div className='container' >
      <div className="image" >
        <img src="https://source.unsplash.com/random/200x200?sig=incrementingIdentifier" alt="img" />
      </div>
      <div className="button">
        <button onDoubleClick={handleDoubleClick} onClick={handleClick} >Click assignment</button>
      </div>
      <div>
        <input  onFocus={handleInput} onBlur={handleBlur} onCut={handleCut} onPaste={handlePaste} type="text" />
      </div>
      {/* <div>
        <p onCopy={handleCopy}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempora optio incidunt atque obcaecati eos ut laboriosam, suscipit dignissimos, eveniet quia mollitia quo cum magnam autem voluptatibus quas, eligendi cumque.</p>
      </div> */}
      <div>
        <form onClick={handleForm} action="">
            {/* <textarea  name="" id="" cols="30" rows="10"></textarea> */}
            
            <button>Button</button>
        </form>
      </div>
      
    </div>
  )
}

export default Chapter4
