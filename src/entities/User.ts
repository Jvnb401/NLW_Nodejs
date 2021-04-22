import { Entity, PrimaryColumn, CreateDateColumn, Column } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };