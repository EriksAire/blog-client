/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  GlobeIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import react from 'react';

// const src = 'https://links.papareact.com/fqy';

// export const NavBar: React.FC<any> = () => {
//   return (
//     // <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center">
//     //   <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
//     //     <Link href="/">
//     //       <Image
//     //         loader={() => src}
//     //         objectFit="contain"
//     //         src={src}
//     //         layout="fill"
//     //       />
//     //     </Link>
//     //   </div>
//     // </div>

//     <div className='sticky top-0 z-10 flex bg-white px-4 py-2 shadow-sm'>
//       <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
//         <Link href='/'>
//           <Image
//             loader={() => src}
//             objectFit={'contain'}
//             src={src}
//             layout={'fill'}
//           />
//         </Link>
//       </div>

//       <div className='flex items-center mx-7 xl:min-w-[300px]'>
//         <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
//       </div>

//       <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
//         <input
//           className='flex-1 bg-transparent outline-none'
//           type='text'
//           placeholder='Search Reddit'
//         />
//         <button type='submit' hidden />
//       </form>

//       <div className='items-center space-x-2 text-gray-500 mx-5 hidden lg:inline-flex'>
//         {/* <SparklesIcon className="icon" /> */}
//         {/* <GlobeIcon className="icon" /> */}
//         {/* <VideoCameraIcon className="icon" /> */}
//         {/* <hr className="h-10 border border-gray-100" /> */}
//         {/* <ChatIcon className="icon" /> */}
//         {/* <BellIcon className="icon" /> */}
//         {/* <PlusIcon className="icon" /> */}
//         {/* <SpeakerphoneIcon className="icon" /> */}
//       </div>
//       <div className='ml-5 flex items-center lg:hidden'>
//         {/* <MenuIcon className="icon" /> */}
//       </div>
//     </div>
//   );
// };
const firstImage = 'https://links.papareact.com/fqy';
const secondImage = 'https://links.papareact.com/23l';

export const NavBar: React.FC<any> = () => {
  return (
    <div className='sticky top-0 z-10 flex bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image
          objectFit='contain'
          src='https://links.papareact.com/fqy'
          layout='fill'
        />
      </div>
      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>

      {/* Search */}

      <form className='flex flex-1 item-center space-x-2 border border-gray-200 rounder-sm bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input
          className='flex-1 bg-transparent outline-none'
          type='text'
          placeholder='Search Reddit'
        />
        <button type='submit' hidden />
      </form>

      <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <MenuIcon className='icon' />
      </div>

      <div className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image
            loader={() => secondImage}
            src={secondImage}
            objectFit='contain'
            layout='fill'
            alt='icon'
          />
        </div>
        <p className='text-gray-400'>Sign In</p>
      </div>
    </div>
  );
};
