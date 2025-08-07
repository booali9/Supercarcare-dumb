import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CarProfile } from "./graphql/types";
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
export declare type CarProfileUpdateFormInputValues = {
    make?: string;
    modelYear?: string;
    trim?: string;
    vinNumber?: string;
    tireSpecifications?: string;
    wheelSpecifications?: string;
};
export declare type CarProfileUpdateFormValidationValues = {
    make?: ValidationFunction<string>;
    modelYear?: ValidationFunction<string>;
    trim?: ValidationFunction<string>;
    vinNumber?: ValidationFunction<string>;
    tireSpecifications?: ValidationFunction<string>;
    wheelSpecifications?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarProfileUpdateFormOverridesProps = {
    CarProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    modelYear?: PrimitiveOverrideProps<TextFieldProps>;
    trim?: PrimitiveOverrideProps<TextFieldProps>;
    vinNumber?: PrimitiveOverrideProps<TextFieldProps>;
    tireSpecifications?: PrimitiveOverrideProps<TextFieldProps>;
    wheelSpecifications?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carProfile?: CarProfile;
    onSubmit?: (fields: CarProfileUpdateFormInputValues) => CarProfileUpdateFormInputValues;
    onSuccess?: (fields: CarProfileUpdateFormInputValues) => void;
    onError?: (fields: CarProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarProfileUpdateFormInputValues) => CarProfileUpdateFormInputValues;
    onValidate?: CarProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarProfileUpdateForm(props: CarProfileUpdateFormProps): React.ReactElement;
