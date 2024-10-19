import React from 'react'

const colors: string[]  = ['red', 'green', 'blue', 'indigo', 'violet', 'rose', 'orange', 'yellow', 'black', 'white'];

const ColorList: React.FC = () => {

    return (
    <>
        <h1>Color List</h1>
        <ul>
            {colors.map((color, index) => {
            return <li key={index}>{color}</li>
})}
        </ul>
      
    </>
  );
};

export default ColorList;

