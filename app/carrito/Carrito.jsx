'use client'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import estilos from './carrito.module.css'
import { devolver } from '@/store/slice'


const page = () => {

    const [total, setTotal] = useState(0)
    const carrito = useSelector(state => state.misValores.miCarrito)
    const dispatch = useDispatch()

    const calcularTotal = useMemo(() => setTotal(carrito.reduce((acumulador, valorActual) =>
        acumulador + valorActual.precio, 0)), [carrito])

    const eliminar = (producto) => {
        dispatch(devolver(producto))
    }

    return (
        <>
            <div>{total}</div>
            <div className={estilos.miCarrito}>
                {carrito.length > 0
                    ?
                    carrito.map((valor, indice) =>
                        <div key={indice}>
                            <img onClick={() => eliminar(valor.producto)} src={valor.imagen} alt="" height="60" width="60" />
                        </div>
                    )
                    :
                    (<div>(No hay productos en el carrito)</div>)
                }

            </div>

        </>
    )
}

export default page