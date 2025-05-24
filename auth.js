const SUPABASE_URL = 'https://pmbpaxvczqgrqzclikon.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYnBheHZjenFncnF6Y2xpa29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMDEwMDksImV4cCI6MjA2MzY3NzAwOX0.UV3lRlr9O8R7sHUnAiGmmf24fT-S0XlTre3xqFyoIXc'
const supabase = supabase.createClient(supabaseUrl, supabaseKey)

async function handleRegister(e) {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { user, error } = await supabase.auth.signUp({ email, password })

  if (error) {
    alert('Gagal daftar: ' + error.message)
  } else {
    alert('Berhasil daftar. Silakan login.')
    window.location.href = "login.html"
  }
}

async function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { user, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    alert('Login gagal: ' + error.message)
  } else {
    alert('Login berhasil!')
    // simpan session kalau mau
  }
}
