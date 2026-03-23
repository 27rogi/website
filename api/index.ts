import Elysia from "elysia";
import repo from "./routes/repo";
import stats from "./routes/stats";

export default () => new Elysia() 
  .use(repo)
  .use(stats)
  .get('/', () => {
    const isBun = typeof Bun !== 'undefined';
    if (!isBun) {
      console.warn(`Elysia server was started outside of Bun environment, some features may not work as expected!!!`);
    }

    const bunVersion = isBun ? `${Bun.version} (${Bun.revision})` : null;
    return {
      runtime: {
        bun: bunVersion,
        // eslint-disable-next-line node/prefer-global/process
        os: typeof process !== 'undefined' ? process.platform : 'unknown',
      },
      status: "ok"
    }
  }) 