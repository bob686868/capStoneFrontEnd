import React from 'react'
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
const FullPage = () => {
  return (
    <article className="overflow-hidden">
          <Header />
          <MainSection />
          <Footer />
        </article>
  )
}

export default FullPage
