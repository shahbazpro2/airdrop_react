import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { useWeb3Modal } from '@web3modal/react'




const links = [
    { name: 'Home', path: '/' },
    { name: 'Airdrop', path: '/airdrop' },
    { name: 'Stake', path: '/stake' },
    { name: 'Lottery', path: '/lottery' },
    { name: "NFT's", path: '/nft' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    const { open: openWeb3, close } = useWeb3Modal()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    console.log('location', pathname)
    return (
        <>

            <div className='absolute top-0 text-white z-10 w-full'>
                <div className='container'>
                    <Disclosure as="nav">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-7 ">
                                    <div className="relative flex h-16 items-center justify-between">
                                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                            {/* Mobile menu button*/}
                                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between py-5">
                                            <div className='w-[180px] flex sm:block justify-center lg:justify-start relative'>
                                                <img src={Logo} alt="logo" className='w-full' />
                                                <div className="text-xs -mt-3 bottom-0 left-16 absolute">Powered by AIDRIP</div>
                                            </div>
                                            <div className="hidden sm:ml-6 sm:block">
                                                <div className="flex space-x-4 items-center h-full">
                                                    {links.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.path}
                                                            className={classNames(
                                                                pathname === item.path ? ' text-primary' : 'text-white hover:text-primary ',
                                                                'rounded-md px-3 py-2 text-sm font-bold cursor-pointer'
                                                            )}
                                                            aria-current={pathname === item.path ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex hidden">
                                                <div>
                                                    <button className="btn" onClick={openWeb3}>Connect Wallet</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="sm:hidden bg-white rounded-lg relative ">
                                    <div className="space-y-1 px-2 pb-3 pt-2 z-20 relative">
                                        {links.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                onClick={() => navigate(item.path)}
                                                className={classNames(
                                                    item.current ? ' text-primary' : 'text-black hover:text-primary',
                                                    'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                            <div>
                                                <button className="btn" onClick={openWeb3}>Connect Wallet</button>
                                            </div>

                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div >
            </div>

        </>
    )
}

export default Header