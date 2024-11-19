import Stars from './Stars'
import Icon from './Icon'
import React from 'react'

function Comment({ name, date, title, text, starCount }) {
    return (
        <div className='w-full flex flex-row gap-4 text-primary-dark'>
            <div className='self-start shrink-0'>
                <Icon text='ДД'/>
            </div>
            <div className='flex flex-col gap-0 flex-1'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-1 items-center'>
                        <strong className='font-bold text-xs'>{name}</strong>
                        <small className='text-gray-400 font-light text-xs'>потвърдена поръчка</small>
                    </div>
                    <small className='text-gray-400 self-end'>{date}</small>
                </div>
                <Stars count={starCount} />
                <div className='flex flex-col py-2'>
                    <p className='font-semibold'>{title}</p>
                    <p>{text}</p>
                </div>
                <img width={120} src='https://placehold.co/120x120' />
                <div className='flex flex-row gap-1'>
                    <p>Mнението е за продукт</p>
                    <a className='underline cursor-pointer'>WATERMELON Suntan & Body Oil</a>
                </div>
                <div className='flex flex-row gap-2 self-end text-xs font-light text-gray-400'>
                    <p>Това мнение беше ли полезно за Вас?</p>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.204" height="15.5" viewBox="0 0 16.204 15.5">
                            <g id="Group_9" data-name="Group 9" transform="translate(-0.999 -0.999)">
                                <path id="Path_13" data-name="Path 13" d="M24.571,7.5a2.114,2.114,0,0,0-1.7-.866H18.636V3.818a2.873,2.873,0,0,0-.788-2.177A2.461,2.461,0,0,0,16.152,1a.352.352,0,0,0-.332.317,22.135,22.135,0,0,1-.7,3.8,7.334,7.334,0,0,1-.97,1.723,6.954,6.954,0,0,0-1.139,2.179A.352.352,0,0,0,13,9.1v7.045a.352.352,0,0,0,.352.352h8.657a2.1,2.1,0,0,0,2.078-1.793L24.95,9.07A2.1,2.1,0,0,0,24.571,7.5Z" transform="translate(-7.773 0)" fill="#debaa7"></path>
                                <rect id="Rectangle_3" data-name="Rectangle 3" width="3.523" height="9.159" rx="1" transform="translate(0.999 7.34)" fill="#debaa7"></rect>
                            </g>
                        </svg>
                        <small>0</small>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.204" height="15.5" viewBox="0 0 16.204 15.5">
                            <g id="Group_11" data-name="Group 11" transform="translate(17.203 16.499) rotate(180)">
                                <path id="Path_13" data-name="Path 13" d="M24.571,7.5a2.114,2.114,0,0,0-1.7-.866H18.636V3.818a2.873,2.873,0,0,0-.788-2.177A2.461,2.461,0,0,0,16.152,1a.352.352,0,0,0-.332.317,22.135,22.135,0,0,1-.7,3.8,7.334,7.334,0,0,1-.97,1.723,6.954,6.954,0,0,0-1.139,2.179A.352.352,0,0,0,13,9.1v7.045a.352.352,0,0,0,.352.352h8.657a2.1,2.1,0,0,0,2.078-1.793L24.95,9.07A2.1,2.1,0,0,0,24.571,7.5Z" transform="translate(-7.773 0)" fill="#debaa7"></path>
                                <rect id="Rectangle_3" data-name="Rectangle 3" width="3.523" height="9.159" rx="1" transform="translate(0.999 7.34)" fill="#debaa7"></rect>
                            </g>
                        </svg>
                        <small>0</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment