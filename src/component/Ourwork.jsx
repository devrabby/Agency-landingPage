import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const Ourwork = () => {

    const workData = [
        {
            title: 'Modile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app
        },
        {
            title: 'dashboard management',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fittness app promotion',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_fitness_app
        },
    ]
    return (
        <div id='our-work' className='flex flex-col gap-7 items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-39 text-gray-700 dark:text-white'>
            <Title title={'Our latest work'} desc={'From strategy execution, we craft digital solutions that move your business forward.'} />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    workData.map((work, index) => (
                        <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} alt="" className='w-full rounded-xl' />
                            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Ourwork