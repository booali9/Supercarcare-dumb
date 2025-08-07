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
import { createAvailableService } from "./graphql/mutations";
const client = generateClient();
export default function AvailableServiceCreateForm(props) {
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
    serviceName: "",
    storeId: "",
    inventoryRequired: false,
  };
  const [serviceName, setServiceName] = React.useState(
    initialValues.serviceName
  );
  const [storeId, setStoreId] = React.useState(initialValues.storeId);
  const [inventoryRequired, setInventoryRequired] = React.useState(
    initialValues.inventoryRequired
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setServiceName(initialValues.serviceName);
    setStoreId(initialValues.storeId);
    setInventoryRequired(initialValues.inventoryRequired);
    setErrors({});
  };
  const validations = {
    serviceName: [],
    storeId: [],
    inventoryRequired: [],
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
          serviceName,
          storeId,
          inventoryRequired,
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
            query: createAvailableService.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AvailableServiceCreateForm")}
      {...rest}
    >
      <TextField
        label="Service name"
        isRequired={false}
        isReadOnly={false}
        value={serviceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceName: value,
              storeId,
              inventoryRequired,
            };
            const result = onChange(modelFields);
            value = result?.serviceName ?? value;
          }
          if (errors.serviceName?.hasError) {
            runValidationTasks("serviceName", value);
          }
          setServiceName(value);
        }}
        onBlur={() => runValidationTasks("serviceName", serviceName)}
        errorMessage={errors.serviceName?.errorMessage}
        hasError={errors.serviceName?.hasError}
        {...getOverrideProps(overrides, "serviceName")}
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
              serviceName,
              storeId: value,
              inventoryRequired,
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
        label="Inventory required"
        defaultChecked={false}
        isDisabled={false}
        isChecked={inventoryRequired}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              serviceName,
              storeId,
              inventoryRequired: value,
            };
            const result = onChange(modelFields);
            value = result?.inventoryRequired ?? value;
          }
          if (errors.inventoryRequired?.hasError) {
            runValidationTasks("inventoryRequired", value);
          }
          setInventoryRequired(value);
        }}
        onBlur={() =>
          runValidationTasks("inventoryRequired", inventoryRequired)
        }
        errorMessage={errors.inventoryRequired?.errorMessage}
        hasError={errors.inventoryRequired?.hasError}
        {...getOverrideProps(overrides, "inventoryRequired")}
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
