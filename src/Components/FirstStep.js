import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';


const FirstStep = () => {
    const {setStep,userData,setUserData} = useContext(multiStepContext)
    return (
        <div>
            <div>

                <TextField label="First Name" value={userData['firstname']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"firstname":e.target.value})}  />
            </div>
            <div>

                <TextField label="Last Name" value={userData['lastname']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"lastname":e.target.value})}  />
            </div>
            <div>

                <TextField label="Contact Number" value={userData['contact']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"contact":e.target.value})}  />
            </div>
            <div>

                <Button variant='contained' color='primary'onClick={()=>setStep(2)}>Next</Button>
            </div>
        </div>
    )
}

export default FirstStep