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
import { createTowTruckService } from "./graphql/mutations";
const client = generateClient();
export default function TowTruckServiceCreateForm(props) {
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
    storeId: "",
    available: false,
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  };
  const [storeId, setStoreId] = React.useState(initialValues.storeId);
  const [available, setAvailable] = React.useState(initialValues.available);
  const [contactName, setContactName] = React.useState(
    initialValues.contactName
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStoreId(initialValues.storeId);
    setAvailable(initialValues.available);
    setContactName(initialValues.contactName);
    setContactPhone(initialValues.contactPhone);
    setContactEmail(initialValues.contactEmail);
    setErrors({});
  };
  const validations = {
    storeId: [],
    available: [],
    contactName: [],
    contactPhone: [{ type: "Phone" }],
    contactEmail: [{ type: "Email" }],
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
          storeId,
          available,
          contactName,
          contactPhone,
          contactEmail,
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
            query: createTowTruckService.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TowTruckServiceCreateForm")}
      {...rest}
    >
      <TextField
        label="Store id"
        isRequired={false}
        isReadOnly={false}
        value={storeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              storeId: value,
              available,
              contactName,
              contactPhone,
              contactEmail,
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
      <SwitchField
        label="Available"
        defaultChecked={false}
        isDisabled={false}
        isChecked={available}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              storeId,
              available: value,
              contactName,
              contactPhone,
              contactEmail,
            };
            const result = onChange(modelFields);
            value = result?.available ?? value;
          }
          if (errors.available?.hasError) {
            runValidationTasks("available", value);
          }
          setAvailable(value);
        }}
        onBlur={() => runValidationTasks("available", available)}
        errorMessage={errors.available?.errorMessage}
        hasError={errors.available?.hasError}
        {...getOverrideProps(overrides, "available")}
      ></SwitchField>
      <TextField
        label="Contact name"
        isRequired={false}
        isReadOnly={false}
        value={contactName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              storeId,
              available,
              contactName: value,
              contactPhone,
              contactEmail,
            };
            const result = onChange(modelFields);
            value = result?.contactName ?? value;
          }
          if (errors.contactName?.hasError) {
            runValidationTasks("contactName", value);
          }
          setContactName(value);
        }}
        onBlur={() => runValidationTasks("contactName", contactName)}
        errorMessage={errors.contactName?.errorMessage}
        hasError={errors.contactName?.hasError}
        {...getOverrideProps(overrides, "contactName")}
      ></TextField>
      <TextField
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              storeId,
              available,
              contactName,
              contactPhone: value,
              contactEmail,
            };
            const result = onChange(modelFields);
            value = result?.contactPhone ?? value;
          }
          if (errors.contactPhone?.hasError) {
            runValidationTasks("contactPhone", value);
          }
          setContactPhone(value);
        }}
        onBlur={() => runValidationTasks("contactPhone", contactPhone)}
        errorMessage={errors.contactPhone?.errorMessage}
        hasError={errors.contactPhone?.hasError}
        {...getOverrideProps(overrides, "contactPhone")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              storeId,
              available,
              contactName,
              contactPhone,
              contactEmail: value,
            };
            const result = onChange(modelFields);
            value = result?.contactEmail ?? value;
          }
          if (errors.contactEmail?.hasError) {
            runValidationTasks("contactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("contactEmail", contactEmail)}
        errorMessage={errors.contactEmail?.errorMessage}
        hasError={errors.contactEmail?.hasError}
        {...getOverrideProps(overrides, "contactEmail")}
      ></TextField>
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
