import Header from "../component/Header"
import { useState } from "react";
import { useParams } from "react-router-dom";
const PinCode = () => {
  const param = useParams();
  const lang = param.lang;
  if (localStorage.getItem('token') != null) {
    window.location.href = '/home/'+lang;
  }
  const [pin, setPin] = useState();
  
  if (pin == 2000) {
    window.location.href = '/home/'+lang
    localStorage.setItem('token', pin);
 
  }

  return (
    <div>
      <Header title='Mastercard' />
      <br /> <br /> <br /> <br />
      <center>
        {lang == 'rus' ?
        <><h1>Введите ПИН-код</h1> <br /></>
        :<><h1>Enter your PIN</h1> <br /></>
        }
        <input id="pinInput" type="text" onChange={(e) => {
          setPin(e.target.value)
        }} /> </center>


      <div className=" block blockIcon "><i class="fa-solid fa-arrow-left-long"></i> { 
      lang == 'rus' ? <>ВЫХОД</> : <>EXIT</> } </div>
    </div>

  )
}
export default PinCode