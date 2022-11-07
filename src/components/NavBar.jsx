import React from 'react';
import { BsHouseDoor } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { IoStorefrontOutline } from 'react-icons/io5';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
    return (
        <>
            <div className="col-2 bg-danger text-light d-flex flex-column full-height">
                <ul className='d-flex flex-column pt-2 col-2'>
                    <li className='nav-item d-flex'>
                        <NavLink className="d-flex flex-row nav-link" end to='/'><BsHouseDoor size={24} /><span className='ms-2'>Home</span></NavLink>
                    </li>
                </ul>
                <div className='line my-2 bg-light mx-auto'></div>
                <ul className='d-flex flex-column pt-2 col-2'>
                    <h5>Mantenedores</h5>
                    <li className='nav-item d-flex'>
                        <NavLink className="d-flex flex-row nav-link py-2" end to='/users'><FaUsers size={24} /><span className='ms-2'>Users</span></NavLink>
                    </li>
                    <li className='nav-item d-flex'>
                        <NavLink className="d-flex flex-row nav-link py-2" end to='/foodplaces'><IoStorefrontOutline size={24} /><span className='ms-2'>Locales</span></NavLink>
                    </li>
                </ul>
                <div className='line my-2 bg-light mx-auto'></div>
                <ul className='d-flex flex-column pt-2 col-2'>
                    <h5>Actividades</h5>
                    <li className='nav-item d-flex'>
                        <NavLink className="d-flex flex-row nav-link  py-2" end to='/orders'><HiOutlineSpeakerphone size={24} /> <span className='ms-2'>Pedidos</span></NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}