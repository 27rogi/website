export default defineEventHandler(async (event) => {
  const body = await getQuery(event);
  if (body && (!body.organization || !body.repository)) {
    return {
      error: "No body",
    };
  }
  const { ghApiBase, ghApiToken } = useRuntimeConfig();
  const data = await $fetch(`/repos/${body.organization}/${body.repository}`, {
    baseURL: ghApiBase,
    headers: {
      Authorization: `Bearer ${ghApiToken}`,
    },
    method: "GET",
    retry: 3,
  });
  return data ?? null;
});
