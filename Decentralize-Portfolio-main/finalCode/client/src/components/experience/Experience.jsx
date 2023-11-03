import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">{edu.instutionName} </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> October 2023 - Present
                        </p>
                        <h3 className="card-text2">Frontend Web Developer/UI-UX</h3>
                        <p className="card-text3">Skills -: Node Js , Frontend Design , Tailwind CSS , Bootstrap , HTML , JavaScript</p>
                        <p className="card-text4">
                        Career Development and Guidance Cell(CDGC) , PEC
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> August 2023 - Present
                        </p>
                        <h3 className="card-text2">Founder</h3>
                        <p className="card-text3">Skills -: Start-up Leadership , Node Js , Frontend and Backend Design , Tailwind CSS , Bootstrap , HTML , JavaScript.</p>
                        <p className="card-text4">
                            WEB ORBIT
                        </p>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Experience
