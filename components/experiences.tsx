import Timeline from './timeline'
import Image from "next/image"
import sectionStyles from "./../styles/section.module.css"

export default function Experiences() {
    return (
        <section>
            <div className={sectionStyles.sectionContent}>
                <h2><Image src="/icons/suitcase.svg" width={25} height={25} className="icon"></Image>Experiences</h2>
                <Timeline timeEvents={[
                    {title:"2017-2018", subTitle:"IUT Annecy", desc:"Développment Web (5 personnes) Création d’un site web de gestion des formations en alternance (Wordpress/Bootstrap/PHP/JS)"},
                    {title:"Avril-Juillet 2018", subTitle:"AMPHENOL SOCAPEX Thyez", desc: "Développement d’un intranet(ASP .NET Core/Bootstrap/Entity Framework/Identity Framework)"},
                    {title : "Juillet 2019 - Juin 2020", subTitle: "Ropeup! Annecy", desc: "Développement d’une web app comptable en Alternance (Laravel/MySQL/VueJS)"},
                    {title : "Juin 2020 - Juin 2021", subTitle: "Ropeup! Annecy", desc: "Développement d’une web app comptable (Laravel/MySQL/VueJS)"}
                    ]}></Timeline>
            </div>
        </section>
    )
}