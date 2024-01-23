import Image from 'next/image';
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import { profileImg } from '../../public/assets';
const About = () => {
  return (
    <section 
    id="About"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle title="A Propos de moi" titleNo="01"/>
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                Je suis un étudiant en Réseaux et Télécommunications, et depuis l&#39;âge de six ans, ma passion pour l&#39;informatique ne m&#39;a jamais quitté.
                 J&#39;ai toujours été fasciné par le fonctionnement de mon ordinateur, que ce soit au niveau matériel ou logiciel. 
                 Cette curiosité insatiable m&#39;a naturellement orienté vers une carrière dans le domaine <span className="text-textGreen"> des réseaux informatiques</span>, car je crois fermement que <span className="text-textGreen">l&#39;avenir repose sur la connectivité</span>, notamment en raison des progrès dans l&#39;exploration spatiale qui exigent <span className="text-textGreen">des systèmes de communication robustes</span>.
                </p>
                <p>
                En dehors de mon domaine d&#39;études, mes passions se tournent vers <span className="text-textGreen">le monde de l&#39;animation japonaise et des mangas</span>, en particulier ceux de genres Fantasy et Science-Fiction.
                 J&#39;adore plonger dans des univers imaginaires, explorer des mondes fantastiques et réfléchir aux implications technologiques qui pourraient exister dans ces contextes. 
                 Cela enrichit ma créativité et ma perspective sur la technologie.
                </p>
                <p>
                Mon parcours académique et mes centres d&#39;intérêt personnels convergent vers une vision d&#39;un futur où <span className="text-textGreen">la technologie, la connectivité et l&#39;exploration spatiale jouent un rôle central</span>.
                 Mon objectif est de contribuer activement à façonner cet avenir passionnant en combinant mes compétences en réseaux informatiques avec ma passion pour l&#39;imaginaire et la créativité.
                </p>

                <p>Voici quelques outils & technologies avec lesquelles j&#39;ai travaillé récemment :</p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Cisco Packet Tracer </li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Wireshark</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>VMware Workstation</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Linux</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Windows Server</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>GNS3</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Matlab</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Internet Protocol</li>


                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image 
                            className="rounded-lg h-full object-cover"
                            src={profileImg}
                            alt="profileImg"
                        />
                        <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
                        </div>
                    </div>
                </div>
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </div>
        </div>
    </section>
  )
}

export default About