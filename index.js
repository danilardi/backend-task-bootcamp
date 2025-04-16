// Soal 1
// Simulasi database user
const userDB = {
    username: "joko",
    password: "rahasia",
    role: "admin"
};

// fungsinya untuk cek username === "joko" dan password === "rahasia"?
// jika iya kirim userDB lewat callback
function loginUser(inputUsername, inputPassword, callback) {
    setTimeout(() => {
        if (inputUsername === userDB.username && inputPassword === userDB.password) {
            callback(userDB);
        } else {
            console.log("Username atau password salah");
        }
    }, 500);
}

// ini hanya mengambil role ,tapi lemparnya pakai callBack
function getRole(user, callback) {
    setTimeout(() => {
        if (user.role) {
            callback(user.role);
        } else {
            console.log("Role tidak ditemukan");
        }
    }, 500);
}

// cek role, jika admin lempar "Dashboard admin", jika selain admin lempar "Dashboard"
function getMenu(role, callback) {
    setTimeout(() => {
        if (role === "admin") {
            callback("Dashboard Admin");
        } else {
            callback("Dashboard");
        }
    }, 500);
}

loginUser("joko", "rahasia", function (user) {
    getRole(user, function (role) {
        getMenu(role, (menu) => {
            console.log(menu);
        });
    });
})

// Soal 2
const axios = require("axios");
async function hitApi() {
    try {
        let hitData = await axios({
            url: "https://jsonplaceholder.typicode.com/users/",
        });

        console.log(hitData, "==> FINAL");
    } catch (error) {
        // ISI block code CATCH
        console.log(error);
    }
}

hitApi();


// Soal 3
/* 
1. Menambahkan file .json menggunakan builtit modul "fs"
2. Membaca file .json
3. Merubah menjadi Obj menggunakan .parse agar bisa dimanipulasi
4. Merubah isi datanya
5. Merubah menjadi str
6. Menyimpan kembali ke .json()
*/

const fs = require("fs");

fs.writeFile(
    'data.json',
    JSON.stringify(
        [
            {
                name: "Alex",
                age: 20,
                address: "Pariaman"
            },
            {
                name: "Budi",
                age: 25,
                address: "Bandung"
            },
            {
                name: "Cici",
                age: 22,
                address: "Jakarta"
            }
        ],
    ),
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File berhasil dibuat");
        }
    }
);

fs.readFile('data.json', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        const jsonData = JSON.parse(data);
        jsonData[1].name = "Beni";
        jsonData[1].age = 30;
        jsonData[1].address = "Padang";

        const jsonString = JSON.stringify(jsonData);

        fs.writeFile('data.json', jsonString, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File berhasil diupdate");
            }
        });

    }
});
