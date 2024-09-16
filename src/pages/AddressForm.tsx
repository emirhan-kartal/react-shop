import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Box, Grid } from "@mui/material";
import TextFieldWithHelperText from "../components/TextFieldWithHelperText";
import { useNavigate } from "react-router-dom";
import FormHeader from "../components/FormHeader";

interface FormValues {
    name: string;
    surname: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    town: string;
    postalCode: string;
}

const AddressForm: React.FC = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            name: "",
            surname: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            town: "",
            postalCode: "",
        },
    });
    const [errors, setErrors] = React.useState({} as FormValues);
    const navigate = useNavigate();
    const onSubmit = (data: FormValues) => {
        if (Object.values(data).every((value) => value !== "")) {
            alert("Form submitted successfully");
            navigate("/cart/payment");
        } else {
            Object.values(data).forEach((value, index) => {
                if (value === "") {
                    setErrors((prev) => ({
                        ...prev,
                        [Object.keys(data)[index]]: true,
                    }));
                }
            });
            alert("Please fill all the fields");
        }

        console.log(data);
    };

    return (
        <Box>
            <FormHeader activeStep={0} title="Address Info" />
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 2, p: 2, width: "100%" }}
            >
                <Grid container spacing={2} width={"60%"} mx={"auto"}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.town}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="surname"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Surname"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.surname}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="address1"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Address 1"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.address1}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="address2"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Address 2"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.address2}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="city"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.city}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="state"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.state}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="town"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Town"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.town}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="postalCode"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Postal Code"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.town}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Confirm
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default AddressForm;
