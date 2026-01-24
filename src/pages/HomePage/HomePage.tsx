import { ReactComponent as Urn } from '../../assets/icons/urn.svg'
import { ReactComponent as Coffin } from '../../assets/icons/coffin.svg'
import { ReactComponent as Airplane } from '../../assets/icons/airplane.svg'
import image from '../../assets/images/image.jpg'
import background from '../../assets/images/bakground.jpg'
import PanelElement from '../../components/PanelElement/PanelElement';

import styles from './HomePage.module.scss';


export default function HomePage() {
  return (
    <div className={styles.container}>
      <span className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam deleniti necessitatibus voluptas autem nobis, blanditiis quidem quo deserunt reiciendis? Pariatur beatae ipsa porro vitae a dolorum nostrum quaerat deserunt.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam deleniti necessitatibus voluptas autem nobis, blanditiis quidem quo deserunt reiciendis? Pariatur beatae ipsa porro vitae a dolorum nostrum quaerat deserunt.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam deleniti necessitatibus voluptas autem nobis, blanditiis quidem quo deserunt reiciendis? Pariatur beatae ipsa porro vitae a dolorum nostrum quaerat deserunt.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam deleniti necessitatibus voluptas autem nobis, blanditiis quidem quo deserunt reiciendis? Pariatur beatae ipsa porro vitae a dolorum nostrum quaerat deserunt.</span>
      <div className={styles.servicesBlock}>
        <img className={styles.servicesImage} src={background} alt="Background" />
        <div className={styles.panelBlock}>
          {/* <PanelElement Icon={Urn} text={'Кремация'} />
          <PanelElement Icon={Coffin} text={'Похороны'} />
          <PanelElement Icon={Airplane} text={'Груз 200'} /> */}

          <PanelElement url='/services' Icon={Urn} text={'Кремация'} />
          <PanelElement url='/services' Icon={Coffin} text={'Похороны'} />
          <PanelElement url='/transport' Icon={Airplane} text={'Груз 200'} />
        </div>
      </div>
      <div className={styles.imagesBlock}>
        <div className={styles.image}>
          <img src={image} alt="First Link" />
        </div>
        <div className={styles.image}>
          <img src={image} alt="Second Link" />
        </div>
        <div className={styles.image}>
          <img src={image} alt="Third Link" />
        </div>
      </div>
    </div>
  );
}
