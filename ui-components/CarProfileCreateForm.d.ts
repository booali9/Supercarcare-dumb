import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarProfileCreateFormInputValues = {
    make?: string;
    modelYear?: string;
    trim?: string;
    vinNumber?: string;
    tireSpecifications?: string;
    wheelSpecifications?: string;
};
export declare type CarProfileCreateFormValidationValues = {
    make?: ValidationFunction<string>;
    modelYear?: ValidationFunction<string>;
    trim?: ValidationFunction<string>;
    vinNumber?: ValidationFunction<string>;
    tireSpecifications?: ValidationFunction<string>;
    wheelSpecifications?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarProfileCreateFormOverridesProps = {
    CarProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    modelYear?: PrimitiveOverrideProps<TextFieldProps>;
    trim?: PrimitiveOverrideProps<TextFieldProps>;
    vinNumber?: PrimitiveOverrideProps<TextFieldProps>;
    tireSpecifications?: PrimitiveOverrideProps<TextFieldProps>;
    wheelSpecifications?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: CarProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarProfileCreateFormInputValues) => CarProfileCreateFormInputValues;
    onSuccess?: (fields: CarProfileCreateFormInputValues) => void;
    onError?: (fields: CarProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarProfileCreateFormInputValues) => CarProfileCreateFormInputValues;
    onValidate?: CarProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarProfileCreateForm(props: CarProfileCreateFormProps): React.ReactElement;
