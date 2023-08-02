import React from 'react'

export default function IconSet(props) {
  return (
   <>
    <div className="icon-set">
                            <div className={`work-card ${props.myclassName}`}>
                                <div className="icon-bg"><img src={props.src} alt="Industries"></img></div>
                                <p>{props.title}</p>
                            </div>
                        </div>
   </>
  )
}
