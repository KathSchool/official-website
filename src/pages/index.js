import React, { useEffect } from "react";
import clsx from "clsx";
import Typed from "typed.js";
import anime from "animejs/lib/anime.es.js";
import { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BookSvg from "@site/static/img/book.svg";
import MusicSvg from "@site/static/img/music.svg";
import OrigamiSvg from "@site/static/img/origami.svg";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [translate({ message: siteConfig.title })],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // 定义动画效果
    const animation = anime({
      targets: "#book",
      translateX: 250,
      rotate: "1turn",
      duration: 1000,
      loop: true,
    });

    // 清理动画
    return () => animation.pause();
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.squrae}></div>
      <h1 className={styles.title} ref={el} />
      <BookSvg className={styles.icon} id="book" />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({ message: siteConfig.tagline })}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
