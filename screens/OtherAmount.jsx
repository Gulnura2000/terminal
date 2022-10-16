import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header'
const OtherAmount = () => {
    
    const [inp, setInp] = useState(null)
    let local = localStorage.getItem('balance')
    console.log(parseInt(inp) > local);
    const func = () => {
        if(localStorage.getItem('token') == null){
            window.location.href = '/'
          }
   
        if (inp != '' && local>parseInt(inp) && local != NaN && local != null &&parseInt(inp) <= 25000 ) {
            let local = localStorage.getItem('balance')
            let cashout = local - parseInt(inp)
            localStorage.setItem('balance', cashout)
            alert("транзакция прошла успешно!")
            window.location.href = '/cashadvance'
        } else if(parseInt(inp) == ''){
            alert('Введите сумму!')
        } else if(parseInt(inp) > local){
            alert('на вашем счете недостаточно средств')
        } else if(parseInt(inp) > 25000){
            alert('Лимит одной операции по выдаче наличных в этом банкомате: 25 000 сом')
        }
        
      
    }
    let newLocal = localStorage.getItem('balance')
    return (
        <div>
            <Header  title='выдача наличных' />
            <div className="container">
                <br /> <br />
                <h1>{newLocal}</h1>
                <br /> <br />
                <input id="pinInput" type="text" onChange={(e) => { setInp(e.target.value) }} /> <br /> <br />
                <div className="block" > отмена </div>
                <div className="block" onClick={func} >получить наличные</div>
            </div>
        </div>




    )
}
export default OtherAmount