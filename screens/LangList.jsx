import Header from "../component/Header"

const LangList = ()=>{
    if (localStorage.getItem('token') != null) {
        window.location.href = '/home';
      }
    return(
        <div>
            <Header title = "Выберите язык" /> <br /> <br />
           <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div className="container">
            <div className=" block blockIcon "><i class="fa-solid fa-arrow-left-long"></i> ВЫХОД </div>
            <div className="langblock">
 <a href=""><div className=" lang KgBlock"> КЫРГЫЗ </div></a>   
   <a href="/pincode/rus"><div className=" lang RusBlock"> РУССКИЙ </div></a> 
   <a href="/pincode/en"><div className=" lang EnBlock"> ENGLISH </div></a> 
</div>
 
        </div>
     
        </div>
    )
}
export default LangList