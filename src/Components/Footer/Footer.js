import { Link } from 'react-router-dom'
function Footer() {
    return (

        <footer class="bg-white w-full shadow  dark:bg-gray-800 flex justify-end">
            <div class="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Dine. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/about" class="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="/menu" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;