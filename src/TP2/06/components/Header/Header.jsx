import "./HeaderC.css"

import Logo from "./GuiLogo.jpeg"

function Header(){
    return(
    
              <header className="header">
                <div><img src={Logo} alt="logo" /></div>
                <div className="title"><h1>Header</h1></div>
              </header>
            );
          }


export default Header