import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// This will be deprecated in favor of the use:enhance
export const POST: RequestHandler = async ({ locals }) => {

  const { error: err } = await locals.sb.auth.signOut()

  if (err) {
    throw error(500, 'Something went wrong, logging you out')
  }
  throw redirect(303, '/')

};