import { useState } from 'react';
import styles from './Slider.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
type Slides = {
  images: {
    id: string;
    filename: string;
    original_filename: string;
    url: string;
  }[]
}
export function Slider({ images }: Slides) {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === images.length  - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  if (images.length > 0) {
    return (
      <div className={styles.imgWrapper}>
        <ArrowBackIosNewIcon
          className={styles.leftArrow}
          onClick={prevSlide}
        />
        <ArrowForwardIosIcon 
          className={styles.rightArrow}
          onClick={nextSlide}
        />
        {images.map((i, index) => {
          return (
            <div>
              {index === current && (
                <img key={i.id} src={i.url} alt="" />
              )}
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div style={{width: '350px', height: '350px'}}>
      Nothing {':('}
    </div>
      )
  }
 
}