import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "../../styles/matterhorn-popup.module.css";

type MatterhornPopupType = {
  onClose?: () => void;
};

export const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.matterhornPopupDiv}>
      <div className={styles.videoPopupDiv}>
        <div className={styles.outerFrameDiv} />
        <iframe
          className={styles.videoContainerIframe}
          src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MatterhornPopup;
