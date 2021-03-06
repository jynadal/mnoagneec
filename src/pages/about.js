import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import TravelsList from "../components/TravelsList"
import Seo from "../components/Seo"

const About = ({ data: { allContentfulVoyages:{ nodes: travels } }} ) => {
  return (
    <Layout>
      <Seo title="A propos de Mon Agence" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Le voyage forme la jeunesse ...!</h2>
            <p>«Avec plus de 15 ans d’expertise , Monagence.com est leader sur le marché de la vente de voyage en ligne et vous propose une offre innovante et adaptée à toutes vos envies de vacances.</p>

            <p>A deux, en famille, en solo ou entre amis toutes les possibilités s’offrent à vous. Nous vous proposons les meilleurs offres, au meilleur prix afin de vous satisfaire.</p>

            {/* <p>Nos offres sont actualisées en temps réel afin de vous proposer les « bons plans du net » pour vous dégoter le séjour au meilleur prix.</p>

            <p>Notre agence de voyage travaille en étroite collaboration avec les plus grands voyagistes tels que Exotisme, Bravo Club, Royal First Travel… ce qui nous permet de vous proposer tous types de voyages en passant par un séjour en All inclusive ou de bien être à un circuit combiné pour les plus aventuriers.</p>
             */}
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about-beach.jpg"
            alt="A propos de Mon Agence"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-voyages">
          <h5>Vennez prendre votre bain de jouvance!</h5>
          <TravelsList travels={travels} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
{
    allContentfulVoyages(
      sort: {fields: title, order: ASC}
      filter: {fonctionnalites: {eq: true}}
    ) {
      nodes {
        id
        title
        titre2
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default About
