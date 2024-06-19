import dotenv from 'dotenv'
dotenv.config()


export const URLS = {
    C_SAUCDEMO : process.env.ENV_SAUCEDEMO_URL
}


export const CREDENTIALS = {
    C_SAUCDEMO_USER : process.env.ENV_SAUCEDEMO_USER,
    C_SAUCDEMO_PASS : process.env.ENV_SAUCEDEMO_PASS,
}