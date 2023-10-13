const API_URL = process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api/" : "https://" + window.location.host + "/api/"

const BASE_URL = new URL(API_URL)

const FetchAPI = {
    postJson: (urlStr: string, data: Object) => {
        let url = new URL(urlStr, BASE_URL)

        return fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: data && JSON.stringify(data),
        }).then(handleResponse)
    },
    putJson: (urlStr: string, data: Object) => {
        let url = new URL(urlStr, BASE_URL)

        return fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(handleResponse)
    },
    getJson: (urlStr: string, params: string | null) => {
        
        let url = new URL(urlStr, BASE_URL)
        
        if (!!params) {
            url.search = new URLSearchParams(params).toString()
        }
        return fetch(url).then(handleResponse)
    }
}

const handleResponse = async(response: Response) => {
    var responseObj = null
    
    try {
        
        const contentType = response.headers.get("Content-Type")
        
        if (contentType === "application/json") {
            responseObj = await response.json()
        }

    } catch {
        responseObj = null
    }
    
    if (response.ok) {
        return responseObj
    } else {
        return {
            error: responseObj,
        }
    }
}

const MovieAPI = {
    filterMovies: (data: string) => FetchAPI.getJson("list/", data),
    fetchMovie: (id: number) => FetchAPI.getJson(`detail/${id}`, null),
}

const api = { MovieAPI }

export default api