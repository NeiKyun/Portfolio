import React from 'react'
import Image from 'next/image';
import SectionTitle from './SectionTitle'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { raspImg, gns3Img, sae3cyb3Img } from '../../public/assets';
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
                    <Image className="w-full h-full object-contain"
                      src={raspImg}
                      alt="Description de l'image RaspImg"/>
                  </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Caractéristique du Projet
                  </p>
                  <h3 className="text-2xl font-bold">
                    Projet SAE 1.02 : Initiation au Réseaux Informatique (Première Année)
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                      Le projet d&apos;Initiation au Réseaux Informatique en première année a proposé une exploration approfondie des éléments essentiels constituant les fondations des réseaux.  J&apos;ai été amené à acquérir des compétences pratiques tout en comprenant les concepts théoriques sous-jacents.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                          <li>Raspberry Pi</li>
                          <li>Protocol SSH</li>
                          <li>Nmap</li>
                          <li>IoT</li>
                          <li>Protocol MQTT</li>
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
                    <Image className="w-full h-full object-contain"
                    src={gns3Img}
                    alt="Description de l'image GNS3"/>
                  </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Caractéristique du Projet
                  </p>
                  <h3 className="text-2xl font-bold">
                    Projet SAE 2.04 : Déploiement et Gestion du Système et Réseau (Première Année)
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                    Dans ce projet, je me suis concentré sur le déploiement et la gestion de systèmes et réseaux, offrant à moi-même une opportunité d&apos;acquérir des compétences pratiques et une compréhension approfondie des opérations liées à ces domaines.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                          <li>Windows Server</li>
                          <li>GNS3</li>
                          <li>VLAN</li>
                          <li>DHCP</li>
                          <li>Firewall</li>
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
                    <Image className="w-full h-full object-contain"
                    src={sae3cyb3Img}
                    alt="image"/>
                  </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                  <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Caractéristique du Projet
                  </p>
                  <h3 className="text-2xl font-bold">
                    Projet SAÉ 3 Cyber 3 : Conception d&apos;un Réseau Informatique Sécurisé Multi-sites (Deuxième Année)
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-6 rounded-md">
                      Ce projet a mis l&apos;accent sur la conception d&apos;une infrastructure réseau sécurisée étendue sur plusieurs sites, me permettant de développer des compétences avancées en cybersécurité et en architecture réseau.
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                          <li>OSPF</li>
                          <li>BGP</li>
                          <li>PfSENSE</li>
                          <li>MPLS</li>
                          <li>Firewall</li>
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