import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination>
            { pages.map((page, idx) => 
                <Pagination.Item 
                    key={idx}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages;