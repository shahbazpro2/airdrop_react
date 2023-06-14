import Card3 from '../../components/Card3'
import nftVid from '../../assets/videos/nft.mp4'
import final1 from '../../assets/images/final_1.gif'
import final2 from '../../assets/images/final_2.gif'
import final3 from '../../assets/images/final_3.gif'
import final4 from '../../assets/images/final_4.gif'
import final5 from '../../assets/images/final_5.gif'

const cardData = [
    {
        id: 0,
        image: final1,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',

    },
    {
        id: 1,
        image: final2,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 2,
        image: final3,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 3,
        image: final4,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 4,
        image: final5,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 5,
        image: final1,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
]

const Nft = () => {


    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-end  airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover absolute -z-10' autoPlay loop muted>
                    <source src={nftVid} type='video/mp4' />
                </video>
                <div className="container z-10 text-center mb-10">
                    <div className="text-6xl text-center lg:w-[700px] m-auto">
                        NFT Airdrop
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="my-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[200px] text-xl'>
                        NFT Supply
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[200px] text-xl'>
                        Average Daily Rewards
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[200px] text-xl'>
                        Your Share
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex flex-col space-y-4 justify-center items-center min-h-[200px] text-xl'>
                        <div> Your Rewards</div>
                        <button className='btn'>Claim</button>
                    </div>

                </div>
            </div>
            <div className="my-28 container">
                <div className="text-4xl mb-10">MY NFTs ({cardData?.length})</div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {
                        cardData.map((item, index) => {
                            return <Card3 key={index} data={item} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Nft