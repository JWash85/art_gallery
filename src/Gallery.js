import React from 'react'
//Child of App

function Gallery(props){
     return (
        <div style={{'width': '300px'}}>
            <p>Artwork by {props.artist}</p>
            <img src={props.objectImg} alt={props.title} />
            
        </div>
    )
}
export default Gallery;