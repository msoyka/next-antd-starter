/// <reference types="next" />
/// <reference types="next/types/global" />

// Images
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

// Less
declare module "*.module.less" {
  const classes: { [className: string]: string };
  export default classes;
}
