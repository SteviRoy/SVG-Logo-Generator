const inquirer = require("inquirer");
const Logo = require("./lib/logo");
const { Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");

const shapes = [Triangle, Circle, Square];