import { auth } from '$lib/server/auth';
import { json, redirect } from '@sveltejs/kit';

export async function POST({ request }) {
  const response = await auth.api.signOut({
    headers: request.headers
  });

  return json(response);
}