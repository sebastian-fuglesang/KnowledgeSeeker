import { Card } from 'trunx'
import BcardContent from './BcardContent'
import BcardHeader from './BcardHeader'
import BcardFooter from './BcardFooter'
import BcardImage from './BcardImage'




const KsBcard = (props:any) => {

    return (
        <Card m6>
            <BcardHeader position={props.position} posted={props.posted} />
            <BcardContent description={props.description} />
            <BcardImage />
            <BcardFooter />
        </Card>
    )
}

export default KsBcard