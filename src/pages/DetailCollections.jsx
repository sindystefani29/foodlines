import React from "react";
import { useParams } from "react-router-dom";

export default function DetailCollections(){
    let { collectionsId } = useParams();
    return(
        <h1>Collections {collectionsId}</h1>
    )
}