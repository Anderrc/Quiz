import React, { useEffect, useState } from 'react';
import Layout from "../../../layout/layout";
import Button from "../../atoms/button/button";
import Option from "../../atoms/option/option";
import Card from "../../organism/card/card";
import './ask-name.scss';

const AskName  = props => {

    const [optionSelected, setoptionSelected] = useState("");
    const [paises, setPaises] = useState([]);
    const [pregunta, setPregunta] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [cargar, setcargar] = useState(0)

    const letters = ['A','B','C','D'];

    function desordenar(unArray){
        var t = unArray.sort(function(a,b) {return (Math.random()-0.5)});
        return [...t];
      }

    useEffect(async() => {
        fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;')
            .then(response => response.json())
            .then( data => {
                let pregunta2 = data[Math.round(Math.random() * (data.length - 0) + 0)];
                setPregunta(pregunta2);
                respuestas.push(pregunta2);
                for (let i = 0; i < 3; i++) {
                    respuestas.push(data[Math.round(Math.random() * (data.length - 0) + 0)]);
                }
                desordenar(respuestas);
                setRespuestas(respuestas);
                setPaises(data);
            });    
    },[])

    useEffect(() => {
        let respuestas2 = [];
        console.log('entrar');
        for (let i = 0; i < respuestas.length; i++) {
            let correcta = pregunta.capital === respuestas[i].capital ? 'correct':optionSelected === respuestas[i].capital ?  'failed':'';
            let respueta = {
                name:respuestas[i].name,
                capital:respuestas[i].capital,
                className:correcta
            }
            respuestas2.push(respueta);
        }
        setRespuestas(respuestas2);        
        return () => {
           setcargar(0);
        }
     }, [cargar])

    return ( 

        <Layout>
            <div className="p-container">
                <h1 className="p-container-title">Country quiz</h1>
                <Card>
                    <h2 className="o-card-title">Cual es la capital de {pregunta.name} </h2>
                    <div className="o-card-body">
                        {respuestas.map((item,key) => (
                            <Option 
                                id={"opt-"+key} 
                                option={item.capital} 
                                action={() => {setoptionSelected(item.capital); }} 
                                value={item.capital} 
                                className={ item.className ? item.className :"No entre" }
                                letter={letters[key]}
                                key={key}
                            />
                        ))}
                    </div>
                    <div className="o-card-footer">
                        <Button type="button" text="Validar" link={optionSelected} action={ ()=>setcargar(1) } />
                    </div>
                </Card>
            </div>
        </Layout>
     );
}
 
export default AskName;