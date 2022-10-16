import { useState } from "react"
import Header from "../component/Header"

const CurrencyExchange = () => {
    if(localStorage.getItem('token') == null){
        window.location.href = '/'
      }
    let dolLocal = localStorage.getItem('currency')
    let balanceLocal = localStorage.getItem('balance')
    let rub = localStorage.getItem('rubl')
    const [input, setInput] = useState()
    let inp = parseInt(input)
    const funcSom = () => {
        let sumSom = parseInt(balanceLocal) + (83 * parseInt(input))
        let sumDol = parseInt(dolLocal) - (parseInt(input))
        if (inp < dolLocal) {
            localStorage.setItem('currency', sumDol)
            localStorage.setItem('balance', sumSom)
        } else {
            alert('недостаточно средств')
        }


    }
    const FuncDol = () => {
        if ((parseInt(input) * 84) <= parseInt(balanceLocal)) {
            let sumSom = parseInt(balanceLocal) - (84 * parseInt(input))
            let sumDol = parseInt(dolLocal) + (parseInt(input))
            localStorage.setItem('currency', sumDol)
            localStorage.setItem('balance', sumSom)
        } else {
            alert('недостаточно средств')
        }

    }

    const FuncRub = () => {
        let rubSum = parseInt(rub)-parseInt(input)
        let sumSom = parseInt(balanceLocal)+(parseInt(input)*1.31)
        localStorage.setItem('rubl', rubSum)
        localStorage.setItem('balance', sumSom )
    }
    const SomRumFunc =()=>{
        let rubSum = parseInt(rub)+parseInt(input)
        let sumSom = parseInt(balanceLocal)-(parseInt(input))*1.31
        localStorage.setItem('rubl', rubSum)
        localStorage.setItem('balance', sumSom )
    }


    return (
        <div>
            <Header title="обмен валюты" />  <br />
            <div className="container">
                <div className="block">{dolLocal} $  <br /> <br /> {rub} рубль
                </div>
                <div className="block">{balanceLocal} som <br />
                </div>
                <input type="text " id="pinInput" onChange={(e) => setInput(e.target.value)} /> <br />
                <div className="block" onClick={funcSom} >доллар к сому </div>
                <div className="block" onClick={FuncDol} > сом к доллару </div>
                <div className="block" onClick={FuncRub} >рубль к сому </div>
                <div className="block" onClick={SomRumFunc} >сом к рублю  </div>
            </div>



        </div>
    )
}

export default CurrencyExchange