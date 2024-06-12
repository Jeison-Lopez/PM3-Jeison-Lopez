"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const data_source_1 = require("./config/data-source");
const envs_1 = require("./config/envs");
server_1.default.use("/users", userRoutes_1.default);
server_1.default.use("/appointments", appointmentRoutes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server is running on port ${envs_1.PORT}`);
    });
})
    .catch((error) => console.log("Error during Data Source initialization:", error));
exports.default = server_1.default;
