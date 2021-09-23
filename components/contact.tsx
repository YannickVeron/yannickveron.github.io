import Image from "next/image"
import sectionStyles from "./../styles/section.module.css"
import contactStyles from "./contact.module.css"

export default function Contact() {
    return (
        <section>
            <div className={sectionStyles.sectionContent}>
                <h2><Image src="/icons/mail.svg" width={25} height={25} className={sectionStyles.icon}></Image>Contact</h2>
                <ul className={contactStyles.linksList}>
                    
                    <li><a href="https://www.linkedin.com/in/yannick-veron/">Linkedin</a></li>
                </ul>
            </div>
        </section>
    )
}