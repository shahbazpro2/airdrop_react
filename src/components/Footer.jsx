import Logo from '../assets/images/logo.png'
const Footer = () => {
    return (
        <div className='bg-secondary text-white'>
            <div className="container">
                <div className="grid grid-cols-12 lg:gap-10 py-5 lg:py-0">
                    <div className="col-span-12 lg:col-span-4 p-5 flex justify-center flex-col items-center ">
                        <img src={Logo} alt="logo" className='lg:w-[200px]' />
                        <div className="mt-3">
                            Co-Built by AI and Drippers for Drippers
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 flex flex-col items-center justify-center my-5">
                        <div className="py-7 border-b border-[#515151] flex items-center justify-center w-full">
                            <ul className='flex flex-col lg:flex-row items-start gap-10 lg:gap-20'>
                                <li className='text-lg'>Resources</li>
                                <ul className="mt-3 space-y-1">
                                    <li>Whitepaper</li>
                                    <li>FAQs</li>
                                </ul>
                                <li className='text-lg'>Products</li>
                                <ul className="mt-3 space-y-1">
                                    <li>Lucky Drip</li>
                                    <li>Earn</li>
                                    <li>NFTs</li>
                                </ul>
                                <li className='text-lg'>Press</li>
                                <ul className="mt-3 space-y-1" >
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                </ul>

                            </ul>
                        </div>
                        <div className='text-sm text-[#838383] mt-3'>
                            Copyright © {new Date().getFullYear()} Airdrop. All Rights Reserved
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer