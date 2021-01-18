// handleResponse Method is for handling the response
const API_URL = "http://localhost:1000";
export const handleResponse = async(endpoint, requestOptions) => {
    const response = await fetch(`${API_URL}${ endpoint }`, requestOptions);
    const data = await response.json();
    return data;
}