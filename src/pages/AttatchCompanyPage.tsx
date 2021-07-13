import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { companiesDB } from '../utils/firebase';
import { Columns, Column, Label, Button } from 'trunx';

interface AttatchCompanyProps {
    companyName: string;
}

export default function AttatchCompanyPage() {

    const { register, handleSubmit, formState: { errors } } = useForm<AttatchCompanyProps>();
    const history = useHistory();

    const handleAttach = (data: any): void => {
        const isACompany = companiesDB
            .where('companyName', '==', data.companyName)
            .get()
            .then(snapshot => {
                if (!snapshot.empty) {
                    history.push("/RegisterCompanyRepresentant");
                }
            }).catch(e => {
                console.log(e)
            });

    }

    const handleCreateCompany = (): void => {
        history.push("/CreateNewCompanyPage");
    }

    return (

        <Columns isFlex isFlexDirectionColumn isAlignItemsCenter isJustifyContentCenter p4>
            <form onSubmit={handleSubmit(handleAttach)}>

                <Column>
                    <Label>Finn Bedrift</Label>
                </Column>

                <Column>
                    <input type="text" placeholder="Name of Company" {...register("companyName", { required: "Må ha et navn til bedriften" })} />
                    {errors.companyName && <p>{errors.companyName.message}</p>}
                    <Button type="submit" isInfo isSmall ml2>Søk</Button>
                </Column>

                <Column>
                    <Button isInfo isSmall mr2>Tilknytt Bedrift</Button>
                    <Button isInfo isSmall ml2 onClick={handleCreateCompany}>Opprett Bedrift</Button>

                </Column>



            </form>
        </Columns>
    )
}