const Category = ({ params }: { params: { id: string } }) => {
    return (
        <h1>Parametro: {params.id}</h1>
    )
}

export default Category 