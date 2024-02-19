import React, { type ChangeEvent, useState } from 'react'
import { Input } from './input'

export default function InputMoney({ name }: { name: string }) {
    const [value, setValue] = useState('') // Holds the numeric value as a string
    const [displayValue, setDisplayValue] = useState('') // Holds the value to display in the input

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Update the value as the user types
        setValue(e.target.value)
        setDisplayValue(e.target.value)
    }

    const handleInputBlur = () => {
        // Format the value on blur
        const value = displayValue.replace(/,/g, '.')
        const numericValue = parseFloat(value)
        if (!isNaN(numericValue)) {
            const formatted = numericValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'USD',
            })
            setDisplayValue(formatted)
        }
    }

    const handleInputFocus = () => {
        // Show plain number on focus for editing
        setDisplayValue(value)
    }
    return (
        <Input
            placeholder="How much did it Cost?"
            name={name}
            type="text" // Use text type to allow any character
            value={displayValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
        />
    )
}
