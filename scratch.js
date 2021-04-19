class Provider {
  constructor(client, baseUrl, options = {}) {
    this.client = client;
    this.baseUrl = baseUrl;
    this.options = options;
  }

  async fetchResponse(endpoint, options = {}) {
    const response = await fetch(this.baseUrl + endpoint, { 
      ...options
    });

    if(!response.ok) throw Error(response.statusText);

    return response.json();
  }

  getRates(endpoint, options = {}) {
    return this.fetchResponse(
      endpoint, {
      ...options
    });
  }
}

const clientOptions = {};
let newClient = new Provider('ABC Needs Money', 'http://api.abc.com/', clientOptions);
