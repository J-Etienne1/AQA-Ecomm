const { expect } = require("@playwright/test");

exports.ApiCall = class ApiCall {
  request: any;

  constructor(request) {
    this.request = request;
  }

  async getAllProducts() {
    const response = await this.request.get("https://automationexercise.com/api/productsList");

    expect(response.ok()) 

  }
};
