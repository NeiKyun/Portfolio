import React from 'react'
import SectionTitle from './SectionTitle'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer(){ 

  const internalSource = 'https://youtu.be/FqxeWTFf2dY';

  return ( 
    <section
    id="Video"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="Présentation" titleNo="00"/>
      <div className="flex flex-col lgl:flex-row gap-16"> 
        <ReactPlayer 
        url={internalSource}
        controls
        height="100%"
        width="100%"
        className="player-video" 
        /> 
      </div> 
    </section>
  ) 
} 