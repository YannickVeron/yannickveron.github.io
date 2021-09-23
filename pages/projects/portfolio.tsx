import Layout from "../../components/layout"
import projectStyles from './../../styles/project.module.css'

export default function Portfolio() {
    return (
        <Layout scrollSnap={false} backLink="#projects">
            <section className={projectStyles.container}>
                <h2>My Portfolio</h2>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit sapiente, pariatur laudantium quisquam placeat provident odio libero magnam ut porro hic vel rerum optio dolorum sequi nostrum debitis voluptatum?</div>
            </section>
        </Layout>
    )
}