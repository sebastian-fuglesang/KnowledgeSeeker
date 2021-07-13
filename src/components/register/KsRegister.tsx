import { useForm } from 'react-hook-form';
import { useAuth } from "../contexts/AuthContex";
import { Link, useHistory } from 'react-router-dom';
import { Columns, Column, Button, Label } from 'trunx';

interface RegisterProps {
    username: string;
    password: string;
}

export default function KsRegister() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterProps>();
    const history = useHistory();
    const { registerUser }: { registerUser(email: string, password: string): void } = useAuth();



    const onSubmit = (e: any): void => {
        {/*e.preventDefault(); kræsjer og sier at preventDefault ikke er en funksjon*/ }
        registerUser(e.username, e.password);
        history.push("/");
    }

    return (






        <Columns isFlex isFlexDirectionColumn isAlignItemsCenter isJustifyContentCenter p6 hasBackgroundInfo>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Column>
                    <Label>Username</Label>
                    <input type="text" placeholder="username" {...register("username", { required: "An email is required.", })} />
                    {errors.username && <p>{errors.username.message}</p>}
                </Column>

                <Column>
                    <Label>Password</Label>
                    <input type="text" placeholder="password" {...register("password", { required: "A password is required.", })} />
                    {errors.password && <p>{errors.password.message}</p>}

                </Column>

                <Column>
                    <Label>Register User</Label>
                    <Button type="submit" isLink isNormal>Register User</Button>
                </Column>

                <Column>
                    <p>Already have a user? <Link to="/LoginPage">Log In </Link> </p>

                </Column>

            </form>
        </Columns>
    )
}