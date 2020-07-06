import React,{useState} from 'react'
import Input from '../Form/InputGroup'
import {Modal} from 'react-bootstrap'

const SubmitTask = ({modal, toggle}) => {
const [repo, setRepo] = useState('')
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <h1> Sumit your task</h1>
                <Input
              type={"url"}
              label={"Github link"}
              name={"repo url"}
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
            />
            </Modal>
        </>
    )
}


export default SubmitTask;