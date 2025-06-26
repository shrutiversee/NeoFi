'use client'
import Image from 'next/image';
import { easeInOut, motion } from "framer-motion";
function Hero() {

    return (
        <>
            <div className="flex  flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-evenly gap-20 mt-20 mb-20 pl-28 pr-28 ">
                {/* left sec */}
                <div className='flex flex-col  items-center md:items-center sm:items-start '>
                    <div className='flex items-center justify-evenly gap-2 outline outline-neutral-50000 rounded-2xl px-4 py-2'>
                        <div className='h-1.5 w-1.5 bg-[#9DFF3A] rounded-full' ></div>
                        <div className=' border-neutral-400 rounded-2xl text-[#9DFF3A] font-extralight text-xs'> Decentralised</div>
                    </div>

                    <div>
                        <h2 className=' text-4xl mt-2 sm:text-7xl tracking-tighter font-bold sm:mt-6'>Revolutionizing <br></br>Web3 Finance</h2>
                    </div>
                    <div><p className='text-[#999999] mt-6'>Secure, scalable, and decentralized solutions for your digital <br></br>assets—experience the future of financial freedom.</p></div>
                    <div className='flex flex-col sm:flex-row  items-center gap-5 mt-10'>
                        <button className='px-4 py-2 rounded-4xl text-black bg-[#9DFF3A]'>Get Started</button>
                        <button className='px-4 py-2 rounded-4xl outline-2 outline-neutral-100'>Watch Video</button>
                    </div>

                </div>
                {/* right sec */}
                <div>
                    <motion.div  initial={{ rotate: 0, translateX: -50, translateY: -50}}
  animate={{ rotate: 720, translateX: 0, translateY: 0 }}
                    
                    transition={{
                       duration:1,
                       delay:0.3,
                       repeat: 0,
                       ease:"easeInOut"
                    }}
                    ><Image src="/Shape-2.png" alt="Shape1" width={512} height={512} quality={100} ></Image></motion.div>
                </div>

            </div>
        </>
    )
}

export default Hero
