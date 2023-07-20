'use client'

import Imagen from "@/app/componentes/Imagen"
import { comprar } from "@/store/slice"
import Link from "next/link"
import { useDispatch } from "react-redux"

const FichaIndividual = ({ datos }) => {

    const dispatch = useDispatch()
    const adquirir = (datos) => {
        dispatch(comprar(
            {
                producto: datos.id,
                precio: datos.price,
                imagen: datos.image
            }
        ))
    }

    return (
        <>
            <div>{datos.title}</div>
            <div>{datos.price}</div>
            <div>{datos.description}</div>
            <div>{datos.category}</div>
            <div>{datos.rating.rate} ({datos.rating.count}) </div>
            <div>
                <Imagen valor={datos} />
            </div>
            <div>
                <button onClick={() => adquirir(datos)}>Comprar</button>
                <Link href="/productos"></Link><button>Volver</button>
            </div>

        </>
    )
}

export default FichaIndividual