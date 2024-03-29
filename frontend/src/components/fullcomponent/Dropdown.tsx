/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { type Person } from './Person'

export const tag = [
    {
        id: 1,
        name: 'Home',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
        id: 2,
        name: 'Shopping',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Groceries',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({
    category,
    setCategory,
}: {
    category: Person
    setCategory: (category: Person) => void
}) {
    const [query, setQuery] = useState('')


    const filteredPeople =
        query === ''
            ? tag
            : tag.filter((tag) => {
                  return tag.name.toLowerCase().includes(query.toLowerCase())
              })

    return (
        <Combobox
            as="div"
            className="flex items-center gap-2"
            value={category}
            onChange={setCategory}
        >
            <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
                Assigned to
            </Combobox.Label>
            <div className="relative">
                <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(tag: Person) => tag?.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredPeople.map((tag: Person) => (
                            <Combobox.Option
                                key={tag.id}
                                value={tag}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-900',
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <div className="flex items-center">
                                            <img
                                                src={tag.imageUrl}
                                                alt=""
                                                className="h-6 w-6 flex-shrink-0 rounded-full"
                                            />
                                            <span
                                                className={classNames(
                                                    'ml-3 truncate',
                                                    selected
                                                        ? 'font-semibold'
                                                        : 'font-normal',
                                                )}
                                            >
                                                {tag.name}
                                            </span>
                                        </div>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active
                                                        ? 'text-white'
                                                        : 'text-indigo-600',
                                                )}
                                            >
                                                <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}
