/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getInventory } from "./graphql/queries";
import { updateInventory } from "./graphql/mutations";
const client = generateClient();
export default function InventoryUpdateForm(props) {
  const {
    id: idProp,
    inventory: inventoryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tireType: "",
    size: "",
    quantityAvailable: "",
    storeId: "",
  };
  const [tireType, setTireType] = React.useState(initialValues.tireType);
  const [size, setSize] = React.useState(initialValues.size);
  const [quantityAvailable, setQuantityAvailable] = React.useState(
    initialValues.quantityAvailable
  );
  const [storeId, setStoreId] = React.useState(initialValues.storeId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = inventoryRecord
      ? { ...initialValues, ...inventoryRecord }
      : initialValues;
    setTireType(cleanValues.tireType);
    setSize(cleanValues.size);
    setQuantityAvailable(cleanValues.quantityAvailable);
    setStoreId(cleanValues.storeId);
    setErrors({});
  };
  const [inventoryRecord, setInventoryRecord] =
    React.useState(inventoryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getInventory.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInventory
        : inventoryModelProp;
      setInventoryRecord(record);
    };
    queryData();
  }, [idProp, inventoryModelProp]);
  React.useEffect(resetStateValues, [inventoryRecord]);
  const validations = {
    tireType: [],
    size: [],
    quantityAvailable: [],
    storeId: [],
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
          tireType: tireType ?? null,
          size: size ?? null,
          quantityAvailable: quantityAvailable ?? null,
          storeId: storeId ?? null,
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
            query: updateInventory.replaceAll("__typename", ""),
            variables: {
              input: {
                id: inventoryRecord.id,
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
      {...getOverrideProps(overrides, "InventoryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tire type"
        isRequired={false}
        isReadOnly={false}
        value={tireType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tireType: value,
              size,
              quantityAvailable,
              storeId,
            };
            const result = onChange(modelFields);
            value = result?.tireType ?? value;
          }
          if (errors.tireType?.hasError) {
            runValidationTasks("tireType", value);
          }
          setTireType(value);
        }}
        onBlur={() => runValidationTasks("tireType", tireType)}
        errorMessage={errors.tireType?.errorMessage}
        hasError={errors.tireType?.hasError}
        {...getOverrideProps(overrides, "tireType")}
      ></TextField>
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        value={size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tireType,
              size: value,
              quantityAvailable,
              storeId,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      ></TextField>
      <TextField
        label="Quantity available"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantityAvailable}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tireType,
              size,
              quantityAvailable: value,
              storeId,
            };
            const result = onChange(modelFields);
            value = result?.quantityAvailable ?? value;
          }
          if (errors.quantityAvailable?.hasError) {
            runValidationTasks("quantityAvailable", value);
          }
          setQuantityAvailable(value);
        }}
        onBlur={() =>
          runValidationTasks("quantityAvailable", quantityAvailable)
        }
        errorMessage={errors.quantityAvailable?.errorMessage}
        hasError={errors.quantityAvailable?.hasError}
        {...getOverrideProps(overrides, "quantityAvailable")}
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
              tireType,
              size,
              quantityAvailable,
              storeId: value,
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
          isDisabled={!(idProp || inventoryModelProp)}
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
              !(idProp || inventoryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
