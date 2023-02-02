import { Server, createServer } from 'http'
import e from 'express'

import { createApp } from './app'
import { exitLog } from './helpers'
import CONFIG from './config'

export const startServer = (app: e.Application): Server => {
	const httpServer = createServer(app)

	process
		.on('SIGINT', () => exitLog(null, 'SIGINT'))
		.on('SIGQUIT', () => exitLog(null, 'SIGQUIT'))
		.on('SIGTERM', () => exitLog(null, 'SIGTERM'))
		.on('uncaughtException', err => exitLog(err, 'uncaughtException'))
		.on('beforeExit', () => exitLog(null, 'beforeExit'))
		.on('exit', () => exitLog(null, 'exit'))

	return httpServer.listen({ port: CONFIG.APP.PORT }, (): void => {
		process.stdout.write(`⚙️ Application Environment: ${CONFIG.APP.ENV}\n`)
		process.stdout.write(`⏱ Started on: ${Date.now()}\n`)
		process.stdout.write(`🚀 BLOCKHOUSE-API Server ready at http://localhost:${CONFIG.APP.PORT}\n`)
	})
}

if (process.env.NODE_ENV !== 'test') {
	const app = createApp()
	startServer(app)
}
