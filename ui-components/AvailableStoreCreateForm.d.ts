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
export declare type AvailableStoreCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
};
export declare type AvailableStoreCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvailableStoreCreateFormOverridesProps = {
    AvailableStoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AvailableStoreCreateFormProps = React.PropsWithChildren<{
    overrides?: AvailableStoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AvailableStoreCreateFormInputValues) => AvailableStoreCreateFormInputValues;
    onSuccess?: (fields: AvailableStoreCreateFormInputValues) => void;
    onError?: (fields: AvailableStoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvailableStoreCreateFormInputValues) => AvailableStoreCreateFormInputValues;
    onValidate?: AvailableStoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function AvailableStoreCreateForm(props: AvailableStoreCreateFormProps): React.ReactElement;
