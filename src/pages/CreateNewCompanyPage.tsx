import { Button, Hero, Label, Columns, Column } from "trunx";
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
        <Columns isFlex isFlexDirectionColumn isAlignItemsCenter isJustifyContentCenter>

            <Column>
                <Hero isSize4 hasBackgroundInfo hasTextWhite hasTextCentered m6 pl6 pr6 pb2 pt2>Opprett Ny Bedrift</Hero>
            </Column>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Column>
                    <Label hasTextInfo>Bedriftens navn</Label>
                    <input type="text" placeholder="Bedriftens navn" {...register("companyName", { required: "A company name is required" })} />
                    {errors.companyName && errors.companyName.message}
                </Column>

                <Column>
                    <Label hasTextInfo>Beskrivelse</Label>
                    <textarea style={{ maxWidth: 200 }} placeholder="Beskrivelse" {...register("description", { required: "A description is required" })} />
                    {errors.description && errors.description.message}
                </Column>

                <Column>
                    <Label hasTextInfo>Antall Ansatte</Label>
                    <input type="number" placeholder="Antall ansatte" {...register("numberOfEmployees")} />
                </Column>

                <Column>
                    <Label hasTextInfo>Bedriftens Bransje</Label>
                    <select {...register("industry")}>
                        <option>{industries.alltech}</option>
                        <option>{industries.fintech}</option>
                    </select>
                </Column>

                <Column>
                    <Button isMedium isInfo type="submit">Opprett Bedrift</Button>
                </Column>
            </form>
        </Columns >)
}