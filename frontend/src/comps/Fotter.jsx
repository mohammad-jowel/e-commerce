import React from 'react'

const Fotter = () => {
  return (
    <footer className="max-w-full bg-black text-white py-2 pt-10">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                    <svg className="size-10" width="89" height="85" viewBox="0 0 89 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="89" height="85" rx="42" fill="#1E99F5"/>
                        <path d="M39.7793 39.959L41.0273 38.5527H42.8906L45.1055 27.3555C42.7031 27.3555 40.752 28.0059 39.252 29.3066C37.7637 30.5957 37.0195 32.2832 37.0195 34.3691L37.0371 34.7559L33.6094 36.4082C33.9141 32.8105 35.3086 30.1738 37.793 28.498C40.2891 26.8223 44.0508 25.9844 49.0781 25.9844H59.2207L57.6387 30.959H56.5137C56.666 30.4902 56.7422 30.0273 56.7422 29.5703C56.7422 28.0469 54.3457 27.2852 49.5527 27.2852H48.7969L46.5645 38.5527H54.2285L52.4883 40.3457C50.6133 40.0879 48.832 39.959 47.1445 39.959H46.2832L45.2637 45.1094C44.4082 49.4453 42.75 52.9082 40.2891 55.498C37.8398 58.0879 34.9863 59.3828 31.7285 59.3828C29.9707 59.3828 28.4004 58.7207 27.0176 57.3965L29.6016 54.7598C30.5273 56.6816 32.0156 57.6426 34.0664 57.6426C35.9414 57.6426 37.4121 56.793 38.4785 55.0938C39.5566 53.4062 40.5234 50.4121 41.3789 46.1113L42.6094 39.959H39.7793Z" fill="black"/>
                    </svg>
                    <span className="ml-2 text-xl font-bold text-white">Furni<span className="text-blue-500">Flex</span></span>
                </div>
                <div className="flex space-x-14 lg:space-x-28">
                    <div>
                        <h3 className="font-bold mb-2">About US</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Master Plan</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Jobs</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Invest</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Pressroom</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Explore EEVE</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Unlock my Robot Power</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Starlight</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Robot Platform</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">EEVE Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Community & Support</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">Willow X Community</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Developer & Maker Access</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Special Cases</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                    <a href="#" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path stroke="#ffffff" d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                            <path stroke="#dddd" d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                            <path stroke="#cccc" d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                            <path stroke="#ffffff" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex space-x-3 lg:space-x-5">
                    <a href="#" className="hover:underline text-gray-400">March22 Recap</a>
                    <a href="#" className="hover:underline text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:underline text-gray-400">General Terms</a>
                    <a href="#" className="hover:underline text-gray-400">Contact</a>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-400">United States (English)</span>
                    <span className="text-gray-400">|</span>
                    
                </div>
            </div>
        </div>
            <div className="flex justify-center pt-2">
                <span className="text-gray-400">Mohammad Jowel © 2024. All rights reserved.</span>
            </div>
    </footer>

  )
}

export default Fotter