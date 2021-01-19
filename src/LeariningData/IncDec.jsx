import React, { useState } from 'react'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import Button from '@material-ui/core/Button';

const IncDec = () => {
const [put, setValue] = useState(0);

const IncNum=()=>{
    setValue(put+1);
};

const decNum =()=>{
    if (put>0){
   setValue(put-1);
    }else{alert('sorry')
     }
};
    
    return (
        <div>
        <div className="mt-5 container text-center ">
            <h1>{put}</h1>
            <div className="text-success">
                <Button color="secondary" variant="contained" onClick={IncNum} >INC</Button>

                <Button variant="outlined" color="primary" onClick={decNum}  ><AddSharpIcon/></Button>
            </div>


        </div>
            
        </div>
    )
}
 export default IncDec;
