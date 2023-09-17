import { PUBLIC_RELEASE_URL } from "$env/static/public"
import type { PageLoad, PageLoadEvent } from "./$types";

export async function load({ fetch }: PageLoadEvent)  {
  const response = await fetch(PUBLIC_RELEASE_URL);
  const releases = await response.json();
  return { releases };
}
