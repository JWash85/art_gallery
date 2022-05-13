import React from 'react'
//Child of App

function Gallery(props){
     return (
        <div style={{'width': '300px'}}>
            <p>Artwork by {props.artist}</p>
            
            
        </div>
    )
}
export default Gallery;