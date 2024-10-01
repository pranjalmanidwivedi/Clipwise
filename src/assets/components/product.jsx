const Product = () => {
  return (
    <div className="product w-[322px] h-[412px] bg-white rounded-[20px] p-4">
      <img
        src="/images/crystal.png"
        alt="Crystal Agate Phone Grip"
        className="w-[198px] h-[198px] mx-auto rounded-[20px]"
      />
      <h1 className="text-center text-[20px] mt-4">
        Crystal Agate Phone Grip <br />
        <span className="text-[#317189] font-bold text-[20px]">
          18.99$
        </span>
      </h1>
      <button className="buynow w-[180px] h-[56px] mt-6 mx-auto block bg-white rounded-[18px]">
        Buy Now
      </button>
    </div>
  );
};

export default Product;
