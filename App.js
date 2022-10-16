import Verify from './screens/Verify'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CashAdvance from './screens/CashAdvance'
import Check from './screens/Check';
import Home from './screens/Home';
import LangList from './screens/LangList';
import Card from './screens/Сard';
import PinCode from './screens/PinCode';
import OtherAmount from './screens/OtherAmount';
import CurrencyExchange from './screens/CurrencyExchange';

// import PinCode from './screens/PinCode';
function App(){
let local = localStorage.getItem('balance');
if(local == null && local == undefined && local == NaN ){
  localStorage.setItem('balance',30000 )
  }else{
    console.log(local);
  }
let dollar =  localStorage.getItem('currency')
if(dollar == null && dollar == undefined && dollar == NaN ){
  localStorage.setItem('currency',30000 )
  }else{
    console.log(dollar);
  }

let rub = localStorage.getItem('rubl')
if(rub == null && rub == NaN && rub == undefined){
  localStorage.setItem('rubl',30000)
} else {
  console.log(rub);
}





  return(
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element = {<LangList/>}  />
  <Route path='/home/:lang' element = {<Home/>}  />
  <Route path='/cashadvance' element = {<CashAdvance/>}  />
  <Route path='/check' element = {<Check/>}/>
  <Route path='/verify/:money' element = {<Verify/>}/>
  <Route path='/card/:lang' element = {<Card/>}/>
  <Route path='/pincode/:lang' element = {<PinCode/>}/>
  <Route path='/otheramount' element = {<OtherAmount/>}/>
  <Route path='/currency' element = {<CurrencyExchange/>}/>

</Routes>
</BrowserRouter>
    </div>
  )
}
export default App;