import styles from './ContactsPage.module.scss';
import clsx from 'clsx'


export default function ContactsPage() {
  const branchAddress = [
    "Малый отдел 1",
    "Малый отдел 2",
    "Малый отдел 3",
    "Малый отдел 4",
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
            Главный отдел
          </div>
        </div>
        <div className={styles.branchAddress}>
          <div className={styles.addressTitle}>
            Адреса филиалов:
          </div>
          {
            branchAddress.map((address, index) => {
              return (
                <div key={index} className={
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
