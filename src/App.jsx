import React from "react"
import {
  Achievement,
  Categories,
  Companies,
  Courses,
  FeedBack,
  Footer,
  Hero,
  Navbar,
  SignUp,
} from "./components"
import "./App.css"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
