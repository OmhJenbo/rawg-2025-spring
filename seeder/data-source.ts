import "reflect-metadata";
import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { Store } from "./entities/Store";
import { ParentPlatform } from "./entities/ParentPlatform";
// import { GameOriginal } from "./entities/GameOriginal";

export const AppDataSource = new DataSource({
  type: "mysql",           // or 'postgres', 'sqlite', etc.
  host: "localhost",
  port: 3307,
  username: "root",
  password: "123456",
  database: "rawgDatabase",
  synchronize: true,       // set to 'false' in production to avoid unintended schema changes
  logging: false,
  entities: [
    Game,
    Genre,
    ParentPlatform,
    Store,
  ],
  migrations: [],
  subscribers: [],
});


