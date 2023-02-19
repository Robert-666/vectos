import './films.css'
import 'swiper/css'
import { Navigation } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/navigation'





const FilmsList = ({filmsInfo,onSelect}) => {
   

    return (
        <div className='footer'>
            <Swiper 
                modules={[Navigation]}
                navigation
                speed={800}
                slidesPerView={9}
                loop
                className="mySwiper"
            >
                {filmsInfo.map((item)=> {
                        
                        return <SwiperSlide className="swiperSlide" key={item.Id} onClick={()=> onSelect(item)}>
                            <img src={item.CoverImage} />
                        </SwiperSlide>
                })}   

            </Swiper>
        </div>
    )
}


export default FilmsList;