import { SandpackClient } from '@codesandbox/sandpack-client';
import './src/assets/main.css';

const client = new SandpackClient('#preview', {
    files: {
        '/index.js': {
            code: `console.log(require('uuid'))`
        }
    },
    entry: '/index.js',
    dependencies: {
        uuid: 'latest'
    }
});
