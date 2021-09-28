import React from "react"
import Layout from "../modules/Layout"
import PageHeader from '../modules/PageHeader'
import Highlights from '../modules/Highlights'
import PagePromo from '../modules/PagePromo'

export default function Home() {
  return (
    <Layout>
      <PageHeader/>
      <Highlights/>
      <PagePromo/>
    </Layout>
  )
}