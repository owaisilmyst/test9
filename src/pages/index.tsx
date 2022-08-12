import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "../../styles/index.module.css";

export const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default FrameComponent;
