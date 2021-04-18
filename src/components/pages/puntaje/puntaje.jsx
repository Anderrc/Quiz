import React from 'react';
import Layout from "../../../layout/layout";
import Button from "../../atoms/button/button";
import Card from "../../organism/card/card";
import img from '../../../img/undraw_winners_ao2o 2.svg'
import { useParams } from 'react-router';

const Puntaje  = props => {
    const {puntaje} = useParams();
    return ( 

        <Layout>
            <div className="p-container">
                <h1 className="p-container-title">Country quiz</h1>
                <Card>
                    <div className="o-card-body">
                        <img src={img} alt=""/>
                        <h2 className="respuesta">Tu puntaje</h2>
                        <h3 className="respuesta-texto"> Tienes <span className="respuesta-numero">{puntaje > 0 ? puntaje - 1:puntaje}</span> respuestas correctas </h3>
                    </div>
                    <div className="o-card-footer">
                        <Button type="Link" text="Siguiente" link="/" />
                    </div>
                </Card>
            </div>
        </Layout>
     );
}
 
export default Puntaje;