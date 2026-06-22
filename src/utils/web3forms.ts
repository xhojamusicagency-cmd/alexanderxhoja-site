// Web3Forms lead delivery.
//
// Get a free access key instantly at https://web3forms.com (enter
// pianowithalexander@gmail.com — no account needed). It is a PUBLIC key,
// safe to ship in the client bundle. Submissions are emailed straight to
// that inbox, so the visitor never has to open a mail app and hit "send".
//
// Until a key is set below, submitToWeb3Forms() returns false and callers
// fall back to a pre-filled mailto: draft, so a lead is never silently lost.
export const WEB3FORMS_ACCESS_KEY = '';

export async function submitToWeb3Forms(fields: Record<string, string>): Promise<boolean> {
  if (!WEB3FORMS_ACCESS_KEY) return false;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = await res.json();
    return data?.success === true;
  } catch {
    return false;
  }
}
