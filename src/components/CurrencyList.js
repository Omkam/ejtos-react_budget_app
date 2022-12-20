import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option value="Dollar" name="dollar">$Dollar</option>
                        <option value="Pound" name="pound">£Pound</option>
                        <option value="Euro" name="euro">€Euro</option>
                        <option value="Rupee" name="rupee">₹ Rupee</option>
                       
                  </select>

                    

                    
                </div>
                </div>

        </div>
    );
};

export default CurrencyList;
