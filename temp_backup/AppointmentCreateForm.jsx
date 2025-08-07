/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAppointment } from "./graphql/mutations";
const client = generateClient();
export default function AppointmentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    serviceType: "",
    appointmentDate: "",
    status: "",
    customerId: "",
    storeId: "",
    carProfileId: "",
    serviceDetails: "",
    dropOffOption: false,
    pickupDropOffInfo: "",
    towTruckRequired: false,
  };
  const [serviceType, setServiceType] = React.useState(
    initialValues.serviceType
  );
  const [appointmentDate, setAppointmentDate] = React.useState(
    initialValues.appointmentDate
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [storeId, setStoreId] = React.useState(initialValues.storeId);
  const [carProfileId, setCarProfileId] = React.useState(
    initialValues.carProfileId
  );
  const [serviceDetails, setServiceDetails] = React.useState(
    initialValues.serviceDetails
  );
  const [dropOffOption, setDropOffOption] = React.useState(
    initialValues.dropOffOption
  );
  const [pickupDropOffInfo, setPickupDropOffInfo] = React.useState(
    initialValues.pickupDropOffInfo
  );
  const [towTruckRequired, setTowTruckRequired] = React.useState(
    initialValues.towTruckRequired
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setServiceType(initialValues.serviceType);
    setAppointmentDate(initialValues.appointmentDate);
    setStatus(initialValues.status);
    setCustomerId(initialValues.customerId);
    setStoreId(initialValues.storeId);
    setCarProfileId(initialValues.carProfileId);
    setServiceDetails(initialValues.serviceDetails);
    setDropOffOption(initialValues.dropOffOption);
    setPickupDropOffInfo(initialValues.pickupDropOffInfo);
    setTowTruckRequired(initialValues.towTruckRequired);
    setErrors({});
  };
  const validations = {
    serviceType: [],
    appointmentDate: [],
    status: [],
    customerId: [],
    storeId: [],
    carProfileId: [],
    serviceDetails: [],
    dropOffOption: [],
    pickupDropOffInfo: [],
    towTruckRequired: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          serviceType,
          appointmentDate,
          status,
          customerId,
          storeId,
          carProfileId,
          serviceDetails,
          dropOffOption,
          pickupDropOffInfo,
          towTruckRequired,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAppointment.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AppointmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Service type"
        isRequired={false}
        isReadOnly={false}
        value={serviceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType: value,
              appointmentDate,
              status,
              customerId,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.serviceType ?? value;
          }
          if (errors.serviceType?.hasError) {
            runValidationTasks("serviceType", value);
          }
          setServiceType(value);
        }}
        onBlur={() => runValidationTasks("serviceType", serviceType)}
        errorMessage={errors.serviceType?.errorMessage}
        hasError={errors.serviceType?.hasError}
        {...getOverrideProps(overrides, "serviceType")}
      ></TextField>
      <TextField
        label="Appointment date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={appointmentDate && convertToLocal(new Date(appointmentDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate: value,
              status,
              customerId,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.appointmentDate ?? value;
          }
          if (errors.appointmentDate?.hasError) {
            runValidationTasks("appointmentDate", value);
          }
          setAppointmentDate(value);
        }}
        onBlur={() => runValidationTasks("appointmentDate", appointmentDate)}
        errorMessage={errors.appointmentDate?.errorMessage}
        hasError={errors.appointmentDate?.hasError}
        {...getOverrideProps(overrides, "appointmentDate")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status: value,
              customerId,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId: value,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.customerId ?? value;
          }
          if (errors.customerId?.hasError) {
            runValidationTasks("customerId", value);
          }
          setCustomerId(value);
        }}
        onBlur={() => runValidationTasks("customerId", customerId)}
        errorMessage={errors.customerId?.errorMessage}
        hasError={errors.customerId?.hasError}
        {...getOverrideProps(overrides, "customerId")}
      ></TextField>
      <TextField
        label="Store id"
        isRequired={false}
        isReadOnly={false}
        value={storeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId,
              storeId: value,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.storeId ?? value;
          }
          if (errors.storeId?.hasError) {
            runValidationTasks("storeId", value);
          }
          setStoreId(value);
        }}
        onBlur={() => runValidationTasks("storeId", storeId)}
        errorMessage={errors.storeId?.errorMessage}
        hasError={errors.storeId?.hasError}
        {...getOverrideProps(overrides, "storeId")}
      ></TextField>
      <TextField
        label="Car profile id"
        isRequired={false}
        isReadOnly={false}
        value={carProfileId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId,
              storeId,
              carProfileId: value,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.carProfileId ?? value;
          }
          if (errors.carProfileId?.hasError) {
            runValidationTasks("carProfileId", value);
          }
          setCarProfileId(value);
        }}
        onBlur={() => runValidationTasks("carProfileId", carProfileId)}
        errorMessage={errors.carProfileId?.errorMessage}
        hasError={errors.carProfileId?.hasError}
        {...getOverrideProps(overrides, "carProfileId")}
      ></TextField>
      <TextField
        label="Service details"
        isRequired={false}
        isReadOnly={false}
        value={serviceDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId,
              storeId,
              carProfileId,
              serviceDetails: value,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.serviceDetails ?? value;
          }
          if (errors.serviceDetails?.hasError) {
            runValidationTasks("serviceDetails", value);
          }
          setServiceDetails(value);
        }}
        onBlur={() => runValidationTasks("serviceDetails", serviceDetails)}
        errorMessage={errors.serviceDetails?.errorMessage}
        hasError={errors.serviceDetails?.hasError}
        {...getOverrideProps(overrides, "serviceDetails")}
      ></TextField>
      <SwitchField
        label="Drop off option"
        defaultChecked={false}
        isDisabled={false}
        isChecked={dropOffOption}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption: value,
              pickupDropOffInfo,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.dropOffOption ?? value;
          }
          if (errors.dropOffOption?.hasError) {
            runValidationTasks("dropOffOption", value);
          }
          setDropOffOption(value);
        }}
        onBlur={() => runValidationTasks("dropOffOption", dropOffOption)}
        errorMessage={errors.dropOffOption?.errorMessage}
        hasError={errors.dropOffOption?.hasError}
        {...getOverrideProps(overrides, "dropOffOption")}
      ></SwitchField>
      <TextField
        label="Pickup drop off info"
        isRequired={false}
        isReadOnly={false}
        value={pickupDropOffInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo: value,
              towTruckRequired,
            };
            const result = onChange(modelFields);
            value = result?.pickupDropOffInfo ?? value;
          }
          if (errors.pickupDropOffInfo?.hasError) {
            runValidationTasks("pickupDropOffInfo", value);
          }
          setPickupDropOffInfo(value);
        }}
        onBlur={() =>
          runValidationTasks("pickupDropOffInfo", pickupDropOffInfo)
        }
        errorMessage={errors.pickupDropOffInfo?.errorMessage}
        hasError={errors.pickupDropOffInfo?.hasError}
        {...getOverrideProps(overrides, "pickupDropOffInfo")}
      ></TextField>
      <SwitchField
        label="Tow truck required"
        defaultChecked={false}
        isDisabled={false}
        isChecked={towTruckRequired}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              serviceType,
              appointmentDate,
              status,
              customerId,
              storeId,
              carProfileId,
              serviceDetails,
              dropOffOption,
              pickupDropOffInfo,
              towTruckRequired: value,
            };
            const result = onChange(modelFields);
            value = result?.towTruckRequired ?? value;
          }
          if (errors.towTruckRequired?.hasError) {
            runValidationTasks("towTruckRequired", value);
          }
          setTowTruckRequired(value);
        }}
        onBlur={() => runValidationTasks("towTruckRequired", towTruckRequired)}
        errorMessage={errors.towTruckRequired?.errorMessage}
        hasError={errors.towTruckRequired?.hasError}
        {...getOverrideProps(overrides, "towTruckRequired")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
