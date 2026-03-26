import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')
    if (!code) { navigate('/login'); return }

    fetch(`/api/auth/github/callback?code=${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('github_token', data.access_token)
          navigate('/')
        } else {
          navigate('/login')
        }
      })
      .catch(() => navigate('/login'))
  }, [navigate])

  return (
    <div style={{ minHeight: '100vh', background: '#F0F4F8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', color: '#5F4050' }}>
      Authenticating…
    </div>
  )
}
