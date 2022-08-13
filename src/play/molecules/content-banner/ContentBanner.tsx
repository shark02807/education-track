import Icon from "../../../lib/atoms/icon/Icon";

interface IContentBanner {
  logoSrc: string;
  title: string;
  subtitle: string;
  className?: string;
}

const ContentBanner = ({
  logoSrc,
  title,
  subtitle,
  className,
}: IContentBanner) => {
  return (
    <div
      className={`flex flex-col p-8 rounded-md bg-indigo-900 text-white gap-2 ${className}`}
    >
      {logoSrc && (
        <div>
          <Icon src={logoSrc} alt="Logo" className="h-8 max-w-[200px]" />
        </div>
      )}
      <h1 className="font-medium text-2xl leading-8">{title}</h1>
      <h2 className="font-medium text-sm leading-7">{subtitle}</h2>
    </div>
  );
};

export default ContentBanner;
