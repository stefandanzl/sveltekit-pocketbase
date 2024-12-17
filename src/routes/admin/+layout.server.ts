import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = async ({ locals, url }) => {

  try {
    await locals.pb.collection('users').authRefresh();
  } catch (e) {
    locals.pb.authStore.clear();
    throw redirect(302, '/' + url.search);
  }

  if (!locals.user || !locals.pb.authStore.isValid) {
    throw redirect(302, '/' + url.search);
  } 
//   else {
// 	return {
// 		user: locals.user
// 	}
//   }
}