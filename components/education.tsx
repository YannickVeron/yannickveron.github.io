import sectionStyles from "./../styles/section.module.css"
import Image from "next/image"

export default function Education() {
    return (
        <section className={sectionStyles.fullHeight}>
            <div className={sectionStyles.sectionContent}>
                <h2><Image src="/icons/graduation.svg" width={25} height={25} className="icon"></Image>Diplômes</h2>
                <div>
                    <h4>Licence Professionnelles - Développeur informatique multi-supports</h4>
                    <p>Université Savoie Mont-Blanc - IUT d'Annecy</p>
                </div>
                <div>
                    <h4>DUT Informatique</h4>
                    <p>Université Savoie Mont-Blanc - IUT d'Annecy</p>
                </div>
                <div>
                    <h4>BAC Science et Technique de l'industrie et du Développement Durable</h4>
                    <small>Option Système d'Information et Numérique</small>
                    <p>Lycée Charles PONCET - Cluses</p>
                </div>
            </div>
        </section>
    )
}