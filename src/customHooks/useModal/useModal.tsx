import React from 'react'
import { useDispatch } from 'react-redux'
import { handleOpenModal } from '../../redux/Modal/ModalReducer'
import Modal from '../../components/Modal'

function useModal(props: {}) {
    const dispatch = useDispatch()

    dispatch(handleOpenModal(props))
}

export default useModal
