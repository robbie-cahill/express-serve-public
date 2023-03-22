import { Application } from 'express';
import { Options } from '../options.js';
export default function servePublic(app: Application, options: Options, callback: any): Promise<void>