import clsx from 'clsx';

import image from '../../assets/images/image.jpg'

import styles from './TransportPage.module.scss';


export default function TransportPage() {
  const tranportationInfo = [
    ["Самолётом", "от 30 000 ₽"],
    ["Автотранспортом", "15 ₽ за 1 км"],
    ["Автотранспортом, оборудованным рефрижератором", "33 ₽ за 1 км"],
    ["Автотранспорт до аэропорта плюс евроящик", "10 000 ₽"],
    ["Автотранспорт до аэропорта плюс ящик оцинкованный под Гроб", "12 000 ₽"],
    ["Получение справки санэпидемстанции и выдача акта о невложении", "2 000 ₽"],
    ["Оплата грузоперелета в аэропорту (в зависимости от пункта прибытия)", "от 15 000 ₽"],
  ]

  return (
    <div>
      <div className={styles.title}>
        Груз 200
      </div>
      <div className={styles.description}>
        «Груз 200» — современный термин, обозначающий перевозку тела умершего в оцинкованном гробу наземным или авиатранспортом. Доставка усопшего к месту захоронения требует строгого соблюдения всех формальностей и точного исполнения договорённостей с перевозчиками. Наше ритуальное агентство предоставляет услуги опытных специалистов, которые обеспечат своевременную и беспрепятственную перевозку тела.
      </div>
      <div className={styles.title}>
        Особенности транспортировки умершего
      </div>
      <div className={styles.description}>
        Для перевозки тела требуется специальный транспортировочный гроб с цинковым вкладышем. Перед погрузкой его запаивают по периметру и пломбируют. После этого возможна транспортировка гроба самолетом, поездом, или на предварительно оборудованном автомобиле.
      </div>
      <div className={styles.transportationBlock}>
        <div className={styles.transportationRow}>
          <div className={clsx(styles.tranportationElem, styles.tranportationTitle, styles.tranportationLeft)}>Вид перевозки</div>
          <div className={clsx(styles.tranportationElem, styles.tranportationTitle, styles.tranportationRight)}>Цена</div>
        </div>
        {
          tranportationInfo.map((el, index) => {
            return (
              <div key={index} className={styles.transportationRow}>
                <div className={clsx(styles.tranportationElem, styles.tranportationLeft)}>{el[0]}</div>
                <div className={clsx(styles.tranportationElem, styles.tranportationRight)}>{el[1]}</div>
              </div>
            )
          })
        }
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
