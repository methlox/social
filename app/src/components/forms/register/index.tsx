import styles from '../index.module.scss';
import { useForm } from 'react-hook-form';
import { CreateUserParams } from '../../../utils/types';
import { useNavigate, Link } from 'react-router-dom';
import { postRegisterUser } from '../../../utils/api';
import { toast } from 'react-toastify';
import { UsernameField } from './UsernameField';
import { NameField } from './NameField';
import { PasswordField } from './PasswordField';
import { Button } from '../../../utils/styles';

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserParams>({ reValidateMode: 'onBlur' });

    const navigate = useNavigate();
    const onSubmit = async (data: CreateUserParams) => {
        console.log(data);
        try {
            await postRegisterUser(data);
            navigate('/login');
            toast.clearWaitingQueue();
            toast.success('Account created!');
        } catch (err) {
            console.log(err);
            toast.clearWaitingQueue();
            toast.error('Error creating user');
        }
    };
    const formFieldProps = { errors, register };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <UsernameField {...formFieldProps} />
            <NameField {...formFieldProps} />
            <PasswordField {...formFieldProps} />
            <Button className={styles.button}>Create My Account</Button>
            <div className={styles.footerText}>
                <span>Already have an account? </span>
                <Link to="/login" target='_blank'>
                    <span>Login</span>
                </Link>
            </div>
        </form>
    );

};