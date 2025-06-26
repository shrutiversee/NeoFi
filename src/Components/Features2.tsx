import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const cards =[

        {
            img:"/Vector.png",
            title:"Connectivity and ubiquity",
            desc :(
                <>
                <p>Connectivity and Ubiquity. The focal points of Web 3.0 emphasize <br></br>connectivity and ubiquity, ensuring seamless interactions<br></br> between users and devices within</p>
                </>
            )
        },

         {
            img:"/Vector-2.png",
            title:"Secure Transaction",
            desc :(
                <>
                <p>Ensuring every transaction is protected with cutting-edge <br></br> security, giving you the confidence to exchange, invest, and grow <br></br> in a safe and trusted environment.</p>
                </>
            )
        },
         {
            img:"/Vector-3.png",
            title:"Blockchain and decentralization",
            desc :(
                <>
                <p>Most important of all, the assurance of blockchain and <br></br> decentralization helps in encouraging communication between <br></br> software and browser plugins.</p>
                </>
            )
        }
    ]
function Features2() {

    
    return (
        <>

        <div className='flex flex-col items-center  justify-center gap-20 pt-5'>
        {/* Upper part */}
        <div className='flex flex-col items-center pl-2 pr-2 sm:items-center justify-center '>
          <Link href="#" className='outline-2 outline-neutral-500 px-4 py-1 text-xs text-[#9DFF3A] rounded-2xl'>Features</Link>
          <h2 className='text-3xl font-bold tracking-wide mt-5 mb-2.5'>The Future Of Blockchain Technology</h2>
        
          <p className=' text-sm text-[#999999] tracking-wide mt- text-center'>Leading the way in blockchain innovation, we are redefining how the world <br></br>connects,secures,and transacts,bringing a new era of decentralized <br></br>technology</p>
         
        </div>
        {/* Lower part */}
        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-evenly  gap-10 sm:gap-x-30 '>
            {/* left-side */}
             <Image src="/Shape-1.1.png" alt="shape" width={500} height={500} className='pl-10 pr-10 sm:pl-0 sm:pr-0 md:pl-0 md:pr-0 h-[500] w-[500]'></Image>
            {/* right-side */}
             <div className='flex flex-col items-center justify-center gap-10  '>
               {cards.map((card)=>{
                return(
                 <div key={card.title} className='ml-4 mr-4 outline-2 outline-neutral-500 rounded-2xl px-10 py-4 flex items-center justify-evenly relative'>
                    <Image src={card.img} alt="img" height={35} width={35} className='absolute left-4 top-13 pl-2 ' ></Image>
                    <h3 className='pl-5 pt-2 ml-3 leading-8' >{card.title} {card.desc}</h3>
                  
                   </div>
                )
               })}
             

            </div> 
        </div>
        </div>
        </>
    )
}

export default Features2
