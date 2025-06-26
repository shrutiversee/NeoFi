import Image from 'next/image'

const cards = [
  {
    img: "/hugeicons_blockchain-04.png",
    title: "Scalability",
    desc: (
      <>
        Adapt and grow,
        <br />
        no matter the demand on grow
      </>
    ),
  },
  {
    img: "/Icons.png",
    title: "Decentralisation",
    desc: (
      <>
        Decentralization. Web3 aims
        <br />
        to move away from the centralized
      </>
    ),
  },
  {
    img: "/Icons (1).png",
    title: "Connectivity",
    desc: (
      <>
        Computers will be able to understand
        <br />
        information similarly to humans
      </>
    ),
  },
];


function Features() {

    return (
        <>
        <div className='flex flex-col items-center justify-center pt-14 pb-5 '>
            {/* Upper part */}
            <div className='flex flex-col items-center justify-center'>
                <button className='px-4 py-1 outline outline-neutral-600 text-[#9DFF3A] rounded-3xl'>Features</button>
                <div className='text-4xl font-bold tracking-widest pt-5 pb-5'>Future Breakdown</div>
                <p className='text-[#999999] text-center'>Secure, scalable, and decentralized solutions for your digital assets— <br></br>experience the future of financial freedom.</p>
            </div>
            {/* Lower-part */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-10 mt-15 '>
                 
                      {
                        cards.map((card)=>{
                            return(
                                <div className=' outline-4 outline-neutral-500 rounded-lg px-10 py-5 text-center ' key={card.title}>
                                 <Image src={card.img} alt="image" height={50} width={50} className='mx-auto'></Image>
                                 <p className='mt-4'>{card.title}</p>
                                 <p className='mt-2.5 text-[#999999] text-xs'>{card.desc}</p>
                                 </div>

                            )
                        })
                      }

                 
            </div>
        </div>
        </>
    )
}

export default Features

