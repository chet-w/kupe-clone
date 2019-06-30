/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components";

import Header from "./header"
import Footer from "./footer"
import "./antd.css";
import "./layout.css"
import Nav from "./nav";


const theme = {
  white: "#fff",
  lightGrey: "#f5f5f5",
  medGrey: "#aaa",
  grey: "#767676",
  black: "#494949",
  darkBlue: "#0080a4",
  lightBlue: "#02a7c9",
  green: "#84BD00",
  orange: "#ED8B00",
  yellow: "#FFD100",
  purple: "#833177",
  // Gradients 
  blueGradient: "linear-gradient(to bottom, #02a7c9, #0080a4)",
  shadow: "0 0 20px 0 rgba(0,0,0, 0.08)",
  shadowHover: "0 0 10px 0 rgba(0,0,0, 0.4)",
  font: "Adelle Sans"
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Nav/>
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
