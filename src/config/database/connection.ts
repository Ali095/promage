
import mongoose, { Mongoose } from "mongoose";
import logger from "../../util/logger";

export const DBConnect = async (mongoUrl: string) => {
    const connectionP = new Promise<Mongoose>((res, rej) => {
        mongoose.connect(mongoUrl, { autoIndex: true, autoCreate: true, keepAlive: true })
            .then((ins) => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
                logger.info("Mongo connected!!!");
                logger.info(`Using mongo host '${mongoose.connection.host}' and port '${mongoose.connection.port}'`);
                return res(ins);
            },
            ).catch(err => {
                logger.error(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
                return rej(err);
            });
    });

    return connectionP;
};
