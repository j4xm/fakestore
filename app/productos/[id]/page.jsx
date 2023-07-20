import FichaIndividual from "./fichaIndividual"


const cargarDatos = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' })
        .then(res => res.json())
}

const page = async ({ params }) => {

    const { id } = params
    const datos = await cargarDatos(id)

    return (
        <>
            <FichaIndividual datos={datos} />
        </>
    )
}

export default page