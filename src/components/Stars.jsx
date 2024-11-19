import React from 'react'

function Stars({ count }) {
  return (
    <div className="flex flex-row">
        
        {Array.from({ length: count }).map(() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="16.212" height="15.5" viewBox="0 0 16.212 15.5">
                <path id="Path_11" data-name="Path 11" d="M8.089,0,5.669,5.576,0,5.909l4.162,3.91L3.281,15.5l4.839-3.3,5.035,3.3L12.106,9.769l4.105-4.063L10.551,5.5Z" transform="translate(0 0)" fill="#debaa7"></path>
            </svg>
        ))}

        {Array.from({ length: 5 - count }).map(() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="16.212" height="15.5" viewBox="0 0 16.212 15.5">
                <path id="Path_11" data-name="Path 11" d="M8.089,0,5.669,5.576,0,5.909l4.162,3.91L3.281,15.5l4.839-3.3,5.035,3.3L12.106,9.769l4.105-4.063L10.551,5.5Z" transform="translate(0 0)" fill="#aaaaaa"></path>
            </svg>
        ))}
    </div>
  )
}

export default Stars