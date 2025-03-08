interface TitleBoxProps {
  title: string;
  text: string;
  className?: string;
}

const TitleBox = ({ title, text, className }: TitleBoxProps) => {
  return (
    <div>
      <h1 className={`font-semibold" mb-2 text-[40px] ${className}`}>
        {title}
      </h1>
      <p className={`text-2xl ${className}`}>{text}</p>
    </div>
  );
};

export default TitleBox;
