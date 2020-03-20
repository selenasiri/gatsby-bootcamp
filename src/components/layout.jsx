import React from "react"

import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

const Layout = props => {
  console.log(styles)

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
