// @ts-ignore
import React from 'react';
import {useParams} from "react-router-dom";

function Loged() {
    const {login} = useParams();
    return<>
        <div>
        <h2>logged </h2>
            Здраствуйте {login}
        </div>
    </>;
}
export default Loged;