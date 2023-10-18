import React from 'react'

const FastTravelComponent = ({navLink}) => {
  return (
    <>
        <div id='ft-outer' className="w-4 h-4 flex justify-center items-center">
            <a href={ navLink.url }>
                <div id='ft-inner' className="w-3 h-3"></div>
            </a>
        </div>
    </>
  )
}

export default FastTravelComponent