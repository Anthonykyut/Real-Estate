import "./NavBar"
import "../css/NavBar.css"

const NavBar = () => {
    
  return (
    <div className="flex justify-between items-center p-5">
        <div className="capella">
            <img src="./img/Group 2.png" alt="" className="w-[8rem]" />
        </div>

        <div className="">
            <ul className="">
                <li className="flex gap-9">
                    <a href="#"> Home </a>
                    <a href="#"> Blog</a>
                    <a href="#"> Pricing</a>
                    <a href="#"> Contact</a>
                </li>
            </ul>
        </div>

        <div className="">
            <ul className="flex gap-4 justify-center items-center">
                <li>Sign In</li>
                <li> 
                    <a href="/market" className="bg-violet-700 rounded-3xl text-white flex justify-center items-center px-4 py-2 gap-1"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        Market
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar