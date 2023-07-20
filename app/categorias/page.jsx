import BotonVer from './BotonVer';
import estilos from './estilos.module.css'
const page = async () => {

    const categorias = await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json());

    const productos = await Promise.all(
        categorias.map(async categoria => {
            const producto = await fetch(`https://fakestoreapi.com/products/category/${categoria}?limit=1`)
                .then(res => res.json());

            return {
                image: producto[0].image,
                categoria
            }
        })
    )

    return (
        <>
            <div className={estilos.columnas}>
                {categorias.map((valor, indice) =>
                    <div key={indice} className={`${estilos.columna} ${estilos.categoria}`}>
                        {valor}
                    </div>
                )}
            </div>
            <div className={estilos.columnas}>
                {productos.map((valor, indice) =>
                    <div className={estilos.columna}>
                        <BotonVer valor={valor} />
                    </div>
                )}
            </div>
        </>
    )
}

export default page