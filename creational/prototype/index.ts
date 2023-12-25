namespace PrototypePattern {
    class User {
        public name: string = '';
        public username: string = '';
        public password: string = '';
        public email: string = '';
        public phone: string = '';


        constructor(name: string = '', username: string = '', password: string = '', email: string = '', phone: string = '') {
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
        };

        public clone(): this {
            const clone = Object.assign({}, this);
            return clone;
        }
    }

    const user1 = new User('Rama Fajar Fadhillah', 'fajar45', 'password123', 'ramafajar@gmail.com', '0812345678');
    const user2 = user1.clone();
    const user3 = user1.clone();
    user3.password = '<!PasswordnyKuatBanget!/>';
    console.log(user2);
    console.log(user3);
}