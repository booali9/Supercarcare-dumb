import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AvailableService } from "./graphql/types";
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
export declare type AvailableServiceUpdateFormInputValues = {
    serviceName?: string;
    storeId?: string;
    inventoryRequired?: boolean;
};
export declare type AvailableServiceUpdateFormValidationValues = {
    serviceName?: ValidationFunction<string>;
    storeId?: ValidationFunction<string>;
    inventoryRequired?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvailableServiceUpdateFormOverridesProps = {
    AvailableServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceName?: PrimitiveOverrideProps<TextFieldProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    inventoryRequired?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AvailableServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: AvailableServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    availableService?: AvailableService;
    onSubmit?: (fields: AvailableServiceUpdateFormInputValues) => AvailableServiceUpdateFormInputValues;
    onSuccess?: (fields: AvailableServiceUpdateFormInputValues) => void;
    onError?: (fields: AvailableServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AvailableServiceUpdateFormInputValues) => AvailableServiceUpdateFormInputValues;
    onValidate?: AvailableServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AvailableServiceUpdateForm(props: AvailableServiceUpdateFormProps): React.ReactElement;
