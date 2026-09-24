import  instagramIcon  from "../assets/instagramIcon.png";
import  linkedinIcon  from "../assets/linkedinIcon.png";
import  facebookIcon  from "../assets/facebookIcon.png";
export function Footer() {
    return(
        <footer id="footer">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}