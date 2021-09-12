import './Header.css'

const Header = () => {
    return (
        <div>
            <ul>
                <li className='navbar'>
                    <a href='/'>Home</a>
                    <a href="/favorites">Favorites</a>
                    <a href="/search">Search</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;
