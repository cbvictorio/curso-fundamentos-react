import { useRef, type FormEvent } from 'react'

function FormDataComponent() {

    const formRef = useRef(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            const entries = formData.entries()
            const formFields = Object.fromEntries(entries)
            console.log(formFields)
        }
    };


    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-[50px] text-white">
            <input
                type="text"
                placeholder="Nombre"
                name="name"
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300  placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <input
                type="tel"
                placeholder="Teléfono"
                name="telephone"
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