import React, { useEffect, useState } from 'react';
import Layout from "../../../layout/layout";
import Button from "../../atoms/button/button";
import Option from "../../atoms/option/option";
import Card from "../../organism/card/card";
import img from '../../../img/undraw_adventure_4hum 1.svg'
import './ask-flag.scss';

const AskName  = props => {

    const [optionSelected, setoptionSelected] = useState("");
    const [paises, setPaises] = useState([]);
    const [pregunta, setPregunta] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [cargar, setcargar] = useState(2);
    const [cargarPaises, setCargarPaises] = useState(1);
    const [cambiarPalabra, setCambiarPalabra] = useState(0);
    const [checked, setChecked] = useState(false);
    const [puntaje, setPuntaje] = useState(0);

    const letters = ['A','B','C','D'];

    function desordenar(unArray){
        var t = unArray.sort(function(a,b) {return (Math.random()-0.5)});
        return [...t];
      }

    useEffect(async() => {
        fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;flag;')
            .then(response => response.json())
            .then( data => {
                let pregunta2 = data[Math.round(Math.random() * ((data.length - 1) - 0) + 0)];
                setPregunta(pregunta2);
                respuestas.push(pregunta2);
                for (let i = 0; i < 3; i++) {
                    let res = data[Math.round(Math.random() * ((data.length - 1) - 0) + 0)];
                    if(res.name !== pregunta2.name){
                        respuestas.push(res);
                    }else{
                        i = i-1;
                    }
                }
                desordenar(respuestas);
                setRespuestas(respuestas);
                setPaises(data);
            }); 

            return () => {
                setCargarPaises(0);
                setCambiarPalabra(0);
             }
    },[cargarPaises])

    useEffect(() => {

        let respuestas2 = [];
      
        for (let i = 0; i < respuestas.length; i++) {
            let correcta = pregunta.name === respuestas[i].name ? 'correct':optionSelected === respuestas[i].name ?  'failed':'';
            let respueta = {
                name:respuestas[i].name,
                capital:respuestas[i].capital,
                className:correcta
            }
            respuestas2.push(respueta);
        }
        setRespuestas(respuestas2);        
        return () => {

            if( optionSelected === pregunta.name && optionSelected !== "" ){

                let puntajeSuman = puntaje+1;
                setPuntaje(puntajeSuman);
                setcargar(2);
                setCambiarPalabra(2);

            }else if( cargar === 3  ){
                props.history.push('/puntaje/'+puntaje);
            }
            else{
                setCambiarPalabra(0);
                setcargar(0);
            }
        }
     }, [cargar])

    useEffect(() => {
        if(cambiarPalabra===1){
            respuestas.length = 0;
            setRespuestas(respuestas);
            setPregunta("");

            let pregunta2 = paises[Math.round(Math.random() * ((paises.length - 1) - 0) + 0)];
            setPregunta(pregunta2);
            respuestas.push(pregunta2);
            for (let i = 0; i < 3; i++) {
                respuestas.push(paises[Math.round(Math.random() * ((paises.length - 1)- 0) + 0)]);
            }
            desordenar(respuestas);
            setRespuestas(respuestas);
            setCambiarPalabra(0);
            setoptionSelected("");
            setChecked(false);
            return () => {
            }
        }
    }, [cambiarPalabra])

    return ( 

        <Layout>
            <div className="p-container">
                <h1 className="p-container-title">Country quiz</h1>
                <Card>
                    <img src={img} alt="" className="o-card-img"/>
                    <h2 className="o-card-title">¿De donde esa la bandera <img src={pregunta.flag} alt={pregunta.name} className="o-card-bandera"/>?</h2>
                    <div className="o-card-body">
                        {respuestas.map((item,key) => (
                            <Option 
                                id={"opt-"+key} 
                                option={item.name} 
                                action={() => {setoptionSelected(item.name); }} 
                                value={item.name}
                                checked={optionSelected === item.name ? true:checked}
                                className={ item.className ? item.className :"" }
                                letter={letters[key]}
                                key={key}
                            />
                        ))}
                    </div>
                    <div className="o-card-footer">
                        {
                            cambiarPalabra === 2 ?
                                <Button type="button" text="Proxima" link={optionSelected} action={ ()=>setCambiarPalabra(1) } />:
                                cargar === 2 ? 
                                <Button type="button" text="Validar" link={optionSelected} action={ ()=>setcargar(1) } />:
                                <Button type="button" text="Ver resultados" link={optionSelected} action={ ()=>setcargar(3) } />
                        }
                    </div>
                </Card>
            </div>
        </Layout>
     );
}
 
export default AskName;