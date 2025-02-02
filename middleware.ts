import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
  ignoredRoutes: [
    '/transformations/add/recolor',
    '/transformations/add/remove',
    '/transformations/add/fill',
    '/transformations/add/restore'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};