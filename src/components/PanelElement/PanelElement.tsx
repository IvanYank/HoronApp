import { Link } from 'react-router';
import React from 'react';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'

import styles from './PanelElement.module.scss';

export default function HomePage({
  Icon,
  text,
  url
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string,
  url: string,
}) {
  return (
    <Link to={url} className={styles.service}>
      {/* <div className={styles.service}> */}
        <div className={styles.serviceWrapper}>
          <div className={styles.serviceLeft}>
            <Icon />
            <p>{text}</p>
          </div>
          <div className={styles.serviceRight}>
            <Arrow />
          </div>
        </div>
      {/* </div> */}
    </Link>
  );
}
