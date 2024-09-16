import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Box, Grid } from "@mui/material";
import TextFieldWithHelperText from "../components/TextFieldWithHelperText";
import FormHeader from "../components/FormHeader";

interface FormValues {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    cvv: string;
}

const CreditCardForm: React.FC = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            cardNumber: "",
            cardholderName: "",
            expirationDate: "",
            cvv: "",
        },
    });
    const [errors, setErrors] = React.useState({} as FormValues);

    const onSubmit = (data: FormValues) => {
        if (Object.values(data).every((value) => value !== "")) {
            alert("Form submitted successfully");
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
            <FormHeader activeStep={1} title="Payment Info" />
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ my:4, width: "100%" }}
            >
                <Grid container spacing={2} width={"60%"} mx={"auto"}>
                    <Grid item xs={12}>
                        <Controller
                            name="cardNumber"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Card Number"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.cardNumber}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="cardholderName"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Cardholder Name"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.cardholderName}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="expirationDate"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="Expiration Date (MM/YY)"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.expirationDate}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="cvv"
                            control={control}
                            render={({ field }) => (
                                <TextFieldWithHelperText
                                    {...field}
                                    label="CVV"
                                    variant="outlined"
                                    fullWidth
                                    error={errors.cvv}
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

export default CreditCardForm;
