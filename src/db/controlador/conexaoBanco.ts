import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tarefas } from "../modelo/Tarefas";

const _AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "paodequeijo123",
    database: "exemplo",
    synchronize: true,
    logging: true,
    entities: [Tarefas],
    subscribers: [],
    migrations: [],
})

export const AppDataSource = _AppDataSource.initialize();