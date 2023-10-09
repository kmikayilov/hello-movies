import HeaderLogo from "../../assets/logos/header-logo.svg"
import "./Header.scss"

const Header = () => (
	<div className="header">
        <div className="header__logo">
            <img src={HeaderLogo} alt="" className="header__logo__img" />
        </div>
    </div>
)

export default Header