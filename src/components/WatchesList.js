import React from 'react';
import Watches from './Watches';

export default function WatchesList({watches, onDelete}) {
    const elements = watches.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <Watches
                    name={item.name}
                    timezone={item.timezone}
                    onDelete={() => onDelete(item.id)}
                />
            </li>
        )
    })

    return (
        <ul className='watches-list'>
            {elements}
        </ul>

    )
}