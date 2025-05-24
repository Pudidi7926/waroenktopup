// Ganti ini dengan informasi dari Supabase project kamu
const supabaseUrl = 'https://pmbpaxvczqgrqzclikon.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYnBheHZjenFncnF6Y2xpa29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMDEwMDksImV4cCI6MjA2MzY3NzAwOX0.UV3lRlr9O8R7sHUnAiGmmf24fT-S0XlTre3xqFyoIXc';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert('Login gagal: ' + error.message);
  } else {
    alert('Berhasil login!');
    window.location.href = 'index.html';
  }
});