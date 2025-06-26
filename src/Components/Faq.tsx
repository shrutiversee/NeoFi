
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"


const accord = [
    "What is NexoFi, and how does it work?",
    "How is blockchain related to cryptocurrency",
    "Is Blockchaintechnology secure?",
    "How does blockchain enhance security?",
    "Can blockchain be hacked?",
    "How can i implement blockchain in my industry",

]
function Faq() {


    return (
        <>
            <div className='flex flex-col pt-20 items-center justify-center'>
                {/* upper-part */}
                <div className='flex flex-col items-center justify-center'>
                    <Link href="#" className='outline-2 outline-neutral-500 px-4 py-1 text-semibold text-sm text-[#9DFF3A] rounded-2xl'>FAQ</Link>
                    <h2 className='text-4xl text-bold pt-5 pb-5 text-balance text-center'>Get Answers To Common Questions</h2>
                    <p className='text-sm text-balance text-center text-[#999999]'>From basics to advanced topics, find everything you need to know right</p>
                    <p className='text-sm text-balance text-center text-[#999999]'>here. Let us help you simplify the process and find the clarity you arere looking</p>
                </div>

                {/* Lower-part */}
                <div className='flex flex-col  justify-items-start pt-5 sm:px-30 md:px-30 lg:px-30 pl-3 '>

                    {
                        accord.map((accord, index) => {
                            return (
                                <div key={index} className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value={accord}>
                                            <AccordionTrigger>{accord}</AccordionTrigger>
                                            <AccordionContent>
                                                Yes. It adheres to the WAI-ARIA design pattern.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                </div>
                            )
                        })
                    }








                </div>
            </div>
        </>
    )
}

export default Faq
