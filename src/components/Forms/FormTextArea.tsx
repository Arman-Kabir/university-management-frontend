"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";


type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
}

const FormTextArea = ({ name, placeholder, label, rows, value }: TextAreaProps) => {
    const { control } = useFormContext();
    return (
        <div className={`flex flex-col w-full`}>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input.TextArea
                        rows={rows}
                        placeholder={placeholder}
                        {...field}
                        defaultValue={value}></Input.TextArea>
                )}
            />
        </div>
    )
}

export default FormTextArea