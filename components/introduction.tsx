import sectionStyles from "./../styles/section.module.css"
import introStyles from "./introduction.module.css"
export default function Introduction() {

    return (
        <section className={sectionStyles.fullHeight}>
            <div className={sectionStyles.sectionContent}>
                <h1 className={introStyles.title}>Yannick VERON</h1>
                <p className={introStyles.desc}>
                    Développeur full stack
                </p>
            </div>
        </section> 
    )
}