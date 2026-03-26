const GITHUB_CLIENT_ID = 'YOUR_CLIENT_ID'
const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=read:user,user:email`

export default function Login() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Palanquin+Dark:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .login-page {
          width: 100vw;
          height: 100vh;
          background: #F0F4F8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .login-card {
          background: #fff;
          width: min(1200px, calc(100vw - 80px));
          height: min(700px, calc(100vh - 80px));
          border-radius: 32px;
          box-shadow: 0px 25px 50px -12px rgba(226, 232, 240, 0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          position: relative;
        }

        /* ── metR CSS logo ── */
        .metr-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 100px;
          border: 3px solid #1E3A5F;
          border-radius: 4px;
          position: relative;
        }

        .metr-logo-text {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 42px;
          line-height: 1;
          letter-spacing: -1px;
          user-select: none;
        }

        .metr-met { color: #4A90B8; }
        .metr-r   { color: #E8604A; }

        /* ── GitHub button ── */
        .github-btn {
          display: flex;
          align-items: center;
          gap: 9px;
          background: #5F4050;
          color: #fff;
          border: none;
          border-radius: 14px;
          width: 190px;
          height: 46px;
          padding: 0 20px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          text-decoration: none;
          justify-content: center;
          transition: opacity 0.18s;
          white-space: nowrap;
        }
        .github-btn:hover { opacity: 0.87; }

        /* ── tagline ── */
        .tagline {
          font-family: 'Palanquin Dark', sans-serif;
          font-size: 20px;
          color: #5F4050;
          letter-spacing: 0.01em;
        }

        /* ── footer ── */
        .login-footer {
          position: absolute;
          bottom: 28px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #90A1B9;
        }

        /* ── responsive ── */
        @media (max-width: 520px) {
          .login-card { border-radius: 20px; gap: 22px; }
          .metr-logo { width: 90px; height: 76px; }
          .metr-logo-text { font-size: 32px; }
          .tagline { font-size: 15px; }
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">

          {/* CSS-drawn metR logo — always crisp */}
          <div className="metr-logo">
            <span className="metr-logo-text">
              <span className="metr-met">met</span><span className="metr-r">R</span>
            </span>
          </div>

          <a href={GITHUB_OAUTH_URL} className="github-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Sign with GitHub
          </a>

          <p className="tagline">Migrate • Manage • Edit • Publish</p>

          <div className="login-footer">© 2025 Metapercept Technology Services LLP</div>
        </div>
      </div>
    </>
  )
}
