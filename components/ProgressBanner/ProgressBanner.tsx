import styles from "./ProgressBanner.module.css";
export default function ProgressBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className={styles.banner_left}>
            <h3 className="text-center uppercase lg:text-left h3 font-fugaz text-shadow-yellow">
              America's Progress...
            </h3>
          </div>
          <div className={styles.box}>
            <h3 className="text-shadow-black font-fugaz">1000+</h3>
            <p className="font-bold uppercase text-black-bg">Totals Tags</p>
          </div>
          <div className={styles.box}>
            <h3 className="text-shadow-black font-fugaz">$10,000+</h3>
            <p className="font-bold uppercase text-black-bg">Money Raised</p>
          </div>
          <div className={styles.box}>
            <h3 className="text-shadow-black font-fugaz">160+</h3>
            <p className="font-bold uppercase text-black-bg">States Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
}
