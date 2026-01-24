import { Link } from 'react-router';

import styles from './NavigationElement.module.scss';


export default function NavigationElement({ text, url, closeMenu }: {
  text: string,
  url: string,
  closeMenu: () => void,
}) {
  return (
    <Link
      to={url}
      className={styles.element}
      onClick={closeMenu}
    >
      {text}
    </Link>
  );
}
