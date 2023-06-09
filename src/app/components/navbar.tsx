import Link from "next/link"
export default function Navbar() {
    return(
        <nav id="NavigationBar" className="flex sm:py-6 py-4 items-center flex-row top-0 w-screen h-16 sm:h-20 lg:bottom-0 z-50 fixed text-center justify-evenly backdrop-blur-md">
            <Link
                href={"/#"}
                className="hover:scale-110 hidden sm:block transiton-all duration-300 ease-in-out w-20 text-center"
            >
                <p>ABOUT</p>
            </Link>
            <Link
                href={"/#Events"}
                className="hover:scale-110 hidden sm:block transiton-all duration-300 ease-in-out w-20 text-center"
            >
                <p>EVENTS</p>
            </Link>

            <Link
                href={"/#"}
            >
                <svg className="hover:scale-110 transiton-all duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
                    style={{fill:"#FFFFFF"}}>
                    <path d="M 15 2.59375 C 12.613 5.01075 12.598 8.9300312 15 11.332031 L 18.667969 15 L 16.414062 17.253906 C 18.151062 18.991906 18.931625 21.350625 18.765625 23.640625 L 23.037109 19.369141 L 26.712891 15.693359 C 27.096891 15.310359 27.095891 14.689641 26.712891 14.306641 L 19.369141 6.9628906 L 15 2.59375 z M 11.234375 6.359375 L 6.9628906 10.630859 L 6.8398438 10.755859 L 3.2890625 14.304688 C 2.9060625 14.688688 2.9060625 15.309359 3.2890625 15.693359 L 13.966797 26.371094 L 15 27.40625 C 17.387 24.98925 17.402 21.069969 15 18.667969 L 11.332031 15 L 13.585938 12.746094 C 11.848937 11.008094 11.068375 8.649375 11.234375 6.359375 z"></path>
                </svg>
            </Link>

            <Link
                href={"/#Competition"}
                className="hover:scale-110 hidden sm:block transiton-all duration-300 ease-in-out w-20 text-center"
            >
                <p>COMPETITION</p>
            </Link>
            <Link
                href={"/#Crack the Code"}
                className="hover:scale-110 hidden sm:block transiton-all duration-300 ease-in-out w-fit text-center"
            >
                <p>VIDEO PUZZLE</p>
            </Link>
        </nav>
    )
}