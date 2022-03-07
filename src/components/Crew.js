import React, { useEffect, useState } from 'react'
import { crewMembers } from '../utils/data'
import { CREW } from '../utils/tailwindClasses'


export default function Crew() {

    //state for active crew member
    const [activeCrewMember, setActiveCrewMember ] = useState(
    [...Object.values(crewMembers[0])]
    )

    //update state for active tabs
    const handleUpdate = (index)=> {
        setActiveCrewMember([...Object.values(crewMembers[index])])
    } 

    //update tabs active state 
    useEffect(()=>{
    const crewTabs = document.getElementsByClassName('crew-tabs')
    //remove active classe from all tabs first
    for (const crewTab of crewTabs) {
        crewTab.classList.remove('!bg-lighting')
    }
    //then add the active class to the active tab only
    crewTabs[activeCrewMember[4]].classList.add('!bg-lighting')  
    },[activeCrewMember])

  return (
    <main className={CREW.mainClasses.join(' ')}>
        <section className={CREW.mainSecClasses.join(' ')}>
            
            <header className={CREW.secHeading.join(' ')}>
                <h5 className={CREW.header.join(' ')}>
                <span className='text-lighting/[.25]'>
                    02
                </span>  Meet your crew
                </h5>   
            </header>
            
            <figure className={CREW.figure.join(' ')}>
                    <img src={activeCrewMember[1]} alt='crew member'></img>
            </figure>

            <div className={CREW.infoDev.join(' ')}>
                <ul className={CREW.list.join(' ')}>
                    {crewMembers.map((member)=>(
                        <li 
                        className={CREW.crewTabs.join(' ')}
                        key={member.indexId}
                        onClick={()=>handleUpdate(member.indexId)}
                        >
                        </li> 
                    ))}
                </ul>

                <h4 className={CREW.header4.join(' ')}>
                    {activeCrewMember[2]}
                </h4>

                <h3 className={CREW.header3.join(' ')}>
                    {activeCrewMember[0]}
                </h3>
            
                <p className={CREW.paragraph.join(' ')}>
                    {activeCrewMember[3]}
                </p>
        
            </div>
        </section>
  </main>
  )
}
