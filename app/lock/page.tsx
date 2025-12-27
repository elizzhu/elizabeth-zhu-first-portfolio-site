'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

export default function LockPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await fetch('/api/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      window.location.replace('/')
    } else {
      setError('Try again')
    }
  }

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#14B8A6]">Studio</p>
          <h1 className="font-serif text-[48px] lg:text-[64px] leading-tight mt-4">Password</h1>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-black/60 border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#CDCDCD] leading-relaxed text-sm">
            Enter the secret code to continue exploring the portfolio.
          </p>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              setError('')
            }}
            className="w-full px-5 py-4 rounded-full border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/40 outline-none"
            placeholder="Enter password"
            autoFocus
          />
          {error && <p className="text-rose-400 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-[#14B8A6] text-black font-semibold rounded-full transition hover:bg-[#0f8b7a]"
          >
            Unlock
          </button>
        </motion.form>
        <motion.p
          className="mt-8 text-xs text-[#666] uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Designed with intent
        </motion.p>
      </div>
    </main>
  )
}
