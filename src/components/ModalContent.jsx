import '../styles/ModalContent.css'
import Success from '/img/success.svg'
import Error from '/img/error.svg'
import { Spinner } from './Spinner'

export default function ModalContent({ onClose, info, state, loading }) {

  return (
    <div className='content-modal'>

      <div className="modal">

        {loading ? <Spinner /> : (
          <>
            <img className='modal-img' src={state ? Success : Error } alt="Icono de referencia" />
            <p className='modal-text'>{info}</p>
            <div className='btn-close-modal' onClick={onClose}></div>
          </>
        )}
      </div> 

    </div>
  );
}
