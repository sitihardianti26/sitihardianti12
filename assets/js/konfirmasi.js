function hapusMenu(url ) {

    Swal.fire({
        title: 'Are you sure',
            text: "Yakin ingin hapus menu",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButotonColor: '#d33',
            confirmButtonText: 'ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.herf = url;
        }
    })
}


function hapusRole(url) {

    Swal.fire({
        title: 'Are you sure?',
            text: "Yakin ingin hapus menu",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButotonColor: '#d33',
            confirmButtonText: 'ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.herf = url;
        }
    })
}

 
function hapusSubMenu(url) {

    Swal.fire({
        title: 'Are you sure?',
            text: "Yakin ingin hapus menu",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButotonColor: '#d33',
            confirmButtonText: 'ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.herf = url;
        }
    })
}