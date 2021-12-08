"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserControler_1 = __importDefault(require("./controllers/UserControler"));
var routes = (0, express_1.Router)();
routes.get("/", function (req, res) {
    res.send("<h1>Main Page</h1>");
});
routes.get('/users', UserControler_1.default.index);
exports.default = routes;
