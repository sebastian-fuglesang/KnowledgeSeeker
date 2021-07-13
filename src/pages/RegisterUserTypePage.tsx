import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Columns, Column, Container } from 'trunx';
import "./RegisterUserTypePage.scss";



export default function RegisterUserTypePage() {

    const history = useHistory();
    const handleStudent = (event: React.MouseEvent): void => {
        history.push("/RegisterPage");
    }
    const handleCompanyRepresentant = (event: React.MouseEvent): void => {
        history.push("/AttachCompanyPage")
    }

    return (

        <Columns style={{}} isFlex isFlexDirectionRow isAlignContentCenter isJustifyContentCenter>

            <Column isTwoFifths isCentered>
                <Button isLink isLarge onClick={handleCompanyRepresentant}>Jeg er en Bedriftsrepresentant</Button>
            </Column>

            <Column isTwoFifths>
                <Button isLink isLarge onClick={handleStudent}>Jeg er en Student</Button>
            </Column>

        </Columns>
    )
}