import React from 'react'

const VideoPlay = ({ videoSrc }) => {
    return (
        <div>
            <video className='w-[1516px] h-[499px] bg-black' controls>
                <source src={videoSrc} type="video/mp4" />
            </video>

        </div>
    )
}

export default VideoPlay