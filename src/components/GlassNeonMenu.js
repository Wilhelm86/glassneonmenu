import React, {useEffect, useState, useRef} from "react";
import './CSS/style.css'

const GlassNeonMenu=() => {

    const marker = document.querySelector('#marker')
    const item = window.document.querySelectorAll('ul li a')
    const ref = useRef(null);
    const [p,setP] = useState(null) ;

    function indicator(e){
        marker.style.left = e.offsetLeft+'px';
        marker.style.width = e.offsetWidth+'px';
    }

    useEffect(() => {
        setP(ref.current)
        item.forEach(link =>{


            link.addEventListener('mousemove', (e) =>{
                indicator(e.target)
            })
        })
    },[p])


    function useMove () {
        const handleMouseMove = e => {
            e.persist()
            item.forEach(link =>{
                link.addEventListener('mousemove', (e) =>{
                    indicator(e.target)
                })
            })
        }
        return {
            handleMouseMove,
        }
    }

    return (
            <ul>
                <li><a id="Home" href="#" ref={ref}>Home</a></li>
                <li><a id="About" href="#" ref={ref}>About</a></li>
                <li><a id="Portfolio" href="#" ref={ref}>Portfolio</a></li>
                <li><a id="Technology" href="#" ref={ref}>Technology</a></li>
                <li><a id="Contact" href="#" ref={ref}>Contact</a></li>
                <div id="marker"></div>
            </ul>
    );
}

export default GlassNeonMenu;