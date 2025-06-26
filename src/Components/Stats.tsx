

function Stats() {
   
    return (
        <>
        <div className="flex flex-col items-center justify-center pb-20 pt-20 bg-[#0F0F0F]">
          
          <button className='px-4 py-1 outline outline-neutral-600 text-[#9DFF3A] rounded-3xl'>Statistics</button>
          {/* mid-part */}
          <div >
            <h3 className="text-4xl font-semibold text-center mt-5">Completely Leverage product</h3>
            <p className="text-[#999999] text-sm text-center mt-6">
                Leading the way in blockchain innovation, we are redefining how the world <br></br>connects, secures, and transacts, bringing a new era of decentralized <br></br>technology.
            </p>
          </div>
          {/* bottom-part */}
          <div className="flex flex-col gap-5 sm:flex-row justify-evenly items-center sm:gap-16 mt-10">
              
              <h1 className="text-4xl text-[#9DFF3A]">2M+ <br></br><span className="text-xs text-[#999999]">user</span></h1>
              <h1 className="text-4xl text-[#9DFF3A]">500K+ <br></br><span className="text-xs text-[#999999]">Transactions</span></h1>
              <h1 className="text-4xl text-[#9DFF3A]">35+ <br></br><span className="text-xs text-[#999999] items-center">user</span></h1>

          </div>


        </div>
        
        </>
    )
}

export default Stats
