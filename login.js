// File: api/login.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email dan password wajib diisi' });
    }
  
    // Simulasi verifikasi (gunakan database nyata di produksi)
    console.log('Login:', { email, password });
  
    // Anggap login selalu berhasil untuk awal
    return res.status(200).json({ message: 'Login berhasil' });
  }
  