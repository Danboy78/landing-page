import "./index.css"

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <h1>Navaeo</h1>

            </div>

            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </div>

            <div>
              <span class="material-symbols-outlined">
                <i class="material-icons">menu</i>
              </span>
            </div>
        </nav>
    )
}