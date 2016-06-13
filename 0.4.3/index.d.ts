// Type definitions for tsconfig-glob 0.4.3
// Project: https://github.com/wjohnsto/tsconfig-glob
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>

declare namespace tsconfigGlob {
    interface Options {
        /**
         * A relative path from cwd to the directory containing a tsconfig.json. If not specified, the '.' is used.
         */
        configPath?: string;
        /**
         * Typescript confiuration file name in `configPath` directory
         */
        configFileName?: string;
 
        /**
         * The current working directory, defaults to `process.cwd()`
         */
        cwd?: string;
 
        /**
         * The number of spaces to indent the tsconfig.json
         */
        indent?: number;
 
        /**
         * Output an empty files array (ignoring the specified globs)
         */
        empty?: boolean;
        
        /**
         * Asynchronous callback (default: true)
         */
        async?: boolean;
    }

    interface CallBack {
        (err: any): void;
    }

    export interface tsConfig {
        (options: Options, Function: CallBack): void;
    }
}

declare var tsconfigGlob: tsconfigGlob.tsConfig;
export = tsconfigGlob;