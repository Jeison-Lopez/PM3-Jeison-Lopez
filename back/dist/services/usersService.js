"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserByCredentialId = exports.registerUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const repositories_1 = require("../repositories");
const credentialsService_1 = require("./credentialsService");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield repositories_1.userModel.find({
        relations: { appointments: true },
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.userModel.findOne({
        where: { id },
        relations: ["appointments"],
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.getUserByIdService = getUserByIdService;
const registerUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield (0, credentialsService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    const newUser = repositories_1.userModel.create(createUserDto);
    yield repositories_1.userModel.save(newUser);
    newUser.credential = newCredential;
    yield repositories_1.userModel.save(newUser);
    return newUser;
});
exports.registerUserService = registerUserService;
const loginUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    if (isNaN(credentialId)) {
        throw new Error("ID de credencial inválido");
    }
    const user = yield repositories_1.userModel.findOneBy({
        credential: { id: credentialId },
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.loginUserByCredentialId = loginUserByCredentialId;
