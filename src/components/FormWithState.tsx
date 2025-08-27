import { useState, type FormEvent, type ChangeEvent } from 'react'

interface Form {
    name: string;
    email: string;
    phone: string;
}

function FormDataComponent() {

    const [form, setForm] = useState<Form>({
        name: '',
        email: '',
        phone: '',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) return
        console.log(form)
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setForm({
        ...form,
        [e.target.name]: e.target.value
    })

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-[50px] text-white">
            <input
                type="text"
                placeholder="Nombre"
                name="name"
                value={form.name}
                onChange={handleOnChange}
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleOnChange}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300  placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <input
                type="tel"
                placeholder="Teléfono"
                name="phone"
                value={form.phone}
                onChange={handleOnChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                Enviar
            </button>
        </form>
    )
}

export default FormDataComponent