import pes_image from "../../assets/mock-visual_pes2021.jpg";
import styles from "./Card.module.css";
export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <img src={pes_image} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        dignissimos exercitationem velit cupiditate facilis reprehenderit
        nostrum. Ipsa, aliquam, quia doloribus, fuga facere at adipisci corrupti
        animi possimus nihil magnam laborum!
      </p>
    </div>
  );
}
