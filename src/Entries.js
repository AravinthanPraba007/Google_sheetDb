import React from 'react'

export default function Entries({item}) {
    return (
        <tr>
        <td>{item.Sno}</td>
        <td>{item.Name}</td>
        <td>{item.Link}</td>
      </tr>
    )
}
