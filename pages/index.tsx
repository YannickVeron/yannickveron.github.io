import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Introduction from '../components/introduction'
import Projects from '../components/projects'
import Experiences from '../components/experiences'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Education from '../components/education'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Introduction></Introduction>
        <Education></Education>
        <Experiences></Experiences>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      
    }
  }
}
