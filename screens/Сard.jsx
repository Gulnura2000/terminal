import { useRef, useState } from "react"
import { useParams } from "react-router-dom"

const Card = () => {
    const params = useParams()
    let lang = params.lang
    const [money, setMoney] = useState()
    if(localStorage.getItem('token') == null){
        window.location.href = '/'
      }

    const Func = () => {
        
         
         if(money != null  &&  money != undefined && money != '' ){
         let inputEL = parseInt(money)
        let balance = parseInt(localStorage.getItem('balance')) 
       let sum = inputEL + balance
       localStorage.setItem('balance',sum);
         alert('транзакция прошла успешно!')
         window.location.href = '/home'
         }else{
alert('пожалуйста введите сумму!')
         }
    }
    let newbalance = localStorage.getItem('balance')
   

    return (
        <div>

            <div className="card">
                <h1>  {newbalance} </h1>


                <input className="inputCard" onChange={(e)=>{
                    setMoney(e.target.value)
                }} type="text" /> <br /> <br />
                <div className="block" onClick={Func} > пополнить карту </div>
                <div className="block" > {lang == 'rus' ? <> отмена</> : <>exit</> }   </div>

            </div>
        </div>
    )
}
export default Card