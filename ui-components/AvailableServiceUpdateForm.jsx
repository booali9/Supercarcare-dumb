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
import { getAvailableService } from "./graphql/queries";
import { updateAvailableService } from "./graphql/mutations";
const client = generateClient();
export default function AvailableServiceUpdateForm(props) {
  const {
    id: idProp,
    availableService: availableServiceModelProp,
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
    const cleanValues = availableServiceRecord
      ? { ...initialValues, ...availableServiceRecord }
      : initialValues;
    setServiceName(cleanValues.serviceName);
    setStoreId(cleanValues.storeId);
    setInventoryRequired(cleanValues.inventoryRequired);
    setErrors({});
  };
  const [availableServiceRecord, setAvailableServiceRecord] = React.useState(
    availableServiceModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAvailableService.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAvailableService
        : availableServiceModelProp;
      setAvailableServiceRecord(record);
    };
    queryData();
  }, [idProp, availableServiceModelProp]);
  React.useEffect(resetStateValues, [availableServiceRecord]);
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
          serviceName: serviceName ?? null,
          storeId: storeId ?? null,
          inventoryRequired: inventoryRequired ?? null,
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
            query: updateAvailableService.replaceAll("__typename", ""),
            variables: {
              input: {
                id: availableServiceRecord.id,
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
      {...getOverrideProps(overrides, "AvailableServiceUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || availableServiceModelProp)}
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
              !(idProp || availableServiceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
