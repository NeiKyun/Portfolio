import React from 'react'
import SectionTitle from './SectionTitle'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projets = () => {
  return (
    <section id="Projet" className="max-w-container mx-auto lgl:px-20 py-24">
        <SectionTitle title="Mes Projets" titleNo="02" />
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          {/* Project 1 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
              <div className="flex flex-col xl:flex-row gap-6">
                <a 
                  className="w-full xl:w-1/2 h-auto relative group"
                  href="#" target="_blank">
                  <div>
                    {/*<Image className="w-full h-full object-contain"
                    src={...}
                    alt="image"/>*/}
                  </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Caractéristique du Projet
                  </p>
                  <h3 className="text-2xl font-bold">
                    Projet n°1
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consequuntur impedit quas inventore! Quaerat aperiam, laudantium ab odit explicabo natus perspiciatis,
                        beatae pariatur eius fugiat illo tempora aspernatur dolore! Debitis, quam.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                          <li>Tech 1</li>
                          <li>Tech 2</li>
                          <li>Tech 3</li>
                          <li>Tech 4</li>
                          <li>Tech 5</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                          <a 
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/NeiKyun"
                            target="_blank">
                            <TbBrandGithub />
                          </a>
                          <a 
                            className="hover:text-textGreen duration-300"
                            href="#"
                            target="_blank">
                            <RxOpenInNewWindow />
                          </a>
                        </div>
                </div>
              </div>
              
          </div>
          {/* Project 2 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
              <div className="flex flex-col xl:flex-row-reverse gap-6">
                <a 
                  className="w-full xl:w-1/2 h-auto relative group"
                  href="#" target="_blank">
                  <div>
                    {/*<Image className="w-full h-full object-contain"
                    src={...}
                    alt="image"/>*/}
                  </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Caractéristique du Projet
                  </p>
                  <h3 className="text-2xl font-bold">
                    Projet n°2
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consequuntur impedit quas inventore! Quaerat aperiam, laudantium ab odit explicabo natus perspiciatis,
                        beatae pariatur eius fugiat illo tempora aspernatur dolore! Debitis, quam.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                          <li>Tech 1</li>
                          <li>Tech 2</li>
                          <li>Tech 3</li>
                          <li>Tech 4</li>
                          <li>Tech 5</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                          <a 
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/NeiKyun"
                            target="_blank">
                            <TbBrandGithub />
                          </a>
                          <a 
                            className="hover:text-textGreen duration-300"
                            href="#"
                            target="_blank">
                            <RxOpenInNewWindow />
                          </a>
                        </div>
                </div>
              </div>
              
          </div>
          {/* Project 3 */}
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
              <div className="flex flex-col xl:flex-row gap-6">
                <a 
                  className="w-full xl:w-1/2 h-auto relative group"
                  href="#" target="_blank">
                  <div>
                    {/*<Image className="w-full h-full object-contain"
                    src={...}
                    alt="image"/>*/}
                  </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Caractéristique du Projet
                  </p>
                  <h3 className="text-2xl font-bold">
                    Projet n°3
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consequuntur impedit quas inventore! Quaerat aperiam, laudantium ab odit explicabo natus perspiciatis,
                        beatae pariatur eius fugiat illo tempora aspernatur dolore! Debitis, quam.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                          <li>Tech 1</li>
                          <li>Tech 2</li>
                          <li>Tech 3</li>
                          <li>Tech 4</li>
                          <li>Tech 5</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                          <a 
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/NeiKyun"
                            target="_blank">
                            <TbBrandGithub />
                          </a>
                          <a 
                            className="hover:text-textGreen duration-300"
                            href="#"
                            target="_blank">
                            <RxOpenInNewWindow />
                          </a>
                        </div>
                </div>
              </div>
              
          </div>
        </div>

    </section>
  )
}

export default Projets