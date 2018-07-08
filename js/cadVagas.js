var database = firebase.database();
var storageRef = storage.ref();
let nmEmpresa = document.getElementById('nmEmpresa').value;
let cnpj = document.getElementById('cnpj').value;
let telefone = document.getElementById('telefone').value;
let cep = document.getElementById('cep').value;
let rua = document.getElementById('rua').value;
let number = document.getElementById('number').value;

let nmVaga = document.getElementById('nmVaga').value;
let tipoVaga = document.getElementById('tipoVaga').value;
let qtVagas = document.getElementById('qtVagas').value;
let descVaga = document.getElementById('descVaga').value;


function validarForm() {
    var aux = true
    if (!nmEmpresa && !cnpj && !telefone && !cep && !rua && !number && !nmVaga && !tipoVaga && !qtVagas && !descVaga) {
        alert("Preencha todos os campos.")
        aux = false;
    } else if (!nmEmpresa) {
        alert("Preencha o nome da empresa.")
        aux = false;
    } else if (!cnpj) {
        alert("Preencha o cnpj.")
        aux = false;
    } else if (!telefone) {
        alert("Preencha o telefone.")
        aux = false;
    } else if (!rua) {
        alert("Preencha o nome da rua.")
        aux = false;
    } else if (!number) {
        alert("Preencha o número.")
        aux = false;
    } else if (!nmVaga) {
        alert("Preencha o nome da vaga.")
        aux = false;
    } else if (!tipoVaga) {
        alert("Preencha o tipo da vaga.")
        aux = false;
    } else if (!qtVagas) {
        alert("Preencha a quantidade de vaga.")
        aux = false;
    } else if (!descVaga) {
        alert("Preencha a descrição da vaga.")
        aux = false;
    }

    return aux;
}

document.getElementById("btnCad").addEventListener("click", function (event) {
    if (validarForm()) {
        var promise1 = new Promise(function (resolve, reject) {
            var dtPostagem = new Date();

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    database.ref('vagas/' + user.uid).set({
                        dadosEmpresa: {
                            nmEmpresa: nmEmpresa,
                            cnpjEmpresa: cnpj,
                            telefoneEmpresa: telefone,
                            enderecoEmpresa: {
                                cep: cep,
                                rua: rua,
                                numero: number,
                            }
                        }, dadosVagas: {
                            nmVaga: nmVaga,
                            tipoVaga: tipoVaga,
                            qtVagas: qtVagas,
                            descVaga: descVaga
                        },
                        dtPostagem: dtPostagem
                    }, function (error) {
                        if (error) {
                            console.error(error)
                        } else {
                            alert("Vaga Cadastrada com sucesso")
                            // Data saved successfully!
                        }
                    });
                }
            });

        });
    } 
});


