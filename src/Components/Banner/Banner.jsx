const Banner = () => {
  return (
    <div className="hero mt-12  bg-[#1313130D] rounded-3xl max-w-7xl h-[550px] mx-auto">
  <div className="hero-content mr-24 flex-col lg:flex-row-reverse">
    <img src="./images/banner.png" className="max-w-sm" />
    <div className="ml-28">
      <h1 className="text-5xl font-bold">Reading sparks joy, expands horizons, comforts.</h1>
      <button className="btn mt-12 bg-[#23BE0A] text-white text-lg font-bold">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
