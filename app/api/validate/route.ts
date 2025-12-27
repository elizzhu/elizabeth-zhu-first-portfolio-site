import { NextResponse } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'secret123'

export async function POST(request: Request) {
  const { password } = await request.json()
  if (password === PASSWORD) {
    const response = NextResponse.json({ success: true })
    const date = new Date()
    date.setDate(date.getDate() + 1)
    response.cookies.set('site-unlocked', '1', {
      httpOnly: true,
      path: '/',
      sameSite: 'strict',
      expires: date,
    })
    return response
  }
  return NextResponse.json({ message: 'Invalid password' }, { status: 401 })
}
