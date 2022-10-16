import Header from "../component/Header"

const CashAdvance = () => {
    if(localStorage.getItem('token') == null){
        window.location.href = '/'
      }
    function cash(money){
        // var cashout = balance-money;
        // localStorage.setItem('balance',cashout);
        // alert('!')
        window.location.href =' /verify/'+money
      
    }
    return (
        <div>
            <Header title =" Выдача наличных" />
            <main>
            <br />
  <center><h1 > Валюта:Кыргызский сом <br /> Лимит одной операции по выдаче наличных в этом банкомате: 25 000 сом </h1></center>  
  <br /> <br /> <br />
  <div className="container">
<div className="block" onClick={()=>cash(100)}>  100 </div> 
    <div className="block"onClick={()=>cash(4000)} > 4000</div>
    <div className="block" onClick={()=>cash(500)} >  500 </div>
    <div className="block" onClick={()=>cash(22000)} > 22000 </div>
    <div className="block" onClick={()=>cash(2000)}> 2000 </div>
    <div className="block" onClick={()=>cash(2500)}> 25000 </div>
    <div className="block" > Выход</div>
   <a href="/otheramount"><div className="block"> другая сумма</div></a> 
  </div>
            </main>
        </div>
    )
}
export default CashAdvance