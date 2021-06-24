import { Navbar } from "trunx"
import { Button } from 'trunx'

const KsNavbar = () => {
    return (
        <Navbar>
            {/* hvordan løse dette bedre med trunx? Må jeg bruke className her? Kan bare importere NavbarItemProps men ikke NavbarItem */}
            <div className="navbar-menu">
                
                <div className="navbar-start">
                    <div className="navbar-item">
                        <a>KnowledeSeeker</a>
                    </div>
                </div>

                <div className="navbar-end">

                    <div className="navbar-item">
                        <a>Om oss</a>
                    </div>

                    <div className="navbar-item">
                        <a>Finn Internship</a>
                    </div>

                    <div className="navbar-item">
                        <a>Finn bedrifter</a>
                    </div>

                    <Button isLink m2>Registrer deg</Button>
                    <Button isLink m2>Logg Inn</Button>

                </div>

            </div>
        </Navbar>
    )
}

export default KsNavbar