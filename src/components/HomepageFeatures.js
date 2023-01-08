import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Education',
    Svg: require('../../static/img/undraw_Traveling_re_weve.svg').default,
    description: (
      <>  
        I grew up in China and obtained my bachelor's degree from University of Waterloo in Canada.
        I graduated from Waseda University in 2020 with my master degree in Quantum Optics.
      </>
    ),
  },
  {
    title: 'Experience',
    Svg: require('../../static/img/undraw_Firmware_jw6u.svg').default,
    description: (
      <>
        I joined Rakuten in 2021 and have been working there as a full-time developer.
        I love programming and building application that benefits people. 
      </>
    ),
  },
  {
    title: 'Future',
    Svg: require('../../static/img/undraw_counting_stars_rrnl.svg').default,
    description: (
      <>
      If plan A doesn't work, I'll go get another new plan A. I don't settle for plan B.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
