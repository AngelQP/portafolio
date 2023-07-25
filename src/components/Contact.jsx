import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import emailjs from '@emailjs/browser';

import '../styles/Contact.css';
import { TitleSection, Title, TitleParagraph, LinkRefSubmit, MainContainer } from './ContainerStyles'

export const Contact = () => {

  // Abrir el modal
  const [showModal, setShowModal] = useState(false);

  // Para que haga el envio del formulario
  const [send, setSend] = useState(null);

  // Para la carga del envío
  const [loading, setLoading] = useState(true);

  // El estado de la respuesta si es success o error
  const [state, setState] = useState(false);

  // Mensaje que se imprime
  const [info, setInfo] = useState(null);

  // Datos del formulario
  const [dataForm, setDataForm] = useState({});

  const {register, setValue, handleSubmit} = useForm();

  const onSubmit = handleSubmit((data) => {
    setDataForm(data);
    setSend(true);
    setShowModal(true);
  });

  const resetForm = () => {
    setValue('to_name','');
    setValue('email','');
    setValue('message','');
  }
 
  useEffect(() => {

    function sendToForm() {
      
      // emailjs.send('service_xwkgkby','contact_form',dataForm,'75HNihRMS4gABeXN1')
      emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,dataForm,import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        setInfo('Correo enviado exitosamente')
        setState(true);
      })
      .catch(() => {
        setInfo('Ups! Hubo un problema, vuelve a intentarlo')
        setState(false);
      })
      .finally(() => {
        setLoading(false);
      })
  
      resetForm();
      setSend(true);
    } 

    if(send){
      sendToForm();
      console.log("entre")
      setSend(false);
    }

  }, [send])


  return (
    <section id="contact" className="contact">

      <MainContainer>

        <TitleSection $normal>
          <Title>contacto</Title>
          <TitleParagraph>
            No dude en ponerse en contacto conmigo enviando el siguiente formulario y me pondré en contacto con usted lo antes posible.
          </TitleParagraph>
        </TitleSection>

        <div className="contact__form-container">

          <form onSubmit={onSubmit} className='contact__form' >

            <div className="contact__form-field">
              <label className='contact__form-label' htmlFor="name">Nombre</label>
              <input required placeholder='Ingresa tu nombre' type="text" name="name" id="name" className='contact__form-input' {...register("to_name")} />
            </div>
            <div className="contact__form-field">
              <label className='contact__form-label' htmlFor="email">Email</label>
              <input required placeholder='Ingresa tu Correo' type="email" name="email" id="email" className='contact__form-input' {...register("email")} />
            </div>
            <div className="contact__form-field">
              <label className='contact__form-label' htmlFor="message">Mensaje</label>
              <textarea required cols="30" rows="10" className='contact__form-input' placeholder='Ingresa tu mensaje' name='message' id='message' {...register("message")} ></textarea>
            </div>

            <LinkRefSubmit as='button' type='submit'>Enviar</LinkRefSubmit>

          </form>

        </div>

      </MainContainer>


      {showModal && createPortal(
        <ModalContent info={info} state={state} loading={loading} onClose={() => setShowModal(false)} />,
        document.body
      )}

    </section>
  )
}
