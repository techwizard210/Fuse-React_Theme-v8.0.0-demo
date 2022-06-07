import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

let renderCount = 0;

const options = [
    {
        value: "chocolate",
        label: "Chocolate"
    },
    {
        value: "strawberry",
        label: "Strawberry"
    },
    {
        value: "vanilla",
        label: "Vanilla"
    }
];

const defaultValues = {
    Native     : "",
    TextField  : "",
    Select     : "",
    Autocomplete: [],
    Checkbox   : false,
    switch     : false,
    RadioGroup : ""
};

function SimpleFormExample()
{
    const {
        handleSubmit,
        register,
        reset,
        control,
        watch
    } = useForm({
        defaultValues,
        mode: "onChange"
    });
    renderCount++;

    const data = watch();

    return (
        <div className="flex w-full max-w-screen-md justify-start items-start">
            <form className="w-1/2" onSubmit={handleSubmit(data => console.info(data))}>
                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">Native Input:</Typography>
                    <input className="border-1 outline-none rounded-8 p-8" {...register('Native')} />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI Checkbox</Typography>
                    <Controller
                        name="Checkbox"
                        type="checkbox"
                        control={control}
                        defaultValue={false}
                        render={({ field: {onChange, value} }) => (
                            <Checkbox
                                checked={value}
                                onChange={ev => onChange(ev.target.checked)}
                            />
                        )}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">Radio Group</Typography>
                    <Controller
                        render={({ field }) => (
                            <RadioGroup {...field} aria-label="gender" name="gender1">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio/>}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio/>}
                                    label="Male"
                                />
                            </RadioGroup>
                        )}
                        name="RadioGroup"
                        control={control}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI TextField</Typography>
                    <Controller render={({ field }) => <TextField { ...field } variant="outlined"/>} name="TextField" control={control}/>
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI Select</Typography>
                    <Controller
                        render={({ field }) => (
                            <Select {...field} variant="outlined">
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        )}
                        name="Select"
                        control={control}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI Switch</Typography>
                    <Controller
                        name="switch"
                        type="checkbox"
                        control={control}
                        defaultValue={false}
                        render={({ field: {onChange, value} }) => (
                            <Switch
                                checked={value}
                                onChange={ev => onChange(ev.target.checked)}
                            />
                        )}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">Autocomplete</Typography>
                    <Controller
                        name="Autocomplete"
                        control={control}
                        defaultValue={[]}
                        render={({ field: { onChange, value } }) => (
                            <Autocomplete
                                className="mt-8 mb-16"
                                multiple
                                freeSolo
                                options={options}
                                value={value}
                                onChange={(event, newValue) => {
                                    onChange(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Select multiple tags"
                                        label="Tags"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                )}
                            />)}
                    />
                </div>

                <div className="flex my-48 items-center">

                    <Button className="mx-8" variant="contained" color="secondary" type="submit">Submit</Button>

                    <Button
                        className="mx-8"
                        type="button"
                        onClick={() => {
                            reset(defaultValues);
                        }}
                    >
                        Reset Form
                    </Button>

                </div>

            </form>

            <div className="w-1/2 my-48 p-24">

                <pre className="language-js p-24 w-400">
                    {JSON.stringify(data, null, 2)}
                </pre>

                <Typography className="mt-16 font-medium text-12 italic" color="text.secondary">Render Count: {renderCount}</Typography>
            </div>
        </div>
    );
}

export default SimpleFormExample;
