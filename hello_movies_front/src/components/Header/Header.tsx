import React from 'react'

import "./Header.scss"

import HeaderLogo from "../../assets/logos/header-logo.svg"

const Header: React.FC = () => (
	<div className="header">
        <div className="header__logo">
            <img src={HeaderLogo} alt="" className="header__logo__img" />
        </div>
    </div>
)

export default Header