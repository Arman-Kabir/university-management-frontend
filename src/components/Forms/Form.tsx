"use client";

import { ReactElement, ReactNode, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";



type FormConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any;
};

type FormProps = {
    children?: ReactElement | ReactNode;
    SubmitHandler: SubmitHandler<any>
} & FormConfig;

const Form = ({ children, submitHandler, defaultValues, resolver }: FormProps) => {

    const formConfig: FormConfig = {};
    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
    if (!!resolver) formConfig["resolver"] = resolver;

    const methods = useForm<FormProps>(formConfig);
    const { handleSubmit, reset } = methods;


    const onSubmit = (data: any) => {
        submitHandler(data);
        reset();
    };

    useEffect(() => reset(defaultValues), [defaultValues,reset,methods])

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default Form