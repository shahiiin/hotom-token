import { Avatar } from "../../Assets/Images";

const Disclaimer = () => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row text-white bg-[#031222] mx-auto border-b-2 border-[#071F38] overflow-hidden relative box-content pb-16 lg:py-0 lg:h-[370px]">
      <div className="container flex lg:items-center justify-between h-full">
        <div className="space-y-5 text-center mx-auto pl-8 lg:ml-0 bg-[#031222] z-10 pr-8 py-16 pb-8">
          <h2 className="text-[40px]  leading-[1.25]">Disclaimer</h2>
          <button className="hover:scale-105 transition-transform text-white cursor-pointer rounded-lg  p-4 px-9 leading-[1.25] font-medium [background:linear-gradient(270deg,_#1B4347_-1.39%,_#3D906A_99.46%)]">
            Legal information
          </button>
        </div>
      </div>
      <div className="h-[370px] flex w-full flex-col justify-center lg:flex-row lg:justify-end lg:absolute lg:right-0 lg:top-0 bottom-0 rotate-90 lg:rotate-0 scale-[1.8] sm:scale-100 lg:scale-100">
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};
export default Disclaimer;
