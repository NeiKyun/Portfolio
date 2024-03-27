import ArchiveCard from "./ArchiveCard"
import { useState } from "react"
import {motion} from "framer-motion"

const Archive = () => {
    const [showMore, setShowMore] = useState(false)
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-titleFont font-semibold text-center mt-12">
                Autres Projets Réalisés
            </h2>
            <p className="text-sm font-titleFont text-textGreen">
                Voir les archives
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
            <ArchiveCard 
                title="SAÉ 4.CYBER01 - Sécuriser un système d&apos;information"
                des="Mettre en place une infrastructure réseau sécurisée, comprenant un pare-feu, un cluster de serveurs web, un serveur de noms et un Active Directory."
                listItem={["AD", "STORMSHIELD", "BIND9"]}
                link="#"
            />
            <ArchiveCard 
                title="SAE3.CYBER.04 - Découverte du pentesting"
                des="Initie au pentesting avec des outils comme nmap et nikto. Il fournit des ressources et des guides sur les shells inversés et l'exploitation de vulnérabilités, ainsi que des modèles pour rédiger des rapports."
                listItem={["Kali", "Serveur Web", "CTF"]}
                link="#"
            />
            <ArchiveCard 
                title="SAE 2.01 - Construire un réseau informatique pour une petite structure"
                des="Déploiement d'un réseau d&apos;entreprise, impliquant la mise en place d&apos;une infrastructure réseau avec services et règles de sécurité et la documentation technique."
                listItem={["GNS3", "DMZ", "EVE-NG"]}
                link="#"
            />


            {
                showMore && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.1}}
                        >
                            <ArchiveCard 
                                title="Projet 7"
                                des="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem dolorum exercitationem modi ab suscipit tempore tempora minus."
                                listItem={["Tech 1", "Tech 2", "Tech 3"]}
                                link="#"
                            />

                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.2}}
                            >

                            <ArchiveCard 
                                title="Projet 8"
                                des="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem dolorum exercitationem modi ab suscipit tempore tempora minus."
                                listItem={["Tech 1", "Tech 2", "Tech 3"]}
                                link="#"
                            />

                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.3}}
                            >

                            <ArchiveCard 
                                title="Projet 9"
                                des="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem dolorum exercitationem modi ab suscipit tempore tempora minus."
                                listItem={["Tech 1", "Tech 2", "Tech 3"]}
                                link="#"
                            />

                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.4}}
                            >

                            <ArchiveCard 
                                title="Projet 10"
                                des="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem dolorum exercitationem modi ab suscipit tempore tempora minus."
                                listItem={["Tech 1", "Tech 2", "Tech 3"]}
                                link="#"
                            />

                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.5}}
                            >

                            <ArchiveCard 
                                title="Projet 11"
                                des="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem dolorum exercitationem modi ab suscipit tempore tempora minus."
                                listItem={["Tech 1", "Tech 2", "Tech 3"]}
                                link="#"
                            />

                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.6}}
                            >

                            <ArchiveCard 
                                title="Projet 12"
                                des="lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem dolorum exercitationem modi ab suscipit tempore tempora minus."
                                listItem={["Tech 1", "Tech 2", "Tech 3"]}
                                link="#"
                            />

                        </motion.div>
                    </>
                )
            }
        </div>
        <div className="mt-12 flex items-center justify-center">
            {
                showMore ? ( <button
                onClick={() => setShowMore(false)}
                className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
                Voir moins
            </button>) : ( <button
                onClick={() => setShowMore(true)}
                className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
                Voir plus
            </button>)
            }
        </div>

    </div>
  )
}

export default Archive