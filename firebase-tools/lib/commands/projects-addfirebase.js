"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command = require("../command");
const error_1 = require("../error");
const projects_1 = require("../management/projects");
const requireAuth = require("../requireAuth");
module.exports = new Command("projects:addfirebase [projectId]")
    .description("add Firebase resources to a Google Cloud Platform project")
    .before(requireAuth)
    .action((projectId, options) => __awaiter(this, void 0, void 0, function* () {
    if (!options.nonInteractive && !projectId) {
        projectId = yield projects_1.promptAvailableProjectId();
    }
    if (!projectId) {
        throw new error_1.FirebaseError("Project ID cannot be empty");
    }
    return projects_1.addFirebaseToCloudProjectAndLog(projectId);
}));