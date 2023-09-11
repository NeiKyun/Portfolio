import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[7vh] sticky top-0 z-50 bg-bodyColor px-4" >
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">

        <div>
          <main className="w-14"> Portfolio </main>
        </div>
        <div>
          
          <ul className="flex items-center gap-6 ">
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link" > Home </li>
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"> Contact </li>
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"> Projets </li>
              <li className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"> About </li>
          </ul>

        </div>


      </div>
    </div>
  )
}

export default Navbar