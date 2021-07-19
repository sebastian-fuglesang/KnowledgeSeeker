
import { useForm } from 'react-hook-form';
import { useAuth } from "../components/contexts/AuthContex";
import { Link, useHistory } from 'react-router-dom';
import { Columns, Column, Button, Label, Input } from 'trunx';
import "./RegisterPage.scss";

interface RegisterProps {
    username: string;
    password: string;
}

export default function RegisterPage() {

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
                    <Label isSize4 hasTextWhite>Brukernavn</Label>
                    <Input type="text" placeholder="Brukernavn" {...register("username", { required: "An email is required.", })} />
                    {errors.username && <p>{errors.username.message}</p>}
                </Column>

                <Column>
                    <Label isSize4 hasTextWhite>Passord</Label>
                    <Input type="text" placeholder="Passord" {...register("password", { required: "A password is required.", })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </Column>

                <Column>
                    <Button value="Registrer bruker" type="submit" isLink isNormal>Registrer Bruker</Button>
                </Column>

                <Column>
                    <p>Har du allerede en bruker? <Link to="/LoginPage">Logg Inn </Link> </p>
                </Column>

            </form>
        </Columns>
    )
}