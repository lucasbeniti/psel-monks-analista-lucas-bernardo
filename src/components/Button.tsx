interface ButtonProps {
  title: string;
  className?: string;
}

const Button = ({ title, className }: ButtonProps) => {
  return (
    <button
      className={`h-10 w-[180px] cursor-pointer rounded-sm bg-[#DFBBFE] font-semibold text-[#2D2D2D] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
