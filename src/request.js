const BASEURL = "http://localhost:8000"

async function postData(endpoint = '', data = {}) {
    let url = BASEURL + endpoint
	let response
	await fetch(url, {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			'accept': 'application/json'
		},
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

async function getData(endpoint = '', data = {}) {
    let url = BASEURL + endpoint
	let response
	await fetch(url, {
		method: 'GET',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			'accept': 'application/json'
		},
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