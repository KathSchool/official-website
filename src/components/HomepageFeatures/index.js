import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: translate({ message: "Picture books" }),
    path: require("@site/static/img/read.png").default,
    description: (
      <Translate>
        Immerse in captivating picture books filled with colorful illustrations
        and engaging characters. Discover a world of stories that entertain,
        educate, and ignite imagination. Start a lifelong love for reading!
      </Translate>
    ),
  },
  {
    title: translate({ message: "Songs" }),
    path: require("@site/static/img/sing.png").default,
    description: (
      <Translate>
        Sing, dance, and learn with Songs! Enjoy catchy melodies, lively
        animations, and educational tunes. Develop language skills and
        coordination while having fun!
      </Translate>
    ),
  },
  {
    title: translate({ message: "Art crafts" }),
    path: require("@site/static/img/craft.png").default,
    description: (
      <Translate>
        Unleash creativity with hands-on art craft activities. Explore painting,
        drawing, and crafting to inspire imagination and develop fine motor
        skills. Let their inner artist shine!
      </Translate>
    ),
  },
];

function Feature({ path, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={path} />
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
