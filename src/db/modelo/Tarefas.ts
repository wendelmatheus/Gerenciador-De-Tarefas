import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "tarefas" })
export class Tarefas {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    completed!: boolean
}