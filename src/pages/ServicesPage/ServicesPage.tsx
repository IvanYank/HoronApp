import { useState } from 'react';
import clsx from 'clsx';

import funeral1 from '../../assets/images/funeral1.jpg'
import funeral2 from '../../assets/images/funeral2.jpg'
import funeral3 from '../../assets/images/funeral3.jpg'
import cremation1 from '../../assets/images/cremation1.jpg'
import cremation2 from '../../assets/images/cremation2.jpg'
import cremation3 from '../../assets/images/cremation3.jpg'

import styles from './ServicesPage.module.scss';


export default function ServicesPage() {
  const [image, setImage] = useState(false);

  return (
    <div>
      <div className={styles.title}>Стоимость ритуальных услуг</div>

      <div className={styles.servicesBlock}>
        <div className={styles.controlPanel}>
          <button
            type='button'
            className={
              clsx(
                styles.controlButton,
                {
                  [styles.controlButtonSelected]: !image
                }
              )
            }
            onClick={() => { image && setImage(!image) }}
          >
            Захоронение
          </button>
          <button
            type='button'
            className={
              clsx(
                styles.controlButton,
                {
                  [styles.controlButtonSelected]: image
                }
              )
            }
            onClick={() => { !image && setImage(!image) }}
          >
            Кремация
          </button>
        </div>
        <div
          className={
            clsx(
              styles.serviceBlock,
              {
                [styles.selected]: image
              }
            )
          }
        >
          <img
            src={funeral1}
            alt="Funeral"
          />
          <img
            src={funeral2}
            alt="Funeral"
          />
          <img
            src={funeral3}
            alt="Funeral"
          />

        </div>
        <div
          className={
            clsx(
              styles.serviceBlock,
              {
                [styles.selected]: !image
              }
            )
          }
        >
          <img
            src={cremation1}
            alt="Cremation"
          />
          <img
            src={cremation2}
            alt="Cremation"
          />
          <img
            src={cremation3}
            alt="Cremation"
          />
        </div>
      </div>
    </div>
  );
}
