import React, { useState, useEffect, startTransition } from 'react';
import { baseService } from '../../api/baseService'
import { DataGrid } from '@mui/x-data-grid'

function CustomerList() {
    const [customers, setcustomers] = useState([])
    const [loading, setloading] = useState(true)
    const loadCustomers = () => {
        baseService.getAll("customer")
            .then(res => {
                setcustomers(res.data)
                setloading(false)
            })
    }
    useEffect(() => {
        loadCustomers();
    }, [])

    const columns = [
        {
            field: 'id',
            headerName: "ID",
            flex: 0.2
        },
        {
            field: 'nameSurname',
            headerName: "Name Surname",
            flex: 0.2
        },
        {
            field: 'email',
            headerName: "Mail",
            flex: 0.2
        },
        {
            field: "delete",
            header: "Delete",
            flex: 0.2,
            renderCell: (params) => {
                return <Button color="error" variant="contained" onClick={() => deleteCustomer(params.row.id)}>Delete</Button>
            }
        }
    ]
    const deleteCustomer = (id) => {
        baseService.delete("Customer", id)
            .then(res => {
                loadCustomers()
            })
    }

    return <>
        <div>
            <DataGrid
                rows={customers}
                columns={columns}
                loading={loading}
                components={{
                    NoRowsOverlay: () => <div>Veri bulunamadı.</div>,
                    LoadingOverlay: () => <div>Yükleniyor...</div>,
                }}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    </>
}

export default CustomerList