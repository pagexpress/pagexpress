const { Schema, model } = require('mongoose');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const fieldSchema = new Schema({
  name: { type: String, require: true, min: 3, max: 30 },
  label: { type: String, require: true, min: 3, max: 30 },
  description: { type: String, min: 5, max: 100 },
  required: { type: Boolean, default: false },
  defaultValue: { type: Schema.Types.Mixed, default: undefined },
  fieldTypeId: { type: Schema.Types.ObjectId, ref: 'FieldType', require: true },
  definedOptionsId: { type: Schema.Types.ObjectId, ref: 'Definition' },
  options: { type: Array, min: 1, default: null },
});

const fieldTypeSchema = new Schema({
  type: { type: String, require: true, min: 3, max: 30 },
  description: { type: String, min: 10, max: 250 },
});

const fieldValidationSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  label: Joi.string().required().min(3).max(30),
  description: Joi.string().min(5).max(100),
  required: Joi.boolean(),
  fieldTypeId: Joi.objectId().required(),
  definedOptionsId: Joi.objectId(),
  options: Joi.array().min(1),
});

const fieldTypeValidationSchema = Joi.object({
  type: Joi.string().required().min(3).max(30),
  description: Joi.string().min(10).max(250),
});

const FieldType = model('FieldType', fieldTypeSchema);

module.exports = {
  fieldTypeSchema,
  fieldSchema,
  FieldType,
  fieldTypeValidationSchema,
  fieldValidationSchema,
};
