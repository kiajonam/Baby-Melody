import Button from "../../components/Button/Button";

import { useParams } from "react-router-dom";

export default function Category(){
    const {slug} = useParams();
    console.log(slug)
    return(
        <>
            <h1>{slug}</h1>
            <Button />
        </>
    )
}