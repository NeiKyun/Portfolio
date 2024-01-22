import React from 'react'
import SectionTitle from './SectionTitle'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer(){ 

  const internalSource = 'https://youtu.be/FqxeWTFf2dY';

  return ( 
    <section
    id="Video"
    className="max-w-contentContainer mx-auto py-10 lgl:py-42 flex flex-col gap-8">
      <SectionTitle title="Présentation" titleNo="00"/>
      <div className="flex flex-col lgl:flex-row gap-16 relative aspect-w-16 aspect-h-9">
        <ReactPlayer 
        url={internalSource}
        controls
        width="100%"
        className="player-video" 
        /> 
      </div> 
    </section>
  ) 
} 