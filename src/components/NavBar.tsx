import "./NavBar"
import "../css/NavBar.css"

const NavBar = () => {
    const header = [
        {
            id: 1,
            name: "Home",
        }, {
            id: 2,
            name: "Blog",
        }, {
            id: 3,
            name: "Pricing"
        }, {
            id: 4,
            name: "Contact"
        }
    ];

    const button = header.map((btn) =>  <a key={btn.id} href="#" className="nav-link">{btn.name}</a>);

  return (
    <div className="nav-container">
        <div className="capella">
            <img src="./img/Group 2.png" alt="" />
        </div>

        <div className="nav-buttons">
            <ul className="btn">
                <li className="btn-list">
                    {button}
                </li>
            </ul>
        </div>

        <div className="sign-in">
            <ul>
                <li>Sign In</li>
                <li><span>Get Started Free</span></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar