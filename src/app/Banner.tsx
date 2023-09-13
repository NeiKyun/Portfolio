import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id="Home" className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <motion.h3 
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.6}}
            className="text-lg font-titleFont tracking-wide text-textGreen"> 
        Bonjour, je suis
        </motion.h3>
        <motion.h1
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.7}}
            className="text-4xl lgl:text-6xl font-titleFont font-semibold text-textLight flex flex-col"
        >Neil MAHADALI. <span className="text-textDark mt-2 lgl:mt-4"> 
        Je m'occupe des réseaux informatiques.
        </span></motion.h1>
        <motion.p
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.8}}
            className="text-base md:max-w-[650px] text-textDark font-medium">
        {" "} Je suis un étudiant en informatique de 20 ans, passionné par les réseaux informatiques et la cybersécurité. J'ai de grande connaissance sur les infrastructures réseaux, simulation et configuration de réseaux, ainsi que la sécurité informatique.{" "} 
        <a href="https://www.linkedin.com/in/mahadali-neil/" target="_blank">
            <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                En Savoir Plus
                <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">

                </span>
            </span>
            </a>
        </motion.p>
        <motion.button 
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.9}}
            className="w-52 h-14 text-sm font-titleFont border border-textGreeb rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">Voir Mes Projets !</motion.button>
    </section>
  )
}

export default Banner