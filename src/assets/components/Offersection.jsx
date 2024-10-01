

const Offersection = () => {
  return (
    <div className="footer-section w-full h-screen bg-gradient-to-r from-[#73DEFA] to-[#A7C6FF] mx-auto">
        <img src="/images/Vector2.png" alt="" className="w-full h-full" />

        <div className="flex flex-col w-[50vw] absolute top-[280vh]">
          <h1 className='text-[40px] text-[#31546D] text-right font-[400]'>BEST PRICE <br /><span className='text-[64px] text-[#31546D] font-[700] leading-[30px]'>Agate Phone Grip</span></h1>

          <div className="flex items-center justify-center gap-6 pl-[455px]">
          <h1 className='text-[25px] text-[#41A0B7] font-[400] line-through'>44.50$</h1>
          <h1 className='text-[70px] text-[#E35B3E] font-[700] '>19.50$</h1>
          </div>

          <p className='text-[16px] text-[#31546D] font-[400] leading-[20px] w-[400px] ml-[365px] text-right'>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
          </p>

          <button className='text-[16px] font-[700] text-white w-[180px] h-[56px] mt-8 ml-[587px] bg-gradient-to-r from-[#73DEFA] to-[#6FB4FF] rounded-[18px]'>BUY NOW</button>
        </div>
        <img src="/images/ellipse3.png" alt="" className='absolute top-[285vh] left-[54vw]' />
        <div className='outer-circle w-[570px] h-[570px] bg-white rounded-full absolute top-[270vh] left-[60vw]'>
          <div className='inner-circle w-[364px] h-[364px] bg-white rounded-full relative top-[103px] left-[103px]'>
            <img src="/images/crystal.png" alt="" className='w-[250px] h-[250px] relative top-[57px] left-[57px]' />
          </div>
        </div>
            
    </div>
  )
}

export default Offersection