

const Herosection = () => {
  return (
    <>
    <div className="welcome-text">
          <h1 className="text-[40px] weight-400 w-[707px] h-[123px] top-[244px] left-[50px] absolute text-white">
            Welcome to <br />
            <span className="text-[65px] weight-700">
              Pop Rock Crystal Shop!
            </span>
          </h1>
          <p className="text-[16px] weight-400 w-[400px] h-[72px] top-[400px] leading-[24px] left-[50px] absolute text-[#31546D]">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>
        </div>
        <div className='w-[283px] h-[56px] top-[505px] left-[50px] absolute flex'>
          <button className='w-[180px] h-[56px] text-[16px] bg-white rounded-[18px] text-[#317189]'>SHOP NOW</button>
          <p className='text-[#317189] text-[16px] top-[15px] left-[215px] absolute weight-400'>about us</p>
        </div>
        <div className="card-container w-[569px] h-[554px] top-[173px] flex justify-center items-center bg-white z-[5] rounded-[50px] left-[821px] absolute">
          <div className='card w-[362px] h-[454px] bg-white'>
            <img src="/images/crystal.png" alt="" className='w-[362px] h-[362px]' />
            <div className='rectangle w-[120px] h-[2px] bg-[#F2F2F2] absolute top-[468px] left-[224.5px]'></div>
            <div className='w-[350px] h-[24px] text-center absolute bottom-[60px]'>
              <h1 className='text-[#9E9E9E] text-[20px] weight-400'>Crystal Agate Phone Grip <span className='text-[20px] weight-700'>- 18.99$</span></h1>
            </div>
            
          </div>
        </div>
        <div>
        <img src="/images/Vector1.png" alt="" className='w-[100vw] h-[510px] z-[1] top-[281px] absolute' />
        </div>
        <div className='scroll-down top-[730px] left-[625px] absolute z-[2] flex gap-1'>
          <img src="/images/scroll.png" alt="" className='w-[28px] h-[38px]' />
          <p className='text-[#317189] text-[16px] weight-400'>scroll down</p>
        </div>
        <div className="arrow-container absolute top-[745px] left-[1045px] z-[2] flex items-center justify-center gap-1">
          <img src="/images/left-arrow.png" alt="" className="left-arrow h-[24px] w-[24px]" />
          <img src="/images/ellipse.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/ellipse2.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/ellipse2.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/ellipse2.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/ellipse2.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/ellipse2.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/ellipse2.png" alt="" className="ellipse h-[12px] w-[12px]" />
          <img src="/images/right-arrow.png" alt="" className="right-arrow h-[24px] w-[24px]" />
        </div>
    </>
  )
}

export default Herosection