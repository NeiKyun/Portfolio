import React from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { StaticImageData } from 'next/image';
import { lanWanImg, networkSecurityImg, troubleshootingImg } from '../../public/assets';
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CompetenceProps = {
    imgSrc: StaticImageData;
    altText: string;
    title: string;
    description: string;
};

const CompetenceCard = ({ imgSrc, altText, title, description }: CompetenceProps) => (
    <div className="w-full flex flex-col items-center justify-center gap-28 mt-10 bg-bodyColor text-textLight">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a 
                className="w-full xl:w-1/2 h-auto relative group"
                href="#" target="_blank">
                <div style={{ border: '2px solid #000' }}>
                    <Image className="w-full h-full object-contain"
                    src={imgSrc}
                    alt={altText}/>
                </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Compétences
                </p>
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <p className="bg-bodyColor text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                    {description}
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
);

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

const Competences = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
        ]
    };

    return (
        <section id="Competences" className="max-w-container mx-auto lgl:px-20 py-24 bg-bodyColor text-textLight">
            <SectionTitle title="Mes Compétences" titleNo="03" />
            <Slider {...settings} className="mt-8">
                <CompetenceCard 
                    imgSrc={lanWanImg}
                    altText="Configuration et gestion des réseaux LAN et WAN"
                    title="Configuration et gestion des réseaux LAN et WAN"
                    description="Compétence essentielle dans la mise en place et l'administration de réseaux locaux et étendus, impliquant la configuration des équipements réseau et des protocoles de communication."
                />

                <CompetenceCard 
                    imgSrc={networkSecurityImg}
                    altText="Sécurité des réseaux de base"
                    title="Sécurité des réseaux de base"
                    description="Maîtrise des principes de sécurité réseau, incluant la configuration des pare-feux, la gestion des accès et la détection des menaces."
                />

                <CompetenceCard 
                    imgSrc={troubleshootingImg}
                    altText="Dépannage réseau et résolution des problèmes"
                    title="Dépannage réseau et résolution des problèmes"
                    description="Capacité à diagnostiquer et résoudre les problèmes réseau, y compris l'utilisation d'outils de dépannage et la mise en œuvre de procédures de résolution de problèmes efficaces."
                />
            </Slider>
        </section>
    );
};

export default Competences;