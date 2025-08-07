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
import { getCustomerProfile } from "./graphql/queries";
import { updateCustomerProfile } from "./graphql/mutations";
const client = generateClient();
export default function CustomerProfileUpdateForm(props) {
  const {
    id: idProp,
    customerProfile: customerProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customerId: "",
    notificationsEnabled: false,
  };
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(
    initialValues.notificationsEnabled
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerProfileRecord
      ? { ...initialValues, ...customerProfileRecord }
      : initialValues;
    setCustomerId(cleanValues.customerId);
    setNotificationsEnabled(cleanValues.notificationsEnabled);
    setErrors({});
  };
  const [customerProfileRecord, setCustomerProfileRecord] = React.useState(
    customerProfileModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCustomerProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCustomerProfile
        : customerProfileModelProp;
      setCustomerProfileRecord(record);
    };
    queryData();
  }, [idProp, customerProfileModelProp]);
  React.useEffect(resetStateValues, [customerProfileRecord]);
  const validations = {
    customerId: [],
    notificationsEnabled: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          customerId: customerId ?? null,
          notificationsEnabled: notificationsEnabled ?? null,
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
            query: updateCustomerProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: customerProfileRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId: value,
              notificationsEnabled,
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
      <SwitchField
        label="Notifications enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={notificationsEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              customerId,
              notificationsEnabled: value,
            };
            const result = onChange(modelFields);
            value = result?.notificationsEnabled ?? value;
          }
          if (errors.notificationsEnabled?.hasError) {
            runValidationTasks("notificationsEnabled", value);
          }
          setNotificationsEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("notificationsEnabled", notificationsEnabled)
        }
        errorMessage={errors.notificationsEnabled?.errorMessage}
        hasError={errors.notificationsEnabled?.hasError}
        {...getOverrideProps(overrides, "notificationsEnabled")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || customerProfileModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || customerProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
