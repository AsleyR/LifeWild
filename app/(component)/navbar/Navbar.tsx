import Logo from "./Logo"
import NavOptions from "./NavOptions"

const Navbar = () => {

    return (
        <nav className="bg-white drop-shadow-sm sticky top-0 z-30 grid grid-cols-2 w-min-0 gap-12 align-middle items-center py-4 px-6 lg:px-lgx transition-all">
            <Logo />
            <NavOptions />
        </nav>
    )
}

export default Navbar
