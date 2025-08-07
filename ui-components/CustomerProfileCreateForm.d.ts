import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CustomerProfileCreateFormInputValues = {
    customerId?: string;
    notificationsEnabled?: boolean;
};
export declare type CustomerProfileCreateFormValidationValues = {
    customerId?: ValidationFunction<string>;
    notificationsEnabled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerProfileCreateFormOverridesProps = {
    CustomerProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CustomerProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerProfileCreateFormInputValues) => CustomerProfileCreateFormInputValues;
    onSuccess?: (fields: CustomerProfileCreateFormInputValues) => void;
    onError?: (fields: CustomerProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerProfileCreateFormInputValues) => CustomerProfileCreateFormInputValues;
    onValidate?: CustomerProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerProfileCreateForm(props: CustomerProfileCreateFormProps): React.ReactElement;
