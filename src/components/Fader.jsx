import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Fader = ({ text }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {

        },4000);

        return () => {}
    },[])

  return (
    <>
                 <h1 className={fadeProp.fade}>{text}</h1>
    </>
  )
}
Fader.defaultProps = {
    text: 'Hello there'
}
Fader.propTypes = {}

export default Fader