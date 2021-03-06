import React, { useState } from 'react';
import Layout from '../../../layout/layout';
import Button from '../../atoms/button/button';
import Option from '../../atoms/option/option';
import Card from '../../organism/card/card';
import img from '../../../img/undraw_adventure_4hum 1.svg'
import './index.scss';

const Index = props => {

    const [optionSelected, setoptionSelected] = useState("")

    return (
        <Layout>
            <div className="p-container">
                <h1 className="p-container-title">Country quiz</h1>
                <Card>
                    <img src={img} alt="" className="o-card-img"/>
                    <h2 className="o-card-title">Seleccione una opcion</h2>
                    <div className="o-card-body">
                        <Option id="opt-1" option="Capitales" action={() => setoptionSelected("capitales")} value="capitales"  />
                        <Option id="opt-2" option="Banderas" action={() => setoptionSelected("banderas")} value="banderas"  />
                    </div>
                    <div className="o-card-footer">
                        <Button type="Link" text="Siguiente" link={optionSelected} />
                    </div>
                </Card>
            </div>
        </Layout>
     );
}
 
export default Index;