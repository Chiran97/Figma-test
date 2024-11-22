import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { fetchVideoDetails } from '../../actions/Auth';
import VideoSkeleton from '../VideoSkeleton';

const VideoList = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVideoDetails()
      .then((data) => {
        setVideoDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>Related Videos</h2>

      {isLoading && <VideoSkeleton count={8} />}
      {error && <p className={styles.error}>Error: {error.message}</p>}

      <div className={styles.gridContainer}>
        {videoDetails.map((video, index) => (
          <div key={index} className={styles.card}>
            <img
              src={video.video?.image_url }
              alt="Video Thumbnail"
              className={styles.thumbnail}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{video.video?.title}</h3>
              <div className={styles.profile}>
                <img
                  src={video.video?.course?.user?.image_url }
                  alt="Profile"
                  className={styles.profileImage}
                />
                <span className={styles.instructor}>
                  {video.video?.course?.user?.full_name }
                </span>
                <AiOutlineHeart className={styles.heartIcon} />
              </div>
              <div className={styles.ratingAndPrice}>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaRegStar
                      key={i}
                      className={
                        i < video.rating
                          ? styles.starFilled
                          : styles.star
                      }
                    />
                  ))}
                </div>
                <span className={styles.separator}>|</span>
                <span className={styles.price}>
                  {video.video?.price ? `$${video.video.price}` : ''}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
