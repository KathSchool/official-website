import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function Feature({
  path,
  title,
  description,
  onmouseenter,
  onmouseleave,
  onClick,
  cls,
}) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", cls)}>
        <img
          className={styles.featureSvg}
          src={path}
          // onMouseEnter={onmouseenter}
          // onMouseLeave={onmouseleave}
          onClick={onClick}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ featureList }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
