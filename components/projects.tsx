import Link from "next/link";
import Image from "next/image";
import styles from './projects.module.css'
import sectionStyles from './../styles/section.module.css'

export default function Projects() {
    return (
        <section className={sectionStyles.fullHeight}>
            <div className={sectionStyles.sectionContent} id="projects">
                <h2><Image src="/icons/idea.svg" width={25} height={25} className={sectionStyles.icon}></Image>Projets</h2>
                <div className={styles.card}>
                    <h3>Portfolio</h3>
                    <Link href="/projects/portfolio"><a className={styles.btn}>See more</a></Link>
                </div>
                <div className={styles.card}>
                    <h3>SpaceUp</h3>
                    <Link href="/projects/spaceup"><a className={styles.btn}>See more</a></Link>
                </div>
                <div className={styles.card}>
                    <h3>Meridia</h3>
                    <Link href="/projects/meridia"><a className={styles.btn}>See more</a></Link>
                </div>
                
            </div>
        </section> 
    )
}