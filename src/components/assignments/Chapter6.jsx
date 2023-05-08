import React, { useState } from "react";

const Chapter6 = () => {
  const [options, setOptions] = useState([]);
  const [nation, setNation] = useState({name:"",value:""});

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleInput = (e) => {
    setNation({ ...nation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nation.name && nation.value) {
      setOptions([...options, nation]);
      setNation({name:"",value:""});
    } else {
      console.log("enter valid value");
    }
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="IN">--select--</option>
        {options.map(op =><option value={op.value}>{op.name}</option>)} 
      </select>

      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleInput}
          value={nation.name}
        />
        <input
          type="text"
          name="value"
          placeholder="value"
          onChange={handleInput}
          value={nation.value}
        />
      </form>
      <button >Submit</button>
    </div>
  );
};

export default Chapter6;
