export const getDdata = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                res.json().then((data) => { // json() - promise method
                    resolve(data)
                })
            }).catch((err) => {
                console.log(err);
            })
    });
}