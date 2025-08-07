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
export declare type AvailableServiceCreateFormInputValues = {
    serviceName?: string;
    storeId?: string;
    inventoryRequired?: boolean;
};
export declare type AvailableServiceCreateFormValidationValues = {
    serviceName?: ValidationFunction<string>;
    storeId?: ValidationFunction<string>;
    inventoryRequired?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvailableServiceCreateFormOverridesProps = {
    AvailableServiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceName?: PrimitiveOverrideProps<TextFieldProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    inventoryRequired?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AvailableServiceCreateFormProps = React.PropsWithChildren<{
    overrides?: AvailableServiceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AvailableServiceCreateFormInputValues) => AvailableServiceCreateFormInputValues;
    onSuccess?: (fields: AvailableServiceCreateFormInputValues) => void;
    onError?: (fields: AvailableServiceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvailableServiceCreateFormInputValues) => AvailableServiceCreateFormInputValues;
    onValidate?: AvailableServiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function AvailableServiceCreateForm(props: AvailableServiceCreateFormProps): React.ReactElement;
