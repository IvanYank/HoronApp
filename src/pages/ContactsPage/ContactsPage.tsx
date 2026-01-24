import { ReactComponent as Urn } from '../../assets/icons/urn.svg'
import { ReactComponent as Coffin } from '../../assets/icons/coffin.svg'
import { ReactComponent as Airplane } from '../../assets/icons/airplane.svg'
import image from '../../assets/images/image.jpg'
import background from '../../assets/images/bakground.jpg'
import PanelElement from '../../components/PanelElement/PanelElement';

import styles from './ContactsPage.module.scss';
import clsx from 'clsx'


export default function ContactsPage() {
  const branchAddress = [
    "г. Москва, ул. Ладожская, д. 10",
    "г. Москва, Промышленная ул, д. 4с7",
    "г. Раменское, ул. Махова, д. 14",
    "г. Москва, ул. Вавилова, д.61 стр.5",
  ]

  return (
    <div>
      <div className={styles.title}>Контакты ритуального агенства</div>
      <div className={styles.addressBlock}>
        <div className={styles.mainAddress}>
          <div className={styles.addressTitle}>
            Адрес центрального отделения:
          </div>
          <div className={styles.address}>
            г. Москва, 1-й Коптельский пер.20, помещение 2
          </div>
        </div>
        <div className={styles.branchAddress}>
          <div className={styles.addressTitle}>
            Адреса филиалов:
          </div>
          {
            branchAddress.map((address, index) => {
              return (
                <div className={
                  clsx(
                    styles.address,
                    {
                      [styles.addressGrey]: index % 2 == 0
                    }
                  )
                }>
                  {address}
                </div>
              )
            }
            )
          }
        </div>
        <div className={styles.additionalInfo}>
          <div className={styles.addressTitle}>
            Контактная информация:
          </div>
          <div className={styles.number}>
            Горячая линия: 8 800 123-12-12
          </div>
          <div className={styles.email}>
            E-mail: example@example.ru
          </div>
        </div>
      </div>
    </div>
  );
}
