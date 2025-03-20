
/** This file is generated by the generate-typedefs.ts script. Do not edit it directly. */

interface FinickyUtils {
    matchHostnames: (hostnames: string[]) => (url: URL) => boolean;
    getModifierKeys: () => {
        shift: boolean;
        option: boolean;
        command: boolean;
        control: boolean;
        capsLock: boolean;
        fn: boolean;
    };
    getSystemInfo: () => {
        localizedName: string;
        name: string;
    };
    getPowerInfo: () => {
        isCharging: boolean;
        isConnected: boolean;
        percentage: number | null;
    };
}

declare global {
    const finicky: FinickyUtils
}

export type ProcessInfo = {
    name: string;
    bundleId: string;
    path: string;
};

export { ProcessInfo };

type OpenUrlOptions = {
    opener: ProcessInfo | null;
};

export { OpenUrlOptions };

type BrowserResolver = (args_0: URL, args_1: OpenUrlOptions) => string | {
    name: string;
    appType?: ("appName" | "bundleId" | "path" | "none") | undefined;
    openInBackground?: boolean | undefined;
    profile?: string | undefined;
    args?: string[] | undefined;
};

export { BrowserResolver };

type ConfigOptions = {
    urlShorteners?: string[] | undefined;
    /** Log to file on disk */
    logRequests?: boolean | undefined;
    /** Check for updates */
    checkForUpdates?: boolean | undefined;
};

export { ConfigOptions };

type UrlMatcherFunction = (args_0: URL, args_1: OpenUrlOptions) => boolean;

export { UrlMatcherFunction };

type UrlMatcher = string | RegExp | UrlMatcherFunction;

export { UrlMatcher };

type UrlTransformer = (args_0: URL, args_1: OpenUrlOptions) => string | URL;

export { UrlTransformer };

type UrlTransformSpecification = string | URL | UrlTransformer;

export { UrlTransformSpecification };

type UrlRewriteRule = {
    match: UrlMatcher | UrlMatcher[];
    url: UrlTransformSpecification;
};

export { UrlRewriteRule };

type BrowserSpecification = null | string | {
    name: string;
    appType?: ("appName" | "bundleId" | "path" | "none") | undefined;
    openInBackground?: boolean | undefined;
    profile?: string | undefined;
    args?: string[] | undefined;
} | BrowserResolver;

export { BrowserSpecification };

type BrowserHandler = {
    match: UrlMatcher | UrlMatcher[];
    browser: BrowserSpecification;
};

export { BrowserHandler };

/**
  This represents the full `~/.finicky.js` configuration object

  Example usage:

  ```js
   export default = {
     defaultBrowser: "Google Chrome",
     options: {
       logRequests: false
     },
     handlers: [{
       match: "example.com*",
       browser: "Firefox"
     }]
   }
  ```
 */
type FinickyConfig = {
    /** The default browser or app to open for urls where no other handler */
    defaultBrowser: null | string | {
        name: string;
        appType?: ("appName" | "bundleId" | "path" | "none") | undefined;
        openInBackground?: boolean | undefined;
        profile?: string | undefined;
        args?: string[] | undefined;
    } | BrowserResolver;
    options?: ConfigOptions | undefined;
    /** An array of rewriter rules that can change the url being opened */
    rewrite?: UrlRewriteRule[] | undefined;
    /** An array of handlers to select which browser or app to open for urls */
    handlers?: BrowserHandler[] | undefined;
};

export { FinickyConfig };
