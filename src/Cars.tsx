import React from 'react';

type CarsType = {
    topCars: TopCars[]
}

type TopCars = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsType) => {
    return (
        <table>
            <th>#</th>
            <th>Manufacturer</th>
            <th>Model</th>
            {
                props.topCars.map((el, index) => {
                    return (
                        <tr>
                            <th>{index+1}</th>
                            <th>{el.manufacturer}</th>
                            <th>{el.model}</th>
                        </tr>
                    )
                })
            }
        </table>
    )
}
