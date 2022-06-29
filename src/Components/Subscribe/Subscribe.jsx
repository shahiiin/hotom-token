const Subscribe = () => {
  return (
    <div
      className="flex flex-col text-center
     w-full text-white mx-auto 
     [background:linear-gradient(90deg,_#265B5C_0%,_#11206B_100%)]
    items-center justify-center py-10 lg:h-[301px]"
    >
      <h1 className="font-semibold text-3xl lg:text-[40px] leading-[1.25] inline-block">
        Subscribe to Hatom newsletter
      </h1>
      <p className="opacity-60 md:opacity-80 mt-2 text-lg md:text-xl tracking-tight px-7 md:px-0">
        Subscribe to our newsletter and stay updated on the latest developments.
      </p>
      <div
        className="rounded-xl relative bg-[#315B82]
     p-1.5 pl-8 flex justify-between items-center 
     flex-col md:flex-row mt-[28px] mx-auto px-6 lg:w-[500px] sm:w-[500px] "
      >
        <div className="rounded-xl relative bg-[#315B82] p-1.5 pl-8 flex justify-between items-center flex-col md:flex-row">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent w-full mr-4 py-4 -my-1 pl-6 -ml-6 placeholder-white text-lg focus:outline-none placeholder:text-center md:placeholder:text-left"
          />
          <button
            type="submit"
            className="hover:scale-105 transition-transform hidden md:block whitespace-nowrap text-white cursor-pointer rounded-lg  p-4 px-9 leading-[1.25] font-medium [background:linear-gradient(270deg,_#1B4347_-1.39%,_#3D906A_99.46%)]"
          >
            Subscribe
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="hover:scale-105 transition-transform mt-4 md:hidden text-white cursor-pointer rounded-lg  p-4 px-9 leading-[1.25] font-medium [background:linear-gradient(270deg,_#1B4347_-1.39%,_#3D906A_99.46%)]"
      >
        Subscribe
      </button>
    </div>
  );
};
export default Subscribe;
