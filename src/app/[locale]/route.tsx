import { redirect } from 'next/navigation';

export async function GET() {
  return redirect('/en/pages/1');
}
