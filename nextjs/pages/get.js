import connectDB from "../lib/mondodb";
import Codigo from "../models/Codigo";

export const getServerSideProps = async () => {
    try {
        await connectDB();
        const codigo = await Codigo.findOne({codigo:'B0001'});
        return {
            props: {
                codigo: JSON.parse(JSON.stringify(codigo)),
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};

export default function Get({codigo}) {
    return (
        <div key={codigo._id}>
            <h1>{codigo.codigo}</h1>
            <p>{codigo.segunda_linha}</p>
            <p>{codigo.componente}</p>
        </div>
    )
}