import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Card2 = ({ data }) => {
    const router = useNavigate()

    return (
        <div className={twMerge(`rounded-lg rounded-tr-none rounded-tl-none hover:shadow-lg text-white bg-secondary cursor-pointer`, !data?.active && ' hover:shadow-none')} onClick={() => router(data?.link)}>
            <div className='h-[200px]'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src={data?.video} type='video/mp4' />
                </video>
            </div>
            <div className='px-5 py-3 space-y-2'>
                <div className="text-xl font-medium">{data?.title}</div>
                <div className='text-gray-300'>
                    {data?.description}
                </div>
            </div>
        </div>
    )
}

export default Card2