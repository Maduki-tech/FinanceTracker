import Dropdown from '@/components/fullcomponent/Dropdown'
import { type Person } from '@/components/fullcomponent/Person'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InputMoney from '@/components/ui/inputMoney'
import { type FormResponse } from '@/types/Formdata'
import React, { type FormEvent, useState } from 'react'

export default function Upload() {
    const [category, setCategory] = useState<Person>({
        id: 1,
        name: 'Home',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    })

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        // get the form data
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const money = formData.get('money')?.toString().split('$')[1]

        if (name === null || money === null) {
            return
        }

        // Building the Response
        const data: FormResponse = {
            name: name as string,
            amount: parseFloat(money!),
            date: new Date(),
            currency: 'USD',
            description: 'This is a description',
        }

        fetch('http://localhost:8080/finance/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error))

        console.log(data)
    }

    return (
        <>
            <main className="p-8">
                <form className="flex gap-4" onSubmit={handleSubmit}>
                    <div className="w-1/6">
                        <Input name="name" placeholder="What did you buy?" />
                    </div>
                    <div className="w-1/8">
                        <InputMoney name="money" />
                    </div>
                    <Dropdown category={category} setCategory={setCategory} />
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-600"
                        type="submit"
                    >
                        Upload
                    </Button>
                </form>
            </main>
        </>
    )
}
