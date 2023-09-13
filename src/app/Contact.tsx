import React from 'react'

const Contact = () => {
  return (
    <section 
    id="Contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
            03. A Suivre?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold">
            Entrer en contact
        </h2>
        <p className="max-w-[600px] text-center text-textDark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dignissimos provident mollitia culpa quidem similique rerum, non dicta fugiat velit unde laborum illum possimus? Neque fugit rerum praesentium beatae voluptas?  
        </p>
        <a href="mailto:n.mahadali@rt-iut.re">
            {" "}
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">Dis Bonjour</button>
        </a>
    </section>
  )
}

export default Contact