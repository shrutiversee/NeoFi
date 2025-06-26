import Image from 'next/image'
function Brands() {

    const slider  =[
        {
            image:"/Vector-2.png",
            text:"LogoIpsum1"
        },
         {
            image:"/Vector-3.png",
            text:"LogoIpsum2"
        },
         {
            image:"/Vector-4.png",
            text:"LogoIpsum3"
        },
         {
            image:"/Vector-2.png",
            text:"LogoIpsum4"
        }
    ]
    return (
        <>
        <div className="flex flex-col items-center bg-[#0F0F0F] ">
            <div className='mb-3.5 mt-10 text-[#999999] text-xs'>Satisfied Partners</div>
            <div className="flex items-center flex-wrap justify-center sm:flex-nowrap gap-10 mb-10 mt-5">
                {slider.map((item) => {
                    return(
                     <div className="flex items-center gap-2" key={item.text}>
                    <Image src={item.image} alt={item.text} width={100} height={100} className='w-4 h-4'></Image>
                    <p className='text-[#999999] text-xs'>{item.text}</p>
                    </div>
                )

                })}

            </div>
            </div>
        
        </>
    )
}

export default Brands
