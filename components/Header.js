import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    CheckBadgeIcon,
    UserIcon,
    LightBulbIcon,
    MagnifyingGlassIcon,
    FilmIcon
} from '@heroicons/react/24/outline'
const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5
         justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightBulbIcon} />
                <HeaderItem title="Verified" Icon={CheckBadgeIcon} />
                <HeaderItem title="Collections" Icon={FilmIcon} />
                <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
                <HeaderItem title="Profile" Icon={UserIcon} />
            </div>
            <Image src={"https://cdn.freebiesupply.com/images/large/2x/hulu-logo-black-transparent.png"}
                width={200}
                height={100}
                alt={"Logo"}
            />
        </header>
    )
}

export default Header