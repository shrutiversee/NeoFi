
import Image from 'next/image'
function Footer() {


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row  items-center justify-evenly gap-10 sm:gap-30">
                    <div className='flex items-center gap-3'>
                        <Image src="/Vector.png" alt="img" height={30} width={30}></Image>
                        <h3 className='text-semibold text-xl'>NeoFi</h3>

                    </div>
                    <div className='flex flex-col items-start'>
                        <div className='text-xl font-light tracking-wider mb-5'>Quick Links</div>
                        <div className='text-sm text-[#999999] mb-1'>Home</div>
                        <div className='text-sm text-[#999999] mb-1'>Features</div>
                        <div className='text-sm text-[#999999] mb-1'>Community</div>
                        <div className='text-sm text-[#999999] mb-1'>Support</div>

                    </div>
                    <div>
                        <div className='flex flex-col items-start'>
                            <div className='text-xl font-light tracking-wider mb-5'>Help</div>
                            <div className='text-sm text-[#999999] mb-1'>Help Centre</div>
                            <div className='text-sm text-[#999999] mb-1'>FAQ</div>
                            <div className='text-sm text-[#999999] mb-1'>Forum</div>

                        </div>

                    </div>
                    <div>
                        <div className='flex flex-col items-start'>
                            <div className='text-xl font-light tracking-wider mb-5 text-balance text-center sm:text-left'>Social Media</div>
                            <div className='text-sm text-[#999999] mb-1 text-balance text-center sm:text-left'>Facebook</div>
                            <div className='text-sm text-[#999999] mb-1 text-balance text-center sm:text-left'>Instagram</div>
                            <div className='text-sm text-[#999999] mb-1 text-balance text-center sm:text-left'>LinkdeIn</div>


                        </div>

                    </div>
                    <div>

                        <div className='flex flex-col items-start'>
                       <div className='text-xl font-light tracking-wider mb-5 text-balance text-center sm:text-left'>Join our mailing list <br></br> for updates</div>
                       <div className='text-sm text-[#999999] mb-1  text-balance text-center'>Your email address</div>
                       
                    
                </div>
                    </div>
                </div>
                <div>2025. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer
