import { Component } from "solid-js"
import { Layout } from "../../components"
import { Summary } from "./components"

export const Home:Component = () => {
  return (
    <Layout
    title="Welcome"
    subtitle={<>“A budget is telling your money where to go,<br/>instead of wondering where it went.”</>}
    aside={<Summary/>}
    >
      Home Page
    </Layout>
  )
}
