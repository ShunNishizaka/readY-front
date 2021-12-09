const BASEURL = "http://localhost:8000"

async function postData(endpoint = '', data = {}, headers = {}){
    let url = BASEURL + endpoint;
	let response;

    const actual_headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        ...headers
    }

	await fetch(url, {
		method: 'POST',
		cache: 'no-cache',
		headers: actual_headers,
		body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
	})
	.then(res => {
		if(res.status >= 400){
            console.log(res)
			throw new Error("Bad response from server");
		}
		response = res.json();
	});
	return response;
}

async function getData(endpoint = '', data = {}, headers = {}) {
    const query_params = new URLSearchParams(data)
    let url = `${BASEURL}${endpoint}?${query_params}`
	let response

    const actual_headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        ...headers
    }

	await fetch(url, {
		method: 'GET',
		cache: 'no-cache',
		headers: actual_headers
	})
	.then(res => {
		if(res.status >= 400){
            console.log(res)
			throw new Error("Bad response from server");
		}
		response = res.json();
	});
	return response;
}

export async function create_user(email, password, name) {
    await postData("/api/users/", {
        email: email,
        password: password,
        display_name: name
    })
}

export async function auth(email,password){
    await postData("/api/auth",{
        email: email,
        password: password
    }).then(data => {
        localStorage.setItem("token", data.token);
    })
}

export async function get_favo_books(token) {
    await getData("/api/user/books", {}, {
        Authorization: token
    })
}

export async function get_search_books(token,keyword) {
    return await getData("/api/book", {
        keyword: keyword
    }, {
        Authorization: token
    })
}