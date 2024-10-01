

const Navbar = () => {
  return (
    <>
    <div className="navbar">
          <img
            src="/images/logo.png"
            alt=""
            className="w-[199px] h-[64px] top-[30px] left-[50px] absolute"
          />
          <ol className="w-[338px] h-[30px] top-[50px] left-[821px] absolute flex gap-12 text-white text-semibold">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Help</li>
          </ol>
          <img
            src="/images/cart.png"
            alt=""
            className="w-[50px] h-[30px] top-[50px] left-[1340px] absolute"
          />
        </div>
    </>
  )
}

export default Navbar