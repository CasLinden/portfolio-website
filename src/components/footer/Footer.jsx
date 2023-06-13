import "/src/css/Footer.css"
import calling from "/src/assets/calling.jpeg"
import LinkBox from "../links/LinkBox"

function Footer () {
    return (
        <div className="footer">
            <div className="contact-me">
                <h2>Contact Me</h2>
                <p> Please get in touch about working with me, I&apos;m excited to hear from you!</p>
                <p>Tokyo Suginami-ku <br />
                Hounan 1-50-7 168-0062
                </p>
                <p>
                070-4072-8944 <br />
                cas_linden@msn.com
                </p>
            </div>
            <LinkBox></LinkBox>
            <div className="footer-image">
                <img src={calling} alt="" />
            </div>
        </div>
    )
}

export default Footer