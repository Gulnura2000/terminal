import Header from "../component/Header"

const Check = ()=>{
    if(localStorage.getItem('token') == null){
        window.location.href = '/'
      }
return(
    <div>
        <Header title = "ИНформация о счете" />
<br />
<div className="cash-block">
    <center>
         <h3>РСК Банк</h3>
    <h2> ТЕЛЕФОН И СЛУЖЕБЫ ПОДДЕРЖКИ 00000000 <br /><br /><br /><br /><br />
  
    <h1 style={{"fontStyle":"unset"}} >Доступные средства {parseInt(localStorage.getItem('balance'))} </h1>
    </h2> 
    </center>
  

</div>

    </div>
)
}

export default Check