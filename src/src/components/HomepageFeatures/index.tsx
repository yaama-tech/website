import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  ctaText: string;
  ctaLink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cloud Solutions',
    Svg: require('@site/static/img/yaama-cloud-solutions.svg').default,
    description: (
      <>
        We provide cutting-edge cloud solutions to help businesses scale
        and modernize their infrastructure efficiently and securely.
      </>
    ),
    ctaText: 'Learn More',
    ctaLink: '/cloud-solutions',
  },
  {
    title: 'Remote Staffing',
    Svg: require('@site/static/img/yaama-remote-staffing.svg').default,
    description: (
      <>
        Connect with skilled remote professionals who can help your business
        grow while maintaining flexibility and cost-effectiveness.
      </>
    ),
    ctaText: 'Find Talent',
    ctaLink: '/remote-staffing',
  },
  {
    title: 'Work With Us',
    Svg: require('@site/static/img/yaama-work-for-us.svg').default,
    description: (
      <>
        Join our team of talented professionals and be part of exciting
        projects while working with cutting-edge technologies.
      </>
    ),
    ctaText: 'View Opportunities',
    ctaLink: '/work-with-us',
  },
];

function Feature({ title, Svg, description, ctaText, ctaLink }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
