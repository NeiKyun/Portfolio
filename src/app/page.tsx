"use client"
import Head from 'next/head'
import Navbar from './Navbar'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Banner from './Banner'
import About from './About'
import Projets from './Projets'
import Archive from './Archive'
import Contact from './Contact'
import Footer from './Footer'
import { motion } from 'framer-motion'



export default function Home() {
  
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"> 
    
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5}}
          className="hidden xl:inline-flex w-32 fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>

        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          {/* About Section */}
          <About />
          {/* Project Section  */}
          <Projets />
          {/* Archive Section */}
          <Archive />
          {/* Contact Section */}
          <Contact />
          {/* Footer Section */}
          <Footer />
        </div>

        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5}}
          className="hidden xl:inline-flex w-32 fixed right-0 bottom-0">
          <RightSide />
        </motion.div>
      </div>
    
    </main>
  )
}
