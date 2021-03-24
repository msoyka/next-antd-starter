import React from "react";
import classNames from "classnames";

import styles from "./Container.module.less";

export interface ContainerProps
  extends TestableComponent,
    React.HTMLAttributes<HTMLDivElement> {
  padding?: boolean;
}

export const Container = ({
  "data-testid": testIdProp = "Container",
  className,
  padding = true,
  ...rest
}: ContainerProps) => {
  console.log("styles: ", styles);
  const rootClasses = classNames(
    styles.root,
    {
      [styles.padding]: padding,
    },
    className
  );

  return <div data-testid={testIdProp} className={rootClasses} {...rest} />;
};

export default Container;
