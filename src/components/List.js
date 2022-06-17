import React from 'react'

const List = ({state}) => {

 
    return(
        <table border='1' className='table-one'>
            <thead>
                <tr>
                    <th>Код</th>
                    <th>Исследование</th>
                    <th>Биомат</th>
                    <th>Тип усл.</th>
                </tr>
            </thead>
            <tbody>
                {state.map(state =>
                    <tr key={state.code}>
                        <td>{state.code}</td>
                        <td>{state.name}</td>
                        <td></td>
                        <td>Исслед</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default List