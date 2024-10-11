import { ArrowUpRight } from "lucide-react";

interface ArrowCardProps {
  title: string;
  description: string;
  bgColor: string;  // Background color
  textColor: string; // Text color to customize based on background
  borderColor: string;
  className?: string; // Optional className for custom styles
  disableArrow?: boolean; // Option to disable the arrow icon
}

const ArrowCard = ({ title, description, bgColor, textColor, borderColor, className, disableArrow }: ArrowCardProps) => {
  return (
    <div className={`rounded-3xl px-10 py-10 drop-shadow-2xl shadow-right filter-none ${bgColor} ${className} relative`}>
      {/* Arrow icon, conditionally rendered based on disableArrow prop */}
      {!disableArrow && (
        <div className="absolute top-5 right-8">
          <ArrowUpRight className={`border w-16 h-16 rounded-full p-2 ${borderColor} ${textColor}`} />
        </div>
      )}

      <h3 className={`font-bold text-2xl text-center font-secondary tracking-[3px] mt-40 xl:mt-52 ${textColor}`}>
        {title}
      </h3>
      <p className={`mt-5 text-lg text-center font-secondary ${textColor}`}>
        {description}
      </p>
    </div>
  );
};

export default ArrowCard;
