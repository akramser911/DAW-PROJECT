import React from 'react'
import './App.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import logouni from  './logoUniv.png'

function Footer() {
  return (
    <footer>
            <div>
                <div>
                    <p><FaPhoneAlt/></p>
                    <p>+213 540 518 491</p>
                </div>
                <img src={logouni} alt='login page ' className='logoUni' />
                <div>
                    <p><MdMail/></p>
                    <p>akram.serrar@univ-constantine2.dz</p>
                </div>
            </div>
                
            
    </footer>
  )
}

export default Footer