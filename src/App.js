import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useState} from 'react';

function ChangeColor() {
    let [color, setColor] = useState('#fceeb5');
    let styleDiv = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
    };
    useEffect(() => {
        document.querySelector('body').style.backgroundColor = color;
        window.addEventListener('change', (e) => {
            setColor(e.target.value);
        });
    }, [color]);
    return (
        <div style={styleDiv}>
            <select>
                <option value={'#fceeb5'}>pand</option>
                <option value={'#a2ccb6'}>sea</option>
                <option value={'#ee786e'}>peach</option>
            </select>
            <p>{color}</p>
        </div>
    )
  
}

export default ChangeColor;


reportWebVitals();
