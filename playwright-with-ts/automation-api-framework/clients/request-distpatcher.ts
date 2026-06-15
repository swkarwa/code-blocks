import { APIRequestContext, APIResponse, request } from '@playwright/test'

type RequestOptions = {
    endpoint: string,
    params?: Record<string, string>
    headers?: Record<string, string>,
    data?: unknown
}

export class RequestDispatcher {

    constructor(private context: APIRequestContext) { }
    static async create<T extends RequestDispatcher>(this: new (ctx: APIRequestContext) => T) {

        const baseurl = RequestDispatcher.getBaseUrl()
        const context = await request.newContext({
            baseURL: baseurl,
            extraHTTPHeaders: {
                'Content-Type': 'application/json'
            },
            ignoreHTTPSErrors: true
        })
        const instance = new this(context)
        return instance
    }

    private static getBaseUrl(): string {
        const { HOST, PORT, SSL_ENABLED } = process.env;
        if (!HOST || !PORT || !SSL_ENABLED) {
            console.error(`please provide all 3 variables , host , port and ssl_enabled`)
        }

        const details = `
            { 
                host=${HOST},
                port=${PORT},
                ssl=${SSL_ENABLED}
            }
        `
        console.log(`env details : 
                ${details}
            `)
        const protocol = SSL_ENABLED === 'false' ? 'http' : 'https'
        return `${protocol}://${HOST}:${PORT}`
    }

    public async get(options: RequestOptions): Promise<APIResponse> {
        const res = await this.context.get(options.endpoint, {
            headers: { ...options.headers },
            params: { ...options.params }
        })
        return res
    }
}