import { useState } from "react"

const Header = (props)=>{
    const [time,setTime] = useState();
    const [date , setDate] = useState(); 
    function dateF(){
        let data = new Date().toDateString()
        setDate(data)
    }
    setInterval(dateF,1000)
    function timeF(){
        let hour = new Date().toLocaleTimeString()
  
    setTime(hour);
    }
    setInterval(timeF,1000)
    return(
        <div>
<header>
    <div className="title" > <h1>{props.title}</h1></div>
      <div className="data">
        <h1>{date}</h1>
       <h1>{time}</h1> 
      </div>
</header>

        </div>
    )
}
export default Header