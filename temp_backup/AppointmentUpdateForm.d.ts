import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Appointment } from "./graphql/types";
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
export declare type AppointmentUpdateFormInputValues = {
    serviceType?: string;
    appointmentDate?: string;
    status?: string;
    customerId?: string;
    storeId?: string;
    carProfileId?: string;
    serviceDetails?: string;
    dropOffOption?: boolean;
    pickupDropOffInfo?: string;
    towTruckRequired?: boolean;
};
export declare type AppointmentUpdateFormValidationValues = {
    serviceType?: ValidationFunction<string>;
    appointmentDate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    customerId?: ValidationFunction<string>;
    storeId?: ValidationFunction<string>;
    carProfileId?: ValidationFunction<string>;
    serviceDetails?: ValidationFunction<string>;
    dropOffOption?: ValidationFunction<boolean>;
    pickupDropOffInfo?: ValidationFunction<string>;
    towTruckRequired?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppointmentUpdateFormOverridesProps = {
    AppointmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceType?: PrimitiveOverrideProps<TextFieldProps>;
    appointmentDate?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    carProfileId?: PrimitiveOverrideProps<TextFieldProps>;
    serviceDetails?: PrimitiveOverrideProps<TextFieldProps>;
    dropOffOption?: PrimitiveOverrideProps<SwitchFieldProps>;
    pickupDropOffInfo?: PrimitiveOverrideProps<TextFieldProps>;
    towTruckRequired?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AppointmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppointmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appointment?: Appointment;
    onSubmit?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onSuccess?: (fields: AppointmentUpdateFormInputValues) => void;
    onError?: (fields: AppointmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppointmentUpdateFormInputValues) => AppointmentUpdateFormInputValues;
    onValidate?: AppointmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppointmentUpdateForm(props: AppointmentUpdateFormProps): React.ReactElement;
