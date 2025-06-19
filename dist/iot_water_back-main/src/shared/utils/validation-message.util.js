"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minLengthMessage = exports.isStringMessage = exports.isEmailMessage = exports.isEmptyMessage = void 0;
const isEmptyMessage = (field) => `El campo ${field} no debe estar vacio.`;
exports.isEmptyMessage = isEmptyMessage;
const isEmailMessage = () => `Debe ser un correo válido`;
exports.isEmailMessage = isEmailMessage;
const isStringMessage = (field) => `El campo ${field} deben ser de tipo caracteres`;
exports.isStringMessage = isStringMessage;
const minLengthMessage = (field, length) => `El campo ${field} deben tener al menos ${length} caracteres`;
exports.minLengthMessage = minLengthMessage;
//# sourceMappingURL=validation-message.util.js.map