class Usuario {

    fullName = "";
    mascotas = [];
    books = [];


    /**
     * receive the name, surname, books and pets from a user.
     * @param  {} nombre 
     * @param  {} apellido
     * @param  {} libros
     * @param  {} mascotas
     */
    constructor(nombre, apellido, mascota, libros) {

        this.name = nombre;
        this.surename = apellido;
        this.mascotas.push(mascota);
        this.books.push(libros)
        console.log(this.books);
    }

    /**
     * this function return the fullname of a user
     * @return { string } return the fullname
     */
    getFullName = () => {
        return this.fullName = `${this.name} ${this.surename}`;
    }


    /**
     * this function get the pet´s name and add to an array.
     * @param  { string } nameMascota pets name.
     */
    addMascota = (nameMascota) => {

        this.mascotas.push(nameMascota);
        console.log(this.mascotas);
    }


    /**
     * this function return the quiantity of pets.
     * @return { cant } the number of mascotas for each user
     */
    countMascotas = () => {
        return this.mascotas.length;
    }



    /**
     * this function add a object with name and author in the books array.
     * @param  {} name 
     * @param  {} author
     * add the objet to the books´array
     */
    addbook = (name, author) => {

        this.books.push({ name, author })
        console.log(this.books)
    }


    /**
     * 
     * @returns an array with the name of the books of each user
     */
    getBookNmaes = () => {

        const names = this.books.map((libro) => libro.name);
        return names;
    }

}

module.exports = { Usuario }