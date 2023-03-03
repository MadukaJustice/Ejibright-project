import Link from "next/link";
import styles from "../../page.module.css";
import OrangeButton from "../Button/button";

const Community = () => {
  return (
    <>
      <div className={styles.communityWrapper}>
        <div className={styles.communityContent}>
          <p>join our community</p>
          <p>We are trusted by over 1000+ clients.</p>
          <p>Join them by using one of our services</p>
          <div className={styles.comButton}>
            <Link href="/">
              <OrangeButton text="join now" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
