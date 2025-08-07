import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CustomerProfile } from "./graphql/types";
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
export declare type CustomerProfileUpdateFormInputValues = {
    customerId?: string;
    notificationsEnabled?: boolean;
};
export declare type CustomerProfileUpdateFormValidationValues = {
    customerId?: ValidationFunction<string>;
    notificationsEnabled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerProfileUpdateFormOverridesProps = {
    CustomerProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    notificationsEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CustomerProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customerProfile?: CustomerProfile;
    onSubmit?: (fields: CustomerProfileUpdateFormInputValues) => CustomerProfileUpdateFormInputValues;
    onSuccess?: (fields: CustomerProfileUpdateFormInputValues) => void;
    onError?: (fields: CustomerProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerProfileUpdateFormInputValues) => CustomerProfileUpdateFormInputValues;
    onValidate?: CustomerProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerProfileUpdateForm(props: CustomerProfileUpdateFormProps): React.ReactElement;
