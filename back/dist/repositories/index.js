"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.credentialModel = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
const User_1 = require("../entities/User");
exports.credentialModel = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
exports.userModel = data_source_1.AppDataSource.getRepository(User_1.User);
