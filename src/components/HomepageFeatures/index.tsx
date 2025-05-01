import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Photobooth',
    Svg: require('@site/static/img/feature_photobooth.svg').default,
    description: (
      <>
        Take pictures with your friends!
        <br />
        Also features an unattended mode: Get timelapse of the party!
      </>
    ),
  },
  {
    title: 'Karaoké',
    Svg: require('@site/static/img/feature_karaoke.svg').default,
    description: (
      <>
        Sing your favorite songs together! Queuing system and custom display name available.
      </>
    ),
  },
  {
    title: 'Built-in Spotify client',
    Svg: require('@site/static/img/feature_spotify.svg').default,
    description: (
      <>
        No need for a separate device to cast audio, PartyHall features a Spotify client (Premium required) usable from the official mobile app.
      </>
    ),
  },
  {
    title: 'Share easily',
    Svg: require('@site/static/img/feature_share.svg').default,
    description: (
      <>
        Thanks to <a href="https://github.com/PartyHall/partynexus">PartyNexus</a>, your friends can check out everything that happened around the appliance, including pictures!
      </>
    ),
  },
  {
    title: 'Wifi built-in',
    Svg: require('@site/static/img/wifi_builtin.svg').default,
    description: (
      <>
        No need to share every wifi password everywhere you go. The appliance makes its own hotspot so that everyone has internet around it!
      </>
    ),
  },
  {
    title: 'More to come',
    Svg: require('@site/static/img/feature_moretocome.svg').default,
    description: (
      <>
        Quiz, Blind-test and much more!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
