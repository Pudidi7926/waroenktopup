// File: api/register.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email dan password wajib diisi' });
    }
  
    // Simulasi penyimpanan ke database (gunakan DB asli di produksi)
    console.log('Register:', { email, password });
  
    return res.status(200).json({ message: 'Registrasi berhasil' });
  }
  