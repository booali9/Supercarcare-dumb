import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TowTruckService } from "./graphql/types";
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
export declare type TowTruckServiceUpdateFormInputValues = {
    storeId?: string;
    available?: boolean;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
};
export declare type TowTruckServiceUpdateFormValidationValues = {
    storeId?: ValidationFunction<string>;
    available?: ValidationFunction<boolean>;
    contactName?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TowTruckServiceUpdateFormOverridesProps = {
    TowTruckServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SwitchFieldProps>;
    contactName?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TowTruckServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: TowTruckServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    towTruckService?: TowTruckService;
    onSubmit?: (fields: TowTruckServiceUpdateFormInputValues) => TowTruckServiceUpdateFormInputValues;
    onSuccess?: (fields: TowTruckServiceUpdateFormInputValues) => void;
    onError?: (fields: TowTruckServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TowTruckServiceUpdateFormInputValues) => TowTruckServiceUpdateFormInputValues;
    onValidate?: TowTruckServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TowTruckServiceUpdateForm(props: TowTruckServiceUpdateFormProps): React.ReactElement;
