import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
    InputContainer,
    InputField,
    InputLabel,
} from '../../../utils/styles';

export const LoginForm = () => {

    return (
        <form>
            <InputContainer>
                <InputLabel htmlFor="username">Username</InputLabel>
                <InputField />
            </InputContainer>
            <Button>Login</Button>
            <div>
                <span>Don't have an account? </span>
                <Link to="/register">
                    <span>Register</span>
                </Link>
            </div>
        </form>
    );
};
