import type { StatsData } from "~/types/api";

export default defineEventHandler(async () => {
  const { ghApiBase, ghApiToken } = useRuntimeConfig();
  const baseFetchSettings: any = {
    baseURL: ghApiBase,
    headers: {
      Authorization: `Bearer ${ghApiToken}`,
    },
    method: "GET",
    retry: 3,
  };
  const [user, stars] = await Promise.all([
    await $fetch<StatsData>("/users/27rogi", { ...baseFetchSettings }),
    await $fetch<number>("/users/27rogi/repos?type=public&per_page=50&sort=pushed", { ...baseFetchSettings }).then((res: any) => {
      return (res as Array<any>)
        .filter((repo: any) => repo?.stargazers_count > 0)
        .reduce((sum, repo) => sum + repo?.stargazers_count, 0);
    }),
  ]);
  if (!user || !stars) {
    return null;
  }
  const {
    created_at,
    followers,
    public_repos,
    total_stars,
  } = { ...user, total_stars: stars };
  return {
    created_at,
    followers,
    public_repos,
    total_stars,
  };
});
