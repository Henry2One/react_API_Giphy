import React from 'react'
import Gif from './Gif'

export default function ListOfGifs( { gifs }){
    return (
        gifs.map( ({ id, title, url }) => <Gif key={id} title={title} id={id} url={url} /> )
    )
}