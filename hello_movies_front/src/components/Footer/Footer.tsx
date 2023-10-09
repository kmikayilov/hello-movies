import "./Footer.scss"
import FooterLogo from "../../assets/logos/footer-logo.svg"

import FacebookLogo from "../../assets/social icons/facebook.svg"
import LinkedInLogo from "../../assets/social icons/linkedIn.svg"
import DribbbleLogo from "../../assets/social icons/dribbble.svg"
import InstagramLogo from "../../assets/social icons/instagram.svg"

const Footer = () => (
	<div className="footer">
        <div className="footer__logo">
            <div className="footer__logo__wrapper">
                <img src={FooterLogo} alt="" className="footer__logo__wrapper__img" />
            </div>
            <div className="footer__logo__divider"></div>
            <div className="footer__logo__copyright">© Copyright 2023 HelloMovies. All Rights Reserved</div>
        </div>
        
        <div className="footer__socials">
            <div className="footer__socials__logo">
                <img src={FacebookLogo} alt="" className="footer__socials__logo__img" />
            </div>
            <div className="footer__socials__logo">
                <img src={LinkedInLogo} alt="" className="footer__socials__logo__img" />
            </div>
            <div className="footer__socials__logo">
                <img src={DribbbleLogo} alt="" className="footer__socials__logo__img" />
            </div>
            <div className="footer__socials__logo">
                <img src={InstagramLogo} alt="" className="footer__socials__logo__img" />
            </div>
        </div>
    </div>
)

export default Footer