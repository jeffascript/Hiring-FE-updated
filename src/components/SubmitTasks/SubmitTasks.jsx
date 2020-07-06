import React,{useState} from 'react'
import Input from '../Form/InputGroup'
import { Button, Modal } from 'reactstrap'

const SubmitTasks = ({modal, toggle, taskId}) => {
const [repo, setRepo] = useState('')
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <h1> Sumit your task</h1>
                <Input
              type={"url"}
              label={"repo url"}
              name={"repo url"}
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
            />
             <Button type="primary" className="next--color" onClick={toggle}>next</Button>
            </Modal>
        </>
    )
}


export default SubmitTasks;