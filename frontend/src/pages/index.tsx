import Table from '@/components/fullcomponent/Table'
import { type FormResponse } from '@/types/Formdata'
import { useEffect, useState } from 'react'

export default function Home() {
    const [finance, setFinance] = useState<FormResponse[]>([])
    useEffect(() => {
        getFinanceData()
    }, [])

    const getFinanceData = () => {
        fetch('http://localhost:8080/finance', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data: FormResponse[]) => setFinance(data))
            .catch((error) => console.error('Error:', error))
    }

    return (
        <>
            <main className="">
                <Table finance={finance} />
            </main>
        </>
    )
}
