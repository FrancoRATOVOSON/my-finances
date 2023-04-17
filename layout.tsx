import {} from "next/app"
import { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";


interface LayoutProps {
  page:ReactElement
}

export default function Layout({page}:LayoutProps) {
  return (
    <>
    <Header/>
    <main>{page}</main>
    <Footer/>
    </>
  )
}
