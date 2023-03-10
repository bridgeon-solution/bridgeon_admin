import React from 'react'
import { MantineProvider, Table as TableComponent } from '@mantine/core'
import Select from '../Select/Select';

const Table = ({ elements, titles, theme, select, onSelect }) => {

    const rows = elements.map((element,index) => (
        <tr key={index}>
            <td>{element.name}</td>
            <td>{element.batch}</td>
            <td>{element.course}</td>
            {select && <td><Select size={"xs"} data={element?.status} defaultValue={element?.status[0]} theme={'dark'} placeholder={'status'} onChange={(value) => onSelect(element._id, value)} /></td>}

        </tr>
    ));
    const columns = titles.map((element, index) => (
        <th key={index}>{element}</th>
    ))
    return (



        <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
            <TableComponent >
                <thead>
                    <tr>

                        {columns}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </TableComponent>
        </MantineProvider>
    )
}

export default Table