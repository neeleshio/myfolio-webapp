import React from 'react'
import { useDispatch } from 'react-redux'
import { handleOpenModal } from '../../redux/Modal/ModalReducer'
import Modal from '../../components/Modal'

function useModal(title: string, button: string) {
    const dispatch = useDispatch()

    dispatch(handleOpenModal({ value: true, title: title, button: button }))
}

export default useModal
