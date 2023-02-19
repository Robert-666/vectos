
import { useEffect, useState } from 'react';
import './main.css'


const Main = ({ activeItem }) => {

    const [isVideoActive,setIsVideoActive] = useState(false)

    useEffect(()=> {
        const t = setTimeout(()=> {
            return setIsVideoActive(!!activeItem.VideoUrl)
        },2000)


        return () => {
            clearTimeout(t)
        }
    },[activeItem.Id])


    return (
        <div className='main'>
            <div className='main__content content'>
                <h1 className='content__category'>{activeItem.Category}</h1>
                <div className='content__image ibg'>
                <img src={activeItem.TitleImage} alt="title__image"></img> 
                </div>
                <div className='content__details'>
                    <span>{activeItem.ReleaseYear}</span>
                    <span>{activeItem.MpaRating}</span>
                    <span>{activeItem.Duration}</span>
                </div>
                <h1 className='content__about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h1>
                <div className='content__buttons buttons'>
                    <a href='#' className='buttons__play-button button'>Play</a>
                    <a href='#' className='buttons__info-button button'>More Info</a>
                </div>
            </div>
            <div className='main__image ibg'>
            { isVideoActive ? <video src={activeItem.VideoUrl} muted={true} loop autoPlay controls={false}/> : <img src={activeItem.CoverImage } alt="CoverImage"/> } 
                
            </div>
        </div>
    )
}

export default Main;