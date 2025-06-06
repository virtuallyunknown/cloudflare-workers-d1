import { buildReact } from '@virtuallyunknown/esbuild';
import { copyFile, mkdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });

async function build() {
    await Promise.all([
        copyFile('src/index.html', 'dist/index.html'),
        copyFile('src/index.css', 'dist/index.css'),
        buildReact({
            entryPoints: ['src/index.tsx'],
            outdir: 'dist',
            env: 'prod',
        }),
    ]);
}

await build()