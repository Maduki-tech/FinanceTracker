import { type FormResponse } from '@/types/Formdata'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Table({ finance }: { finance: FormResponse[] }) {
    const router = useRouter()

    const [sortedFinance, setSortedFinance] = useState<FormResponse[]>([])

    useEffect(() => {
        setSortedFinance(finance)
    }, [finance])

    const sortFinance = (type: string) => {
        console.log('sort', type, sortedFinance)

        const sorted = [...sortedFinance].sort((a, b) => {
            if (type === 'date') {
                console.log(a.date, b.date)
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            }
            return 0
        })
        setSortedFinance(sorted)
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="mx-auto max-w-7xl">
                <div className="bg-gray-900 py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-white">
                                    Expenses
                                </h1>
                                <p className="mt-2 text-sm text-gray-300">
                                    All expenses are listed here you can add,
                                    edit and delete them
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <Button
                                    type="button"
                                    onClick={() => router.push('/Upload')}
                                    className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Add Expense
                                </Button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                                >
                                                    Amount
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                                                >
                                                    Currency
                                                </th>
                                                <th
                                                    onClick={() =>
                                                        sortFinance('date')
                                                    }
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left flex text-sm font-semibold text-white"
                                                >
                                                    Date
                                                    <span className="ml-1">
                                                        <svg
                                                            className="h-5 w-5 text-gray-300"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M12.707 5.293a1 1 0 00-1.414 1.414L10 7.414V17a1 1 0 11-2 0V7.414l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z"
                                                            />
                                                        </svg>

                                                        <span className="sr-only">
                                                            Sort ascending
                                                        </span>
                                                    </span>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                                >
                                                    <span className="sr-only">
                                                        Edit
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            {sortedFinance.map(
                                                (finance, id) => (
                                                    <tr key={id}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                            {finance.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                            {
                                                                finance.description
                                                            }
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                            {finance.amount}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                            {finance.currency}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                            {finance.date.toLocaleString()}
                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                            <a
                                                                href="#"
                                                                className="text-indigo-400 hover:text-indigo-300"
                                                            >
                                                                Edit
                                                                <span className="sr-only">
                                                                    ,{' '}
                                                                    {
                                                                        finance.name
                                                                    }
                                                                </span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
