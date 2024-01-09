"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was automatically added by edgio init.
// You should commit this file to source control.
const core_1 = require("@edgio/core");
const connectors_1 = require("@edgio/connectors");
exports.default = new core_1.Router().use(connectors_1.connectorRoutes);

