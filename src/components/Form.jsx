import React, { useState } from 'react'
import { Formik } from 'formik'

const Form = ({setUserData}) => {

    const [successMessage, setSuccessMessage] = useState(false)

    return (
        <Formik 
            initialValues={{
                name: '',
                email: '',
                address: ''
            }}

            validate={(valores)=>{
                let errors = {}
                //validate name
                if(!valores.name){
                    errors.name = 'Por favor ingresa un nombre.'
                }
                else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                    errors.name = 'El nombre solo puede contener letras y espacios.'
                }
                //validate email
                if(!valores.email){
                    errors.email = 'Por favor ingresa un correo.'
                }
                else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                    errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                }
                //validate address
                if(!valores.address){
                    errors.address = 'Por favor ingresa una direccion.'
                }
                else if(!/^[a-zA-Z0-9\d\s\-\,\#\.\+]+$/.test(valores.address)){
                    errors.address = 'La direccion solo puede contener letras, numeros, puntos, guiones y numeral.'
                }

                return errors
            }}
            onSubmit={(valores)=>{
                setUserData(valores)
                setSuccessMessage(true)
                setTimeout(()=>setSuccessMessage(false),3000)
            }}
        >
            {({handleSubmit,touched,errors,values,handleChange,handleBlur})=> (<form className='p-5 flex shadow-xl flex-col m-auto gap-y-2 sm:w-1/2 lg:w-1/4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-y-2'>
                    <label className='font-fredoka text-mostaza' htmlFor="name">Nombre:</label>
                    <input className='border-2 p-2 font-nunito' 
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='Nombre' 
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <p className='text-error font-nunito'>{errors.name}</p>}
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className='font-fredoka text-mostaza' htmlFor="email">Correo:</label>
                    <input className='border-2 p-2 font-nunito' 
                        type="text" 
                        id='email' 
                        name='email' 
                        placeholder='corre@correo.com' 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <p className='text-error font-nunito'>{errors.email}</p>}
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className='font-fredoka text-mostaza' htmlFor="address">Direccion:</label>
                    <input className='border-2 p-2 font-nunito' 
                        type="text" 
                        id='address' 
                        name='address' 
                        placeholder='Direccion' 
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.address && errors.address && <p className='text-error font-nunito'>{errors.address}</p>}
                </div>
                <button className='bg-mostaza font-fredoka rounded-full p-2 w-1/4 m-auto' type='submit'>Enviar</button>
                {successMessage && <p className='text-success font-nunito text-center'>Formulario enviado con exito</p>}
            </form>)}
        </Formik>
    )
}

export default Form