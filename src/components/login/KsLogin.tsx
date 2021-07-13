import { useForm } from 'react-hook-form';
import { useAuth } from "../../components/contexts/AuthContex";
import { Link, useHistory } from 'react-router-dom';
import { Columns, Column, Label, Button, Input } from 'trunx';

interface LoginProps {
    email: string;
    password: string;
}

export default function KsLogin() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginProps>();
    const { loginUser }: { loginUser(email: string, password: string): void } = useAuth()
    const history = useHistory();
    const onSubmit = (e: any) => {
        {/*e.preventDefault(); kræsjer og sier at preventDefault ikke er en funksjon*/ }
        loginUser(e.email, e.password);
        history.push("/Dashboard")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Columns isFlex isFlexDirectionColumn hasBackgroundInfo isAlignItemsCenter isJustifyContentCenter p6>
                <Column isThreeFifths isFlex isAlignItemsCenter isJustifyContentCenter isFlexDirectionColumn>
                    <Label>Email</Label>
                    <Input style={{ maxWidth: '50%' }} type="text" placeholder="email" {...register("email", { required: "An email is required.", })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </Column>

                <Column isThreeFifths isFlex isAlignItemsCenter isJustifyContentCenter isFlexDirectionColumn>
                    <Label>Passord</Label>
                    <Input style={{ maxWidth: '50%' }} type="text" placeholder="password" {...register("password", { required: "A password is required.", })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </Column>

                <Column isThreeFifths isFlex isAlignItemsCenter isJustifyContentCenter isFlexDirectionColumn>
                    <Button type="submit" isLink isNormal>Login</Button>
                </Column>

                <Column isThreeFifths isFlex isAlignItemsCenter isJustifyContentCenter isFlexDirectionColumn>
                    <div>
                        Don't have an account? <Link to="/RegisterPage">Register User</Link>
                    </div>
                </Column>

            </Columns >
        </form>


    )
}