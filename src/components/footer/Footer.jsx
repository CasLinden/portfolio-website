import "/src/css/Footer.css"
import casWithComputer480 from "/src/assets/cas-with-computer-480px.jpg"
import casWithComputer700 from "/src/assets/cas-with-computer-700px.jpg"
import casWithComputer1200 from "/src/assets/cas-with-computer-1200px.jpg"
import LinkBox from "../links/LinkBox"

function Footer () {
    return (
        <div className="footer">
            <div className="footer-top-wrapper">
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
            </div>
            <div className="footer-image">
                <img 
                    src={casWithComputer480}
                    srcSet={`
                        ${casWithComputer480} 480w, 
                        ${casWithComputer700} 700w, 
                        ${casWithComputer1200} 1200w
                    `}
                    sizes="(max-width: 480px) 480px, 
                           (max-width: 700px) 700px, 
                           1200px"
                    alt="picture of cas working on a laptop computer" 
                />
            </div>
        </div>
    )
}

export default Footer
