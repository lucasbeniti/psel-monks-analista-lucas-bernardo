interface TitleBoxProps {
  title: string;
  text: string;
  className?: string;
}

const TitleBox = ({ title, text, className }: TitleBoxProps) => {
  return (
    <div>
      <h1 className={`mb-2 text-2xl font-semibold sm:text-[40px] ${className}`}>
        {title}
      </h1>
      <p className={`text-base sm:text-2xl ${className}`}>{text}</p>
    </div>
  );
};

export default TitleBox;
