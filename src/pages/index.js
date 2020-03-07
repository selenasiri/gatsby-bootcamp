import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Selena, a developer living in beautiful New Jersey.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

// const IndexPage = () => {
//   return (
//     <div>
//       <Header />
//       <h1>Hello.</h1>
//       <h2>I'm Selena, a developer living in beautiful New Jersey.</h2>
//       <p>
//         Need a developer? <a href="/contact">Contact me.</a>
//       </p>
//       <p>
//         Need a developer? <Link to="/contact">Contact me.</Link>
//       </p>
//       <Footer />
//     </div>
//   )
// }

// export default IndexPage

//When linking on the same page, the anchor tag <a href> is completely fine
