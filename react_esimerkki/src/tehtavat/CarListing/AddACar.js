import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addcar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState(
        { brand: '', model: '', color: '', fuel: '', year: '', price: '' });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
    }
    const addCar = () => {
        props.saveCar(car);
        handleClose();
    }

    return (
        <div>
            <Button style={{ margin: 10 }} variant="outlined" color="secondary" onClick={handleClickOpen}>
                Add car
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Car</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={e => handleInputChange(e)}
                        label="Brand"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={e => handleInputChange(e)}
                        label="Model"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={e => handleInputChange(e)}
                        label="Color"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={e => handleInputChange(e)}
                        label="Fuel"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={e => handleInputChange(e)}
                        label="Year"

                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={e => handleInputChange(e)}
                        label="Price"

                        fullWidth
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
          </Button>
                    <Button onClick={addCar} color="secondary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}