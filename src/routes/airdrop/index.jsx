/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Card from '../../components/Card'
import nftVid from '../../assets/videos/nft.mp4'
import airdrop from '../../assets/videos/airdrop.mp4'

const cardData = [
    {
        id: 0,
        video: nftVid,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',

    },
    {
        id: 1,
        video: nftVid,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 2,
        video: nftVid,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 3,
        video: nftVid,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 4,
        video: nftVid,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 5,
        video: nftVid,
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
]

const Airdrop = () => {

    const [selectedAll, setSelectedAll] = useState([])

    const handleSelectAll = () => {
        if (selectedAll.length === cardData.length) {
            setSelectedAll([])
        } else {
            setSelectedAll(cardData.map((item) => item.id))
        }
    }

    return (
        <div>
            <div className='md:min-h-[85vh] min-h-[70vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover absolute -z-10' autoPlay loop muted>
                    <source src={airdrop} type='video/mp4' />
                </video>
                <div className="container z-[5] text-center">
                    <div className="lg:text-6xl text-5xl text-center lg:w-[700px] m-auto mb-10">Burn your NFT's to claim your AiDRIP</div>
                    {/* <div className="my-10 flex gap-5 items-center justify-center">
                        <div className='text-primary text-3xl '>Referral reward:</div>
                        <div className='text-xl'> XXXX AID RIP</div>
                    </div> */}

                </div>
                <a href="#nft" className='btn absolute bottom-10'>Claim</a>
            </div>

            <div className="lg:my-28 my-14 container" id="nft">
                <div className="mb-10 flex flex-col sm:flex-row gap-5 items-center justify-start">
                    <div className='text-primary text-3xl '>Referral reward:</div>
                    <div className='text-xl'> XXXX AID RIP</div>
                </div>
                <div className="text-4xl">MY NFTs</div>
                <div className="flex flex-col sm:flex-row items-center justify-between my-5 gap-3">
                    <div className="flex items-center">
                        <div className="text-small cursor-pointer pr-5" onClick={handleSelectAll}>Select All {selectedAll.length ? `(${selectedAll.length})` : ''}</div>
                        <input type="checkbox" className='checkbox' checked={selectedAll.length === cardData.length} onChange={handleSelectAll} />
                    </div>
                    <div className='order-first sm:order-2'>
                        <button className='bg-primary py-2 px-5 rounded-md text-white'>Claim XXX AIDRIP</button>
                    </div>
                </div>
                <div className="grid sm:grid=cols-2 xl:grid-cols-3 gap-4">
                    {
                        cardData.map((item, index) => {
                            return <Card key={index} data={item} selectedAll={selectedAll} setSelectedAll={setSelectedAll} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Airdrop