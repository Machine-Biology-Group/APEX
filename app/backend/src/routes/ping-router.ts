import Router from '@koa/router';

const router = new Router();

const handlePing = (ctx: Router.RouterContext) => {
    ctx.body = { result: "pong" };
};

router.get('/ping', handlePing);

export default router; 