import { useParams } from "react-router-dom"
import Header from "../component/Header"

const Home = () => {
  const params = useParams()
  let lang = params.lang
  if (localStorage.getItem('token') == null) {
    window.location.href = '/'
  }

  const exit = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }


  return (
    <div>
      <Header title="Выберите операцию" />
      <main>
        <br />
        <center><h1 >  {lang == 'rus' ? <> Выберите операцию</> : <>Choose an operation</>} </h1></center>
        <br /> <br /> <br />
        <div className="container">
          <a href="/cashadvance"> <div className="block"> {lang == 'rus' ? <>выдача наличныx</> : <>cash advance</> }    </div></a>
          <div className="block"> оплата услуг </div>
          <a href={"/card/"+lang}><div className="block">   пополнить карту </div></a>
          <div className="block"> возврат карты </div>
          <a href='/currency'><div className="block"> Обмен валюты </div></a>
          <div className="block"> СМС - информирование </div>
          <div className="block" onClick={exit} > Выход </div>
          <a href="/check"><div className="block"> счета и переводы </div></a>
        </div>


      </main>
    </div>
  )
}
export default Home