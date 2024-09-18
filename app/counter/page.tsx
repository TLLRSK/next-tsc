'use client';

import Counter from '@/components/Counter';
import { useState } from 'react'

function CounterPage() {
    const [count, setCount] = useState(0);
    return (
        <section>
            <h1 className='text-6xl mb-16'>Counter</h1>
            <Counter />
        </section>
    )
}

export default CounterPage