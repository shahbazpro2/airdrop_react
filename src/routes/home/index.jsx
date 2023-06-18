import Card2 from "../../components/Card2"
import stakeVideo from '../../assets/videos/stake-banner.mp4'
import lotteryVideo from '../../assets/videos/lottery.mp4'
import nftVideo from '../../assets/videos/nft.mp4'
import airdropVideo from '../../assets/videos/airdrop.mp4'
import homeVideo from '../../assets/videos/homepage.mp4'




const cardData = [
    {
        title: 'Stake',
        description: 'Stake your DRIP tokens to earn more DRIP tokens',
        video: stakeVideo,
        link: '/stake',
        active: true
    },
    {
        title: 'Lottery',
        description: 'Lottery your DRIP tokens to earn more DRIP tokens',
        video: lotteryVideo,
        link: '/lottery',
        active: true
    },
    {
        title: 'NFTs',
        description: 'NFTs your DRIP tokens to earn more DRIP tokens',
        video: nftVideo,
        link: '/nft',
        active: true
    },
    {
        title: 'Airdrop',
        description: 'Airdrop your DRIP tokens to earn more DRIP tokens',
        video: airdropVideo,
        link: '/airdrop',
        active: true
    }
]

const Home = () => {
    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover  absolute -z-10' autoPlay loop muted>
                    <source src={homeVideo} type='video/mp4' />
                </video>
                <div className="container z-[5] ">
                    <div className='flex flex-col items-start'>
                        <div className='md:w-[600px] space-y-7 mt-20 lg:mt-0'>
                            <div className="text-6xl">AiDrip</div>
                            <p className='text-2xl font-light'>
                                AiDrip is a decentralized finance (DeFi) protocol that allows users to earn interest on their cryptocurrency by depositing it into one of several pools supported by the platform. Interest rates are determined algorithmically based on supply and demand. Users can deposit and withdraw their funds at any time, subject to a 24-hour waiting period.
                            </p>
                            <button className='btn'>Buy</button>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-7">
                    <div>
                        <div className='rounded-lg shadow-xl text-white bg-secondary flex justify-center items-center min-h-[100px] text-xl'>
                            Current Price
                        </div>
                        <div className="card">
                        </div>

                    </div>
                    <div>
                        <div className='rounded-lg shadow-xl  text-white bg-secondary flex justify-center items-center min-h-[100px] text-xl'>
                            Total Supply
                        </div>
                        <div className="card">
                        </div>

                    </div>
                    <div>
                        <div className='rounded-lg shadow-xl  text-white bg-secondary flex justify-center items-center min-h-[100px] text-xl'>
                            Burned Supply
                        </div>
                        <div className="card">
                        </div>

                    </div>
                    <div>
                        <div className='rounded-lg shadow-xl  text-white bg-secondary flex justify-center items-center min-h-[100px] text-xl'>
                            Market Cap
                        </div>
                        <div className="card">
                        </div>

                    </div>
                    <div>
                        <div className='rounded-lg shadow-xl  text-white bg-secondary flex justify-center items-center min-h-[100px] text-xl'>
                            Total Rewarded
                        </div>
                        <div className="card">
                        </div>

                    </div>
                    <div>
                        <div className='rounded-lg shadow-xl  text-white bg-secondary flex justify-center items-center min-h-[100px] text-xl'>
                            Sent to Vault
                        </div>
                        <div className="card">
                        </div>

                    </div>
                </div>
            </div>
            <div className="lg:py-40 py-20 homecard">
                <div className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" >
                        {
                            cardData.map((item, index) => (
                                <Card2 key={index} data={item} />
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home