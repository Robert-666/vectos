import { useCallback, useState } from 'react';
import './sidebar.css'


const Sidebar = () => {

    const [isActive,setIsActive] = useState(false)


    const handleActive = useCallback(()=> {
        setIsActive((prevState)=> {
            return !prevState
        })
    },[])

    return (
        <div className={isActive === true ? "sidebar active" : "sidebar"} onClick={()=> {handleActive()}}>
            <div className='sidebar__person-info person-info'>
                <div className='person-info__image'>
                    <img src='/person.jpeg'/>
                </div>
                <div className='person-info__name'>Daniel</div>
            </div>
            <nav className='sidebar__menu-list menu-list'>
                <ul className='menu-list__items'>
                    <li className='menu-list__item item' >
                        <div className='item__image-div'>
                            <img src='/icons/1.png' alt='link'/>
                        </div>
                        <a className='item__text' href='#'>Search</a>
                    </li>
                    <li className='menu-list__item item'>
                        <img src='/icons/2.png' alt='link'/>
                        <a className='item__text' href='#'>Home</a>
                    </li>
                    <li className='menu-list__item item'>
                        <img src='/icons/3.png' alt='link'/>
                        <a className='item__text' href='#'>TV Shows</a>
                    </li>
                    <li className='menu-list__item item'>
                        <img src='/icons/4.png' alt='link'/>
                        <a className='item__text' href='#'>Movies</a>
                    </li>
                    <li className='menu-list__item item'>
                        <img src='/icons/5.png' alt='link'/>
                        <a className='item__text' href='#'>Genres</a>
                    </li>
                    <li className='menu-list__item item'>
                        <img src='/icons/6.png' alt='link'/>
                        <a className='item__text' href='#'>Watch Later</a>
                    </li>
                </ul>
            </nav>
            <div className='sidebar__additional-info additional'>
                <a href='#' className='additional__text'>LANGUAGE</a>
                <a href='#' className='additional__text'>GET HELP</a>
                <a href='#' className='additional__text'>EXIT</a>
            </div>
        </div>
    )
}


export default Sidebar;