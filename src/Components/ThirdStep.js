import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';

const ThirdStep = () => {
    const { setStep,userData,setUserData,submiData } = useContext(multiStepContext)

    return (
        <div>
            <div>

                <TextField label="city" value={userData['city']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"city":e.target.value})}  />
            </div>
            <div>

                <TextField label="Landmark" value={userData['landmark']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"landmark":e.target.value})}  />
            </div>
            <div>

                <TextField label="Postal Code" value={userData['postcode']} variant='outlined' color="secondary" margin='normal' onChange={(e)=>setUserData({...userData,"postcode":e.target.value})}  />
            </div>
            <div>
                <Button variant='contained' color='secondary'onClick={()=>setStep(2)}>Back</Button>
                <Button variant='contained' color='primary'onClick={submiData}>Submit</Button>
            </div>
        </div>
    )
}

export default ThirdStep