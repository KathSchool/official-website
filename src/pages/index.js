import React, { useEffect } from "react";
import clsx from "clsx";
import Typed from "typed.js";
import anime from "animejs/lib/anime.es.js";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BookSvg from "@site/static/img/book.svg";
import MusicSvg from "@site/static/img/music.svg";
import OrigamiSvg from "@site/static/img/origami.svg";

import styles from "./index.module.css";

const featureList = [
  {
    title: translate({ message: "Picture books" }),
    path: require("@site/static/img/read.png").default,
    cls: "book-feature",
    onmouseenter: () => {
      anime({
        targets: ".book-feature",
        translateY: -30,
        scale: 1.1,
      });
    },
    onmouseleave: () => {
      anime({
        targets: ".book-feature",
        translateY: 0,
        scale: 1,
      });
    },
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
    cls: "song-feature",
    onmouseenter: () => {
      anime({
        targets: ".song-feature",
        translateY: -30,
        scale: 1.1,
      });
    },
    onmouseleave: () => {
      anime({
        targets: ".song-feature",
        translateY: 0,
        scale: 1,
      });
    },
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
    cls: "craft-feature",
    onmouseenter: () => {
      anime({
        targets: ".craft-feature",
        translateY: -30,
        scale: 1.1,
      });
    },
    onmouseleave: () => {
      anime({
        targets: ".craft-feature",
        translateY: 0,
        scale: 1,
      });
    },
    description: (
      <Translate>
        Unleash creativity with hands-on art craft activities. Explore painting,
        drawing, and crafting to inspire imagination and develop fine motor
        skills. Let their inner artist shine!
      </Translate>
    ),
  },
];

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
      targets: ".move",
      translateX: function (el, i) {
        return 200 + 400 * i;
      },
      translateY: function (el, i) {
        return 50 + 100 * i;
      },
      scale: function (el, i, l) {
        return anime.random(0.6, 1);
      },
      rotate: function () {
        return anime.random(-45, 45);
      },
      duration: function () {
        return anime.random(2000, 4000);
      },
      delay: function () {
        return anime.random(0, 400);
      },
      direction: "alternate",
      loop: false,
    });

    // 清理动画
    return () => animation.pause();
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.squrae}>
        <img
          src="/photo/portrait.png"
          alt="Ms.katherine"
          className={clsx(styles.portrait)}
        />
      </div>
      <h1 className={styles.title} ref={el} />
      <BookSvg className={clsx("move", styles.icon)} id="book" />
      <MusicSvg className={clsx("move", styles.icon)} id="music" />
      <OrigamiSvg className={clsx("move", styles.icon)} id="origami" />
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
        <HomepageFeatures featureList={featureList} />
      </main>
    </Layout>
  );
}
