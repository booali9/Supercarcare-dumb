/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCarProfile } from "./graphql/queries";
import { updateCarProfile } from "./graphql/mutations";
const client = generateClient();
export default function CarProfileUpdateForm(props) {
  const {
    id: idProp,
    carProfile: carProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    make: "",
    modelYear: "",
    trim: "",
    vinNumber: "",
    tireSpecifications: "",
    wheelSpecifications: "",
  };
  const [make, setMake] = React.useState(initialValues.make);
  const [modelYear, setModelYear] = React.useState(initialValues.modelYear);
  const [trim, setTrim] = React.useState(initialValues.trim);
  const [vinNumber, setVinNumber] = React.useState(initialValues.vinNumber);
  const [tireSpecifications, setTireSpecifications] = React.useState(
    initialValues.tireSpecifications
  );
  const [wheelSpecifications, setWheelSpecifications] = React.useState(
    initialValues.wheelSpecifications
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = carProfileRecord
      ? { ...initialValues, ...carProfileRecord }
      : initialValues;
    setMake(cleanValues.make);
    setModelYear(cleanValues.modelYear);
    setTrim(cleanValues.trim);
    setVinNumber(cleanValues.vinNumber);
    setTireSpecifications(cleanValues.tireSpecifications);
    setWheelSpecifications(cleanValues.wheelSpecifications);
    setErrors({});
  };
  const [carProfileRecord, setCarProfileRecord] =
    React.useState(carProfileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCarProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCarProfile
        : carProfileModelProp;
      setCarProfileRecord(record);
    };
    queryData();
  }, [idProp, carProfileModelProp]);
  React.useEffect(resetStateValues, [carProfileRecord]);
  const validations = {
    make: [],
    modelYear: [],
    trim: [],
    vinNumber: [],
    tireSpecifications: [],
    wheelSpecifications: [],
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
          make: make ?? null,
          modelYear: modelYear ?? null,
          trim: trim ?? null,
          vinNumber: vinNumber ?? null,
          tireSpecifications: tireSpecifications ?? null,
          wheelSpecifications: wheelSpecifications ?? null,
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
            query: updateCarProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: carProfileRecord.id,
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
      {...getOverrideProps(overrides, "CarProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Make"
        isRequired={false}
        isReadOnly={false}
        value={make}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make: value,
              modelYear,
              trim,
              vinNumber,
              tireSpecifications,
              wheelSpecifications,
            };
            const result = onChange(modelFields);
            value = result?.make ?? value;
          }
          if (errors.make?.hasError) {
            runValidationTasks("make", value);
          }
          setMake(value);
        }}
        onBlur={() => runValidationTasks("make", make)}
        errorMessage={errors.make?.errorMessage}
        hasError={errors.make?.hasError}
        {...getOverrideProps(overrides, "make")}
      ></TextField>
      <TextField
        label="Model year"
        isRequired={false}
        isReadOnly={false}
        value={modelYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              modelYear: value,
              trim,
              vinNumber,
              tireSpecifications,
              wheelSpecifications,
            };
            const result = onChange(modelFields);
            value = result?.modelYear ?? value;
          }
          if (errors.modelYear?.hasError) {
            runValidationTasks("modelYear", value);
          }
          setModelYear(value);
        }}
        onBlur={() => runValidationTasks("modelYear", modelYear)}
        errorMessage={errors.modelYear?.errorMessage}
        hasError={errors.modelYear?.hasError}
        {...getOverrideProps(overrides, "modelYear")}
      ></TextField>
      <TextField
        label="Trim"
        isRequired={false}
        isReadOnly={false}
        value={trim}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              modelYear,
              trim: value,
              vinNumber,
              tireSpecifications,
              wheelSpecifications,
            };
            const result = onChange(modelFields);
            value = result?.trim ?? value;
          }
          if (errors.trim?.hasError) {
            runValidationTasks("trim", value);
          }
          setTrim(value);
        }}
        onBlur={() => runValidationTasks("trim", trim)}
        errorMessage={errors.trim?.errorMessage}
        hasError={errors.trim?.hasError}
        {...getOverrideProps(overrides, "trim")}
      ></TextField>
      <TextField
        label="Vin number"
        isRequired={false}
        isReadOnly={false}
        value={vinNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              modelYear,
              trim,
              vinNumber: value,
              tireSpecifications,
              wheelSpecifications,
            };
            const result = onChange(modelFields);
            value = result?.vinNumber ?? value;
          }
          if (errors.vinNumber?.hasError) {
            runValidationTasks("vinNumber", value);
          }
          setVinNumber(value);
        }}
        onBlur={() => runValidationTasks("vinNumber", vinNumber)}
        errorMessage={errors.vinNumber?.errorMessage}
        hasError={errors.vinNumber?.hasError}
        {...getOverrideProps(overrides, "vinNumber")}
      ></TextField>
      <TextField
        label="Tire specifications"
        isRequired={false}
        isReadOnly={false}
        value={tireSpecifications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              modelYear,
              trim,
              vinNumber,
              tireSpecifications: value,
              wheelSpecifications,
            };
            const result = onChange(modelFields);
            value = result?.tireSpecifications ?? value;
          }
          if (errors.tireSpecifications?.hasError) {
            runValidationTasks("tireSpecifications", value);
          }
          setTireSpecifications(value);
        }}
        onBlur={() =>
          runValidationTasks("tireSpecifications", tireSpecifications)
        }
        errorMessage={errors.tireSpecifications?.errorMessage}
        hasError={errors.tireSpecifications?.hasError}
        {...getOverrideProps(overrides, "tireSpecifications")}
      ></TextField>
      <TextField
        label="Wheel specifications"
        isRequired={false}
        isReadOnly={false}
        value={wheelSpecifications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              modelYear,
              trim,
              vinNumber,
              tireSpecifications,
              wheelSpecifications: value,
            };
            const result = onChange(modelFields);
            value = result?.wheelSpecifications ?? value;
          }
          if (errors.wheelSpecifications?.hasError) {
            runValidationTasks("wheelSpecifications", value);
          }
          setWheelSpecifications(value);
        }}
        onBlur={() =>
          runValidationTasks("wheelSpecifications", wheelSpecifications)
        }
        errorMessage={errors.wheelSpecifications?.errorMessage}
        hasError={errors.wheelSpecifications?.hasError}
        {...getOverrideProps(overrides, "wheelSpecifications")}
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
          isDisabled={!(idProp || carProfileModelProp)}
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
              !(idProp || carProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
