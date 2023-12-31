import ad_icon from "../../assets/images/advantages/assets_and_business.png";

const AdvantageCard = ({ title, txt, icon = ad_icon }) => {
  return (
    <div className="flex space-between max-w-[370px] md:min-h-[200px] min-h-[145px] rounded-xl shadow-xl border-t-2 border-blue-600">
      <div className=" p-5 gap-2 flex flex-col items-center relative">
        <img src={icon} alt="" className="w-[80px] rounded-full" />
        <p className="md:text-lg text-center text-base  font-semibold">
          {title}
        </p>
        <p className="text-sm">{txt}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
