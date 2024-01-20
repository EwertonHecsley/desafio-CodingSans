import axios from 'axios';

export class InstanceAxios {
    constructor(private query: string) { }

    async get() {
        const response = await axios
            .get(`https://api.openbrewerydb.org/breweries/search?query=${this.query}`,
                { headers: { 'Content-Type': 'application/json' } });
        return response.data;
    }
};