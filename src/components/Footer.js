import { Copyright } from '@mui/icons-material'
import React from 'react'

function Footer() {
    return (
        <div>
            <div className='pt-10 pl-5 pr-8 text-white bg-black flex flex-col justify-between'>
                <div className='mb-4 flex justify-center align-middle'>
                    <p><Copyright/> 2024 All right reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
