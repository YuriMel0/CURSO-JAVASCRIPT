function getAdmins(map) {
    let admins = []
    for([key, value] of map) {
        if (value === 'Admim') {
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()
usuarios.set('Carlos', 'Admim')
usuarios.set('Eduarda', 'Admim')
usuarios.set('Matheus', 'User')
usuarios.set('Mariana', 'Admim')

console.log(getAdmins(usuarios))