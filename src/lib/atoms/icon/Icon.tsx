import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface IIcon
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
}

const Icon = ({ src, alt, ...rest }: IIcon) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Icon;
