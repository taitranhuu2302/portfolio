// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from "@edgio/core";
import { astroRoutes } from "@edgio/astro";
import { ASSET_CACHE_HANDLER, IMAGE_CACHE_HANDLER } from "./cache";

export default new Router()
  .match("/", ASSET_CACHE_HANDLER)
  .match("/work", ASSET_CACHE_HANDLER)
  .match("/about", ASSET_CACHE_HANDLER)
  .match("/404", ASSET_CACHE_HANDLER)
  .match("/_astro/:path*", ASSET_CACHE_HANDLER)
  .match("/assets/:path*", IMAGE_CACHE_HANDLER)
  .match("/assets/backgrounds/:path*", ASSET_CACHE_HANDLER)
  .match("/work/:path*", ASSET_CACHE_HANDLER)
  .use(astroRoutes);
