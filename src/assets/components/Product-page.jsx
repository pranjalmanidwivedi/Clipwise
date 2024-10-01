import Product from "./product";

const ProductPage = () => {
  
  return (
    <>
      <h1 className="product-text absolute text-[#31546D] text-[46px] text-center font-bold">
        All product
      </h1>
      <div className="filter absolute flex gap-[100px] font-bold">
        <div className="flex gap-2">
          <h1 className="text-[#9AB0C0]">Filter:</h1>
          <select className="text-[#31546D] bg-transparent border-none outline-none">
            <option value="all">All Products</option>
          </select>
        </div>
        <div className="flex gap-2">
          <h1 className="text-[#9AB0C0]">Sort:</h1>
          <select className="text-[#31546D] bg-transparent border-none outline-none">
            <option value="all">Best Selling</option>
          </select>
        </div>
      </div>
      <div className="product-container grid grid-cols-4 gap-10">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <button className="view-all-btn w-[134px] h-[48px] border-[3px] text-[#75CCEB] border-[#75CCEB] mt-[60px] mx-auto block bg-white rounded-[18px]">View All</button>
      </>
  );
};

export default ProductPage;
