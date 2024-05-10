const { request } = require("@playwright/test");

exports.ApiCall = class ApiCall {
    request: any;
    
    constructor(request) {
        this.request = request;
    }
}