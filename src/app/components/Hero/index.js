import Link from "next/link";
import styles from "../../page.module.css";
import OrangeButton from "../Button/button";

const Hero = () => {
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.contentHero}>
          <p>We bring solutions to</p>
          <p>
            make life <span>easier</span>
          </p>
        </div>
        <div className={styles.subHero}>
          <p>We are a multipurpose company that focuses on</p>
          <p>long term relationships with customers.</p>
        </div>
        <div className={styles.buttonAnime}>
          <Link href="/about">
            <OrangeButton text="more services" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
