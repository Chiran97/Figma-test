import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./styles.module.css";

const VideoSkeleton = ({ count }) => {
  return (
    <div className={styles.gridContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.card}>
          <Skeleton className={styles.thumbnail} height={200} />

          <div className={styles.content}>
            <Skeleton className={styles.title} width="80%" height={20} />

            <div className={styles.profile}>
              <Skeleton
                circle
                width={32}
                height={32}
                className={styles.profileImage}
              />
              <Skeleton width="60%" height={20} className={styles.instructor} />
              <Skeleton width={24} height={24} className={styles.heartIcon} />
            </div>

            <div className={styles.ratingAndPrice}>
              <Skeleton width="40%" height={20} className={styles.rating} />
              <Skeleton width={30} height={20} className={styles.separator} />
              <Skeleton width={50} height={20} className={styles.price} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSkeleton;
