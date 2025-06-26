
import Link from 'next/link'
function Rev() {
 

    return (
        <div className="flex flex-col items-center justify-center gap-5 pt-20 pb-20">
         <Link href="#" className='px-4 py-2 outline-1 outline-neutral-500 text-[#9DFF3A] rounded-xl
         '>Revolutionary</Link>
          <h3 className='text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-wide text-balance text-center'>Enhance Your Design Workflow <br></br>With Seamless Landing Pages</h3>
          <h3 className='text-sm text-[#999999] font-light text-balance text-center'>Join a thriving community committed to safeguarding digital assets, <br></br>empowering your financial journey with trust, innovation, and security</h3>
           <Link href="#" className='px-4 py-2 outline-1 outline-neutral-500 bg-[#9DFF3A]  text-black font-semibold
         '>Get Started</Link>

        </div>
    )
}

export default Rev
