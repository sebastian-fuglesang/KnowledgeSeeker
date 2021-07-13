import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { companiesDB } from '../utils/firebase';
import { Columns, Column, Label, Button, Input } from 'trunx';

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
                    console.log(snapshot);
                    history.push("/RegisterCompanyRepresentant");
                }
            }).catch(e => {
                console.log(e)
            });
    }

    const handleCreateCompany = (): void => {
        history.push("/CreateNewCompanyPage");
    }

    let matchingCompanies: { name: string, employees: number }[] = [];

    const handleSearchForCompany = (event: any) => {


        companiesDB.where('companyName', '==', event.companyName).get().then(company => {
            company.forEach(doc => {
                var company: { name: string, employees: number } = { name: '', employees: 0 };
                company.name = doc.data().companyName;
                company.employees = doc.data().numberOfEmployees;
                matchingCompanies.push(company);
            })
        }).catch(e => { console.log(e) });
        console.log(matchingCompanies);
    }

    {/*
    const handleCompanyData = (matchingCompanies: { name: string; employees: number }) => {

    }
*/}

    return (

        <Columns isFlex isFlexDirectionColumn isAlignItemsCenter isJustifyContentCenter p4>
            <form onSubmit={handleSubmit(handleSearchForCompany)}>

                <Column isFlex isFlexDirectionRow isJustifyContentCenter mb6>
                    <Label isSize3 hasTextInfo>Finn Bedrift</Label>
                </Column>

                <Column isFlex isFlexDirectionRow>
                    <Input type="text" placeholder="Bedriftens Navn" {...register("companyName", { required: "Må ha et navn til bedriften" })} />

                    <Button type="submit" value="Søk" isInfo isNormal ml2>Søk</Button>
                </Column>
                <Column>
                    {errors.companyName && <p>{errors.companyName.message}</p>}
                </Column>

                <Column>
                    <Button isInfo isNormal mr2>Tilknytt Bedrift</Button>
                    <Button isInfo isNormal ml2 onClick={handleCreateCompany}>Opprett Bedrift</Button>
                </Column>

                <Column>
                    {matchingCompanies.map((company: { name: string; employees: number }, i: number) => {
                        <>
                            <p>{company.name}</p>
                            <p>{company.employees}</p>
                        </>
                    })

                    }

                </Column>



            </form>
        </Columns>
    )
}