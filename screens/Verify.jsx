import { useParams } from "react-router-dom"
import Header from "../component/Header"
import CashAdvance from "./CashAdvance"

const Verify = () => {
    let params = useParams()
    let money1 = params.money
    if(localStorage.getItem('token') == null){
        window.location.href = '/'
      }
  

function Func() {
  let local = localStorage.getItem('balance')
  let cashout = local - money1
  localStorage.setItem('balance', cashout)
alert(cashout)
}
function Func2(){
    
    window.location.href = '/cashadvance'
}

    return(
        <div>
            <Header title = "Выдача наличных" />

            <div className="Verify-block  "> <br /> <br />
                <h1>Проверьте провильность указанной информации</h1>
                <br /> <br />
                <br /> <br /><br /> <br /><br /> <br /> <h2>
                      <span style={{"color":"grey"}}> К ВЫДАЧЕ</span>   
                <span> {money1} сом </span> <br /> <br />
                <span style={{"color":"grey"}}> КОМИССИЯ</span>  
                <span> 0.00 сом </span> <br /> <br />
                <span style={{"color":"grey"}}> ИТОГО</span>  
                <span> {money1} сом </span>
                </h2>
              
            </div> <br /> <br /> <br /> <br />
             <br />
  
<div className="block" onClick={()=>Func2()} >
 <h2>выход</h2> 
</div>
<div className="block" onClick={()=>Func()} >
<h2>получить наличные</h2>
</div>


        </div>
    )
}

export default Verify