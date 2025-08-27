import { useRef, useState, type FormEvent, type ChangeEvent } from 'react'
import type { Form } from './FormWithState'

function FormDataComponent() {

    const formRef = useRef(null)

    const [form, setForm] = useState<Form>({
        name: '',
        email: '',
        phone: '',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) return
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            const redColor = Boolean(formData.get('red'))
            const blueColor = Boolean(formData.get('blue'))
            console.log({
                ...form,
                redColor,
                blueColor
            })
        }
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setForm({
        ...form,
        [e.target.name]: e.target.value
    })

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-[50px] text-white">
            <input
                type="text"
                placeholder="Nombre"
                name="name"
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                value={form.name}
                onChange={handleOnChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300  placeholder-gray-500 shadow-sm hover:shadow-md"
                value={form.email}
                onChange={handleOnChange}
            />
            <input
                type="tel"
                placeholder="Teléfono"
                name="phone"
                value={form.phone}
                onChange={handleOnChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="red"
                    name="red"
                    value="red"
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                />
                <label
                    htmlFor="red"
                    className="ml-2 text-sm font-medium flex items-center"
                >
                    <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    Rojo
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="blue"
                    name="blue"
                    value="super-azul"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                    htmlFor="blue"
                    className="ml-2 text-sm font-medium flex items-center"
                >
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                    Azul
                </label>
            </div>
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