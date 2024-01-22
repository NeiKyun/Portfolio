import React from 'react'

const Contact = () => {
  return (
    <section 
    id="Contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
            03. A Suivre ?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold text-center">
            Entrer en contact
        </h2>
        <p className="max-w-[600px] text-center text-textDark">
        N&#39;hésitez pas à me contacter via le bouton dédié ci-dessous pour discuter de collaborations, projets ou opportunités. Je suis impatient de vous lire et de travailler ensemble !  
        </p>
        <a href="mailto:n.mahadali@rt-iut.re">
            {" "}
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">Dis Bonjour</button>
        </a>
    </section>
  )
}

export default Contact