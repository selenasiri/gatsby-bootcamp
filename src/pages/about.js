import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Footer from "../components/footer"
// import Header from "../components/header"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
    // <div>
    //   <Header />
    //   <Footer />
    // </div>
  )
}

export default AboutPage
