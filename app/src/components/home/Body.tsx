import { Button } from '../../utils/styles/button';
import './styles.scss'
import { useNavigate } from 'react-router-dom';

function Body() {
    const navigate = useNavigate();
    return (
        <>
            <div className='getstarted'>
                <Button
                    size="lg"
                    flex={true}
                    variant="primary"
                    onClick={() => navigate('/register')}
                >
                    <span>Get Started</span>
                </Button>
            </div>
        </>
    )
}

export default Body