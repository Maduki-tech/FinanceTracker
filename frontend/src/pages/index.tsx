// TODO: WRITE A TEST FOR THIS PAGE
import Dropdown from '@/components/fullcomponent/Dropdown'
import Navigation from '@/components/fullcomponent/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InputMoney from '@/components/ui/inputMoney'
import { type FormResponse } from '@/types/Formdata'
import Head from 'next/head'
import { type FormEvent, useState } from 'react'

export default function Home() {
    const [category, setCategory] = useState('')
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        // get the form data
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const money = formData.get('money')

        if (name === null || money === null) {
            return
        }

        // Building the Response
        const data: FormResponse = {
            name: name as string,
            money: money as string,
            category: category,
        }
        console.log(data)
    }

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />

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