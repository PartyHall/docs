import styles from './styles.module.css';

export default function HomepageDemo(): JSX.Element {
  return (
    <section className={styles.demo}>
      <div className={`container ${styles.content}`}>
        <h1>Demo</h1>
        <p>Note that this video reflects version 0.8, some feature might have changed since then.</p>
        <p>The hardware side of the appliance is a PoC and is not representative of the final design.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/m1miHMW5KzU?si=mGPk-J3v2EnXB07K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
      </div>
    </section>
  );
}
