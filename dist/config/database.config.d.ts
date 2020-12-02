declare const _default: (() => {
    type: string;
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    logging: string;
    logger: string;
    entities: string[];
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
