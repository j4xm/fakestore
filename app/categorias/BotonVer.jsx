'use client'
import { useDispatch } from "react-redux"
import Imagen from "../componentes/Imagen"
import { guardarCategoria } from "@/store/slice"
import { useRouter } from "next/navigation"


const BotonVer = ({ valor }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const visualizar = (e) => {
        dispatch(guardarCategoria(e))
        router.push('/portipo')
    }
    return (
        <>
            <div onClick={() => visualizar(valor.categoria)}>
                <Imagen

                    valor={valor}
                />
            </div>

        </>
    )
}

export default BotonVer