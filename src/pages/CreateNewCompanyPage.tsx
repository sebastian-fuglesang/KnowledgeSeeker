import { Container, Hero, Label } from "trunx";
import { useForm } from 'react-hook-form';
import { companiesDB } from "../utils/firebase";


enum industries {
    alltech = "Alltech",
    fintech = "Fintech"
}

interface CreateCompanyProps {
    companyName: string;
    description: string;
    numberOfEmployees: number;
    industry: industries;
}

export default function CreateNewCompanyPage() {

    const { register, handleSubmit, formState: { errors } } = useForm<CreateCompanyProps>();
    const onSubmit = (event: any) => {
        console.log(event);
        companiesDB.add({
            ...event
        })
    }

    return (
        <Container>
            <Hero isSize4 hasBackgroundLink hasTextWhite hasTextCentered m6>Opprett Ny Bedrift</Hero>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Bedriftens navn</Label>
                <input type="text" placeholder="Bedriftens navn" {...register("companyName", { required: "A company name is required" })} />
                {errors.companyName && errors.companyName.message}

                <Label>Beskrivelse</Label>
                <input type="text" placeholder="Beskrivelse" {...register("description", { required: "A description is required" })} />
                {errors.description && errors.description.message}

                <Label>Antall Ansatte</Label>
                <input type="number" placeholder="Antall ansatte" {...register("numberOfEmployees")} />

                <Label>Bedriftens Bransje</Label>
                <select {...register("industry")}>
                    <option>{industries.alltech}</option>
                    <option>{industries.fintech}</option>
                </select>

                <button type="submit">Opprett Bedrift</button>

            </form>
        </Container >)
}