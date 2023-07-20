import Link from "next/link"

const page = () => {
    return (
        <>
            Página principal
            <div>
                <Link href='/categorias'><button>Categorías</button></Link>
                <Link href='/productos'><button>Productos</button></Link>
            </div>

        </>
    )
}

export default page