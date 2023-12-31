import stakeBanner from '../../assets/videos/stake-banner.mp4'
const Stake = () => {
    return (
        <div>
            <div className='md:min-h-[85vh] min-h-[70vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover  absolute -z-10' autoPlay loop muted>
                    <source src={stakeBanner} type='video/mp4' />
                </video>
                <div className="container z-[5] text-center w-[700px]">
                    <div className="text-6xl text-center mb-10  m-auto">Stake and earn drip </div>
                    {/* <div className=" bg-primary/0 text-white rounded-md p-5 text-2xl text-center space-y-3 w-[25%] m-auto mt-7">
                        <div className=''>
                            TVL
                        </div>
                        <div className='font-bold text-4xl text-primary'>
                            $0.00
                        </div>
                    </div> */}
                </div>
                <a href="#stake" className="btn absolute bottom-10">Stake</a>
            </div>
            <div className="container z-10 mb-32 mt-14 lg:mt-28">
                <div className="grid grid-cols-2 gap-7">
                    <div className="col-span-2">
                        <div className=" bg-secondary text-white rounded-md p-5 text-2xl text-center space-y-3 w-[100%]">
                            <div className='text-primary font-bold text-2xl flex gap-4 justify-center'>
                                TVL :  <div className='text-white'>rewards xxxx</div>
                            </div>
                            <div className='text-white font-bold text-4xl'>
                                $235,000
                            </div>

                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1" id="stake">
                        <div className=" bg-secondary text-white rounded-md px-7 lg:px-14 py-10  text-2xl text-center">
                            <div className=''>
                                Single Staking
                            </div>
                            <div className="mt-5">
                                <button className='py-1 px-10 rounded-md text-sm bg-primary'>Buy Aidrip</button>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-3 text-lg">
                                <div className='text-left'>
                                    APR:
                                </div>
                                <div className="text-end">
                                    327%
                                </div>
                                <div className='text-left'>
                                    APY:
                                </div>
                                <div className="text-end">
                                    2,506%
                                </div>
                                <div className='text-left'>
                                    Deposit:
                                </div>
                                <div className="text-end">
                                    RAB
                                </div>
                                <div className='text-left'>
                                    Earn:
                                </div>
                                <div className="text-end">
                                    RAB
                                </div>
                                <div className='text-left'>
                                    Your Balance:
                                </div>
                                <div className="text-end">
                                    0.000 RAB
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="btn text-sm">Approve</button>
                            </div>
                        </div>
                        <div className="card"></div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <div className=" bg-secondary   text-white rounded-md px-7 lg:px-14 py-10  text-2xl text-center">
                            <div className=''>
                                LP Staking
                            </div>
                            <div className="mt-5">
                                <button className='py-1 px-10 rounded-md text-sm bg-primary'>Get RAB-ETH LP</button>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-3 text-lg">
                                <div className='text-left'>
                                    APR:
                                </div>
                                <div className="text-end">
                                    1,633%
                                </div>
                                <div className='text-left'>
                                    APY:
                                </div>
                                <div className="text-end">
                                    865,649,986%
                                </div>
                                <div className='text-left'>
                                    Deposit:
                                </div>
                                <div className="text-end">
                                    RAB-ETH LP
                                </div>
                                <div className='text-left'>
                                    Earn:
                                </div>
                                <div className="text-end">
                                    RAB
                                </div>
                                <div className='text-left'>
                                    Your Balance:
                                </div>
                                <div className="text-end">
                                    0.000 RAB-ETH LP
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="btn text-sm">Approve</button>
                            </div>
                        </div>
                        <div className="card"></div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Stake