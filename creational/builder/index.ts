class User {
    private name: string;
    private username: string;
    private password: string;
    private email: string;
    private phone: string;

    constructor(name: string, username: string, password: string, phone: string, email: string) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}
/**  
 * Jika dengan cara seperti jelas akan membuat programmer sulit, jika ada propery yang baru.
 *  Karena kita  bisa aja tidak tau object nya itu disimpan di mana saja
*/
const user = new User("Fajar", "fajar45", "123", "fajar@gmail.com", "1234");
const user1 = new User("Fajar", "fajar45", "123", "fajar@gmail.com", "1234");
const use2 = new User("Fajar", "fajar45", "123", "fajar@gmail.com", "1234");