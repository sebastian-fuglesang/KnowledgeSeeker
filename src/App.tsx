import KsFooter from "./components/pagetemplate/KsFooter"
import KsBcard from "./components/card/KsBcard"
import KsNavbar from "./components/pagetemplate/KsNavbar"
import { Columns } from "trunx"
import { Column } from "trunx"
import Postings from "./services/Postings"

function CreateKsBcard(posting:any){
    return (
        <Column>
            <KsBcard
            position={posting.position}
            posted={posting.posted}
            description={posting.description}
            />
        </Column>
    )
    
    
}


function App() {
    return (
        <div className="App">
            
            <KsNavbar />

            <Columns>
                {Postings.map(CreateKsBcard)}
            </Columns>




            <KsFooter />
        </div>
    )
}

export default App