import Image from "next/image"
import sectionStyles from "./../styles/section.module.css"

export default function Skills() {
    return (
        <section className={sectionStyles.fullHeight}>
            <div className={sectionStyles.sectionContent}>
                <h2><Image src="/icons/wrench.svg" width={25} height={25} className={sectionStyles.icon}></Image>Compétences</h2>
                <div>
                    <h3>Langages</h3>
                    <ul>
                        <li>HTML5/CSS</li>
                        <li>PHP/JS</li>
                        <li>C/C++/C#</li>
                        <li>Python</li>
                        <li>mySQL</li>
                        <li>ASP.NET / .NET Core </li>
                    </ul>
                </div>
                <div>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>VueJS</li>
                        <li>Laravel</li>
                        <li>Symphony</li>
                        <li>ReactJS/NextJS</li>
                    </ul>
                </div>
                <div>
                    <h3>Autres</h3>
                    <ul>
                        <li>Anglais Niveau B2</li>
                        <li>Permis B</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}