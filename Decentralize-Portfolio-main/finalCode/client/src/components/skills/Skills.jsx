import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import klaytn from "../../assets/skills/klaytn.png";
import solidity from "../../assets/skills/solidity.png";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";

import eth from "../../assets/skills/eth.png";


import node from "../../assets/skills/node.svg";
import javascript from "../../assets/skills/javascript.svg";



const Skills = () => {
  return (
    <section className="skills-section">

        <img src={react} alt="react-icon" />
      
        <img src={eth} alt="eth-icon" />
       
       <img src={javascript} alt="javascript-icon" />
        <img src={solidity} alt="solidity-icon" />
        <img src={klaytn} alt="klaytn-icon" />
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={node} alt="node-icon" />

    </section>
  )
}

export default Skills
