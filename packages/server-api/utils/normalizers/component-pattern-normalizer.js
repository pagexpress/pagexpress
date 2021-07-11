const normalizeComponentFieldData = field => ({
  ...field,
  type: field.fieldTypeId.type,
  options: field.definedOptionsId && field.definedOptionsId.values ? field.definedOptionsId.values : field.options,
  defaultValue:
    field.definedOptionsId && field.definedOptionsId.defaultValue
      ? field.definedOptionsId.defaultValue
      : field.defaultValue,
  fieldTypeId: undefined,
  definedOptionsId: undefined,
});

const normalizeComponentPattern = component => {
  if (component.fieldset) {
    component.fieldset = component.fieldset.map(singleFieldset => ({
      ...singleFieldset,
      fields: singleFieldset.fields.map(normalizeComponentFieldData),
    }));
  }

  if (component.fields) {
    component.fields = component.fields.map(normalizeComponentFieldData);
  }

  console.log('fields', component.fields);

  return component;
};

module.exports = normalizeComponentPattern;
