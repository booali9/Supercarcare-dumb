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
export declare type TowTruckServiceCreateFormInputValues = {
    storeId?: string;
    available?: boolean;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
};
export declare type TowTruckServiceCreateFormValidationValues = {
    storeId?: ValidationFunction<string>;
    available?: ValidationFunction<boolean>;
    contactName?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TowTruckServiceCreateFormOverridesProps = {
    TowTruckServiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SwitchFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TowTruckServiceCreateFormProps = React.PropsWithChildren<{
    overrides?: TowTruckServiceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TowTruckServiceCreateFormInputValues) => TowTruckServiceCreateFormInputValues;
    onSuccess?: (fields: TowTruckServiceCreateFormInputValues) => void;
    onError?: (fields: TowTruckServiceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TowTruckServiceCreateFormInputValues) => TowTruckServiceCreateFormInputValues;
    onValidate?: TowTruckServiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function TowTruckServiceCreateForm(props: TowTruckServiceCreateFormProps): React.ReactElement;
