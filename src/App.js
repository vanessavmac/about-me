import React, {useState} from "react";
import work from './work';
import Header from "./components/Header"
import Subheader from "./components/Subheader"
import List from "./components/List"

const imgStyle = 
{ 
    width: "90%",
    marginLeft: "5%",
    display: "block",
    marginTop: "40px"
}


function App() {
    
    const [current, setCount] = useState(0);
    const increment = () => {
        const next = document.getElementById("next-content")
        const prev = document.getElementById("prev-content")
        
        prev.style.visibility = "visible"
        if (current === 3) {
            next.style.visibility = "hidden"
        }
        if (current < 5) {
            setCount(current+1);
        } 
     }

    const decrement = () => {
        const next = document.getElementById("next-content")
        const prev = document.getElementById("prev-content")
        
        next.style.visibility = "visible"
        if (current > 0) {
            setCount(current-1);
        }
        if (current === 1) {
            prev.style.visibility = "hidden"
        }
    }

    return (
    <div>
        <button onClick={decrement} id="prev-content"  type="button" className="btn btn-link">← Prev</button>
        <button onClick={increment} id="next-content"  type="button" className="btn btn-link">Next →</button>
        <Header content={work[current].title}/>
        <Subheader company={work[current].company} date={work[current].date}/>
        
        <ul>
            {work[current].list.map(bullet => (
                <List
                key={bullet.key}
                content={bullet.content}
                />
            ))}
        </ul>

        {work[current].key==5 && <a href="https://eyehopecanada.com" className="button-work" role="button">Website</a>} 
        {work[current].key==1 && <a href="https://github.com/vanessavmac" className="button-work" role="button">Github</a>} 
        {work[current].image !== null && <img src={work[current].image} style={imgStyle}></img>}
        
    </div>
    )
}


export default App;