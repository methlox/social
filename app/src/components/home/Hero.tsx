import Body from './Body'
import { Nav } from './Nav'
import './styles.scss'
// well well well
function Hero() {
    return (
        <>
            <div className='nav'>
                <Nav />
            </div>
            <Body />
        </>
    )
}

export default Hero