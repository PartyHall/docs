import styles from './styles.module.css';

export default function HomepageDescription(): JSX.Element {
  return (
    <section className={styles.demo}>
      <div className={`container ${styles.content}`}>
        <h1>What's PartyHall ?</h1>
        <p>PartyHall is an open-source appliance software that help creating memories at your events.</p>
        <p>It comes with its companion server app PartyNexus, which lets you share everything with the people present at the event easily.</p>
      </div>
    </section>
  );
}
