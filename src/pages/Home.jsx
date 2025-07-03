import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-12 gap-6">
          <div className='col-span-3'>
               <div className='rounded-lg border bg-card text-card-foreground shadow-sm sticky top-24'>
                    <div className='p-4'>
                         <nav className='space-y-2'>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full justify-start">
                              <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png" alt="home--v2"/>
                              Bosh Sahifa
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start relative">
                              <img width="22" height="20" src="https://img.icons8.com/fluency-systems-regular/50/speech-bubble--v1.png" alt="speech-bubble--v1"/>
                              Xabarlar
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start">
                              <img width="20" height="20" src="https://img.icons8.com/android/24/plus.png" alt="plus"/>
                              Yangi Post
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start">
                              <img width="24" height="24" src="https://img.icons8.com/ios/50/user-group-man-man.png" alt="user-group-man-man"/>
                              Foydalanuvchilar
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start">
                              <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/50/calendar--v1.png" alt="calendar--v1"/>
                              Tadbirlar
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/teacher.png" alt="teacher"/>
                              Mentorlar
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start"><img width="24" height="24" src="https://img.icons8.com/external-outline-lafs/64/external-ic_careers_vacancy-menu-outline-lafs-2.png" alt="external-ic_careers_vacancy-menu-outline-lafs-2"/>
                              Vakansiyalar
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start"><img width="24" height="24" src="https://img.icons8.com/windows/32/what-i-do.png" alt="what-i-do"/>
                              Plan
                              </Link>
                              <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start"><img width="24" height="24     " src="https://img.icons8.com/fluency-systems-regular/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
                              Profile     
                              </Link>
                         </nav>
                    </div>
               </div>
          </div>
          <div className='col-span-6'>
               <div className='space-y-6'>
                   <div className='rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow'>
                         <div className='p-6'>
                              <div className='flex items-center space-x-3 mb-4'>
                                   <span className='relative flex shrink-0 overflow-hidden rounded-full w-12 h-12'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAnklEQVR4AeTNIQiDQABG4b+u17X1aF6PK3YEO9iMJqPVau82y4FgMezS0oVLhqsHtrcqeqzDXv3CEz/6L4yTtZM3dnHmPTtjzXZAXKYVo4agkU2GI2Lloc6JDez1+flswMu1EQZ3xlE7lK8eKDkjtwE+crBMV+wesKmCiisGGepZIfQJpMj9SNb2MYWrChjVkULuCyCfRvsdmBieyQQAsoDk/9ryhFMAAAAASUVORK5CYII=" className="aspect-square h-full w-full" alt="" />
                                   </span>
                                   <div className='flex-1'>
                                        <h3 className='font-semibold'>Bobur Abduvakhobov</h3>
                                        <div className="flex items-center text-sm text-gray-500">
                                             <span>Data Scientist</span>
                                             <span className='mx-2'>•</span>
                                             4 soat oldin
                                        </div>
                                   </div>
                                   <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">•••</button>
                              </div>
                              <div className='mb-4'>
                                   <p className="text-gray-800 leading-relaxed mb-3">Machine Learning bo'yicha yangi kurs boshladim. Data Science sohasida ishlashni xohlaganlar uchun foydali materiallar bo'lishadi. Qiziquvchilar yozsin! 📊</p>
                                   
                              </div>
                         </div>
                   </div>
               </div>
          </div>
      </div>
    </div>
  )
}

export default Home