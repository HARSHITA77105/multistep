import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';

const SecondStep = () => {
    const { setStep,userData,setUserData } = useContext(multiStepContext)
    return (
        <div>
            <div>

                <TextField label="Email" value={userData['email']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"email":e.target.value})}  />
            </div>
            <div>

                <TextField label="Country" value={userData['country']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"country":e.target.value})}  />
            </div>
            <div>

                <TextField label="District" value={userData['district']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"district":e.target.value})}  />
            </div>
            <div>
                <Button variant='contained' color='secondary'onClick={()=>setStep(1)}>Back</Button>
                <Button variant='contained' color='primary'onClick={()=>setStep(3)}>Next</Button>

            </div>
        </div>
    )
}

export default SecondStep