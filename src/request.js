const BASEURL = "http://readybook.ddns.net:8000"

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
		body: JSON.stringify(data)
	})
	.then(res => {
		if(res.status >= 400){
            console.log(res)
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
		}
		response = res.json();
	});
	return response;
}

async function deleteData(endpoint = '', data = {}, headers = {}) {
    let url = BASEURL + endpoint;
	let response;

    const actual_headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        ...headers
    }

	await fetch(url, {
		method: 'DELETE',
		cache: 'no-cache',
		headers: actual_headers,
        body: JSON.stringify(data)
	})
	.then(res => {
		if(res.status >= 400){
            console.log(res)
		}
		response = res.json();
	});
}


async function patchData(endpoint = '', data = {}, headers = {}) {
    let url = BASEURL + endpoint;
	let response;

    const actual_headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        ...headers
    }

	await fetch(url, {
		method: 'PATCH',
		cache: 'no-cache',
		headers: actual_headers,
        body: JSON.stringify(data)
	})
	.then(res => {
		if(res.status >= 400){
            console.log(res)
		}
		response = res.json();
	});
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
    },{}).then(data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("refresh_token", data.refresh_token);
        const exp = JSON.parse(window.atob(data.token.split(".")[1])).exp;
        localStorage.setItem("exp",exp);
    })
}

export async function get_user_books_info(token,skip = 0) {
    return await getData("/api/users/books", {
        skip: skip
    }, {
        Authorization: `Bearer ${token}`
    })
}

export async function set_book_info(token,item_number,is_purchased,is_read,is_favorite){
    await postData("/api/users/books",{
        item_number: item_number,
        is_purchased: is_purchased,
        is_read: is_read,
        is_favorite: is_favorite
    },{
        Authorization: `Bearer ${token}`
    })
}

export async function delete_book_info(token,item_number){
    await deleteData("/api/users/books",{
        item_number: item_number,
    },{
        Authorization: `Bearer ${token}`
    })
}

export async function patch_book_info(token,item_number,is_purchased,is_read,is_favorite){
    await patchData("/api/users/books",{
        item_number: item_number,
        is_purchased: is_purchased,
        is_read: is_read,
        is_favorite: is_favorite
    },{
        Authorization: `Bearer ${token}`
    })
}



export async function set_favo_series(token,series){
    await postData("/api/user/series",{
        series: series
    },{
        Authorization: token
    })
}

export async function get_favo_series(token){
    await getData("/api/user/series",{},{
        Authorization: token
    })
}


export async function get_search_books(token,keyword) {
    return await getData("/api/books", {
        keyword: keyword
    }, {
        Authorization: `Bearer ${token}`
    })
}

export async function authentication_token(refresh_token){
    const id = JSON.parse(window.atob(localStorage.getItem("token").split(".")[1])).id;
    console.log(id);

    //JSON.parse(window.atob(id.split(".")[1])).id)
    if(new Date(localStorage.getItem("exp")) > new Date(Date.now())){
        return localStorage.getItem("token")
    }else{
        console.log("aaaaaa")
        await postData("/api/refresh",{
            id: id,
            refresh_token: refresh_token
        },{}).then(data => {
            console.log(data)
            localStorage.setItem("token",data.token)
        })
    }
}