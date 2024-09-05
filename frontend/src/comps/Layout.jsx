import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMenu, setUserMenu] = useState(false)
    const { user, LogOut } = useContext(UserContext);


    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const logOut = () => {
        if (user) {
            LogOut();
        }
    }

    return (
        <div>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div class="mx-auto max-w-screen-2xl px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
                <button onClick={toggleNav} type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <Link to="/" class="flex items-center ms-2 md:me-24" >
                <svg className="bg-blue-600 rounded-full size-10" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.01953 9.47266L9.85156 8.53516H11.0938L12.5703 1.07031C10.9688 1.07031 9.66797 1.50391 8.66797 2.37109C7.67578 3.23047 7.17969 4.35547 7.17969 5.74609L7.19141 6.00391L4.90625 7.10547C5.10938 4.70703 6.03906 2.94922 7.69531 1.83203C9.35938 0.714844 11.8672 0.15625 15.2188 0.15625H21.9805L20.9258 3.47266H20.1758C20.2773 3.16016 20.3281 2.85156 20.3281 2.54688C20.3281 1.53125 18.7305 1.02344 15.5352 1.02344H15.0312L13.543 8.53516H18.6523L17.4922 9.73047C16.2422 9.55859 15.0547 9.47266 13.9297 9.47266H13.3555L12.6758 12.9062C12.1055 15.7969 11 18.1055 9.35938 19.832C7.72656 21.5586 5.82422 22.4219 3.65234 22.4219C2.48047 22.4219 1.43359 21.9805 0.511719 21.0977L2.23438 19.3398C2.85156 20.6211 3.84375 21.2617 5.21094 21.2617C6.46094 21.2617 7.44141 20.6953 8.15234 19.5625C8.87109 18.4375 9.51562 16.4414 10.0859 13.5742L10.9062 9.47266H9.01953Z" fill="black"/>
                </svg>
                <svg className="ml-3 w-90 h-5" viewBox="0 0 89 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.264205 16V1.45455H9.89489V3.99006H3.33949V7.45597H9.25568V9.99148H3.33949V16H0.264205ZM18.2188 11.3551V5.09091H21.2443V16H18.3395V14.0185H18.2259C17.9796 14.6577 17.5701 15.1714 16.9972 15.5597C16.429 15.9479 15.7353 16.142 14.9162 16.142C14.187 16.142 13.5455 15.9763 12.9915 15.6449C12.4375 15.3134 12.0043 14.8423 11.6918 14.2315C11.384 13.6207 11.2277 12.8892 11.223 12.0369V5.09091H14.2486V11.4972C14.2533 12.1411 14.4261 12.6501 14.767 13.0241C15.108 13.3982 15.5649 13.5852 16.1378 13.5852C16.5024 13.5852 16.8433 13.5024 17.1605 13.3366C17.4777 13.1662 17.7334 12.9152 17.9276 12.5838C18.1264 12.2524 18.2235 11.8428 18.2188 11.3551ZM23.6644 16V5.09091H26.5977V6.99432H26.7113C26.9102 6.31723 27.244 5.80587 27.7127 5.46023C28.1815 5.10985 28.7212 4.93466 29.332 4.93466C29.4835 4.93466 29.6469 4.94413 29.8221 4.96307C29.9973 4.98201 30.1512 5.00805 30.2837 5.04119V7.72585C30.1417 7.68324 29.9452 7.64536 29.6942 7.61222C29.4433 7.57907 29.2137 7.5625 29.0053 7.5625C28.5603 7.5625 28.1625 7.65956 27.8121 7.85369C27.4665 8.04309 27.1919 8.30824 26.9883 8.64915C26.7894 8.99006 26.69 9.38305 26.69 9.82812V16H23.6644ZM34.8736 9.69318V16H31.848V5.09091H34.7315V7.01562H34.8594C35.1009 6.38116 35.5057 5.87926 36.0739 5.50994C36.642 5.13589 37.331 4.94886 38.1406 4.94886C38.8982 4.94886 39.5587 5.11458 40.1222 5.44602C40.6856 5.77746 41.1236 6.25095 41.4361 6.86648C41.7486 7.47727 41.9048 8.20644 41.9048 9.05398V16H38.8793V9.59375C38.884 8.92614 38.7135 8.4053 38.3679 8.03125C38.0223 7.65246 37.5464 7.46307 36.9403 7.46307C36.5331 7.46307 36.1733 7.55066 35.8608 7.72585C35.553 7.90104 35.3116 8.15672 35.1364 8.4929C34.9659 8.82434 34.8783 9.22443 34.8736 9.69318ZM44.2894 16V5.09091H47.315V16H44.2894ZM45.8093 3.68466C45.3595 3.68466 44.9736 3.53551 44.6516 3.23722C44.3344 2.93419 44.1758 2.57197 44.1758 2.15057C44.1758 1.7339 44.3344 1.37642 44.6516 1.07812C44.9736 0.775094 45.3595 0.623579 45.8093 0.623579C46.2591 0.623579 46.6426 0.775094 46.9599 1.07812C47.2818 1.37642 47.4428 1.7339 47.4428 2.15057C47.4428 2.57197 47.2818 2.93419 46.9599 3.23722C46.6426 3.53551 46.2591 3.68466 45.8093 3.68466Z" fill="black"/>
                    <path d="M49.7955 16V1.45455H59.4261V3.99006H52.8707V7.45597H58.7869V9.99148H52.8707V16H49.7955ZM64.4634 1.45455V16H61.4379V1.45455H64.4634ZM71.8587 16.2131C70.7365 16.2131 69.7706 15.9858 68.9609 15.5312C68.156 15.072 67.5357 14.4233 67.1001 13.5852C66.6645 12.7424 66.4467 11.7457 66.4467 10.5952C66.4467 9.47301 66.6645 8.48816 67.1001 7.64062C67.5357 6.79309 68.1489 6.13258 68.9396 5.65909C69.7351 5.18561 70.6679 4.94886 71.7379 4.94886C72.4576 4.94886 73.1276 5.06487 73.7479 5.29688C74.3729 5.52415 74.9174 5.86742 75.3814 6.3267C75.8501 6.78598 76.2147 7.36364 76.4751 8.05966C76.7356 8.75095 76.8658 9.56061 76.8658 10.4886V11.3196H67.6541V9.4446H74.0178C74.0178 9.009 73.9231 8.62311 73.7337 8.28693C73.5443 7.95076 73.2815 7.68797 72.9453 7.49858C72.6139 7.30445 72.228 7.20739 71.7876 7.20739C71.3284 7.20739 70.9212 7.31392 70.5661 7.52699C70.2157 7.73532 69.9411 8.01705 69.7422 8.37216C69.5433 8.72254 69.4415 9.11316 69.4368 9.54403V11.3267C69.4368 11.8665 69.5362 12.3329 69.7351 12.7259C69.9387 13.1188 70.2251 13.4219 70.5945 13.6349C70.9638 13.848 71.4018 13.9545 71.9084 13.9545C72.2446 13.9545 72.5523 13.9072 72.8317 13.8125C73.111 13.7178 73.3501 13.5758 73.549 13.3864C73.7479 13.197 73.8994 12.965 74.0036 12.6903L76.8018 12.875C76.6598 13.5473 76.3686 14.1345 75.9283 14.6364C75.4927 15.1335 74.9292 15.5218 74.2379 15.8011C73.5514 16.0758 72.7583 16.2131 71.8587 16.2131ZM81.1733 5.09091L83.1761 8.90483L85.2287 5.09091H88.3324L85.1719 10.5455L88.4176 16H85.3281L83.1761 12.2287L81.0597 16H77.9347L81.1733 10.5455L78.0483 5.09091H81.1733Z" fill="#1E99F5"/>
                </svg>
                </Link>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ms-3">
                    <div>
                    <div class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </nav>

        <aside id="logo-sidebar" class={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isOpen? "" : "-translate-x-full"} bg-white border-r border-gray-300 sm:translate-x-0 " aria-label="Sidebar"`}>
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul class="space-y-2 font-medium">
                
                <li>
                    <Link to="/" onClick={toggleNav} class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 hover:text-gray-100 group">
                    <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                    </Link>
                </li>
                <li>
                    <Link to="/login" onClick={toggleNav} class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 hover:text-gray-100 group">
                    <span class="flex-1 ms-3 whitespace-nowrap">Log In</span>
                    </Link>
                </li>
                <li>
                    <Link to="/singup" onClick={toggleNav} class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 hover:text-gray-100 group">
                    <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                    </Link>
                </li>
            </ul>
        </div>
        </aside>

        <div class="bg-white max-w-full p-4 sm:ml-64">
        <div class="mx-auto p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
            <Outlet />
        </div>
        </div>
        </div>
    );
};

export default Layout;
