import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <img src="/images/LogoAspro.png" alt="" className='w-48' />
            <Link href="/" className="block" aria-label="Cruip">
              {/* Logo 
              <img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0idXVpZC1hZTE2MjgyMi1kMTdlLTQyNzUtYmQxZS0wNDNkMTcwODlkOGUiIGRhdGEtbmFtZT0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC51dWlkLWJiMTdmZTI5LTJhNWYtNDVjYi05ZDdkLWM3NmNiNWE1ZDRhYyB7CiAgICAgICAgZmlsbDogdXJsKCN1dWlkLWRhYTMxODQxLTBkZGMtNGJiMC1iYTZjLTJiNDhhNmFhOWU1NSk7CiAgICAgIH0KCiAgICAgIC51dWlkLThjZDEyOTYyLTkxMjgtNDZjYy1hYTA5LWU4YWY5OGRhNWZlNiB7CiAgICAgICAgZmlsbDogIzk5OTsKICAgICAgfQoKICAgICAgLnV1aWQtNDlkYTBkZTQtYzY1Yi00MjMyLWI0M2MtNjlhOTRmYWNiMGZjIHsKICAgICAgICBmaWxsOiAjMDM2OwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ1dWlkLWRhYTMxODQxLTBkZGMtNGJiMC1iYTZjLTJiNDhhNmFhOWU1NSIgZGF0YS1uYW1lPSJEZWdyYWRhZG8gc2luIG5vbWJyZSAxMCIgeDE9IjMyNy4yMiIgeTE9IjU5Ni44MiIgeDI9IjMzNy43NCIgeTI9IjIyMy41MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDciIHN0b3AtY29sb3I9IiMwMzYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJ1dWlkLWJiMTdmZTI5LTJhNWYtNDVjYi05ZDdkLWM3NmNiNWE1ZDRhYyIgZD0iTTQ1Ny44Myw1MDAuMjljLTQuMDItLjg1LTYuNTUuMDQtOC45OSwxLjEzLTI3LjgxLDEyLjQ3LTU1LjUzLDI1LjE0LTgzLjQ2LDM3LjMzLTUuOTcsMi42MS0xMi4wMiw2LjM1LTE5LS4zMy01OC4yMy01NS43NC04OS4wNC0xMjMuODgtOTMuODctMjA0LjEyLS41MS04LjUxLDIuNzMtMTMuMzYsMTAuMDUtMTcuNDksMjkuNi0xNi43Myw1OC44OS0zNC4wMSw4OC4zMS01MS4wNywyMy45My0xMy44OCw0Ny44OC0yNy43NSw3Mi42Mi00Mi4wOS0uMTEtLjIzLS4yLS40Ny0uMjktLjcxbDkuMzQsMTYuMTcsNDMuOTgtNzYuMTdoLTg3Ljk2bDguODUsMTUuMzNjLTIuMTguNDQtNC40LDEuMzgtNi44LDIuNzgtNjAuMTQsMzQuOTEtMTIwLjM2LDY5LjY5LTE4MC44MywxMDQuMDMtOC42NCw0LjkxLTEyLjU2LDEwLjU1LTEwLjk1LDIwLjI0LDUuMjksMzEuODcsOC4wNCw2NC4zOSwxNi4yLDk1LjQ5LDE4LjY3LDcxLjExLDU2LjY2LDEzMS40LDEwOS42OSwxODIuMzIsNC45OCw0Ljc5LDkuMiw2LjE3LDE1LjA3LDIuMjIsMjkuMTYtMTkuNjIsNTguNjMtMzguNzcsODcuNDQtNTguODgsMTAuOTUtNy42NCwyMC40My0xNy4zOSwzMC41OC0yNi4xOFoiLz4KICA8cGF0aCBjbGFzcz0idXVpZC00OWRhMGRlNC1jNjViLTQyMzItYjQzYy02OWE5NGZhY2IwZmMiIGQ9Ik01OTIuMjEsMjg1LjYxYy0zMi4zNC0xOC4yLTY0Ljc3LTM2LjMxLTk2LjIzLTU1Ljk2LTEzLjI3LTguMjktMjMuMDYtOC4wOS0zNi40LjA0LTM5LjIsMjMuODctNzkuNDEsNDYuMDgtMTE5LjIyLDY4Ljk1LjE2LjQzLjMyLjg2LjQ5LDEuMjgsMy4yOC0uNjgsNi42MS0xLjE5LDkuODUtMi4wNiwzMC45NS04LjM2LDYxLjgtMTcuMSw5Mi45LTI0Ljg4LDUuNy0xLjQzLDEzLjMzLS44LDE4LjQxLDEuOTUsMjUuMTYsMTMuNiw0OS42MywyOC40OSw3NC42Nyw0Mi4zMyw3LjUsNC4xNSwxMC45NSw5LjIzLDkuNTgsMTcuNTgtMy42MSwyMi4wNi01LjQyLDQ0LjYxLTExLjE2LDY2LjEtMTguNSw2OS4yMi01OS41OCwxMjMuMTYtMTE2Ljc0LDE2NS4zNS0yMC4xMSwxNC44NC00MC43LDI5LjA0LTYyLjczLDQ0LjcyLDEyLjk3LDguNjYsMjQuNzgsMTcuMjcsMzcuMzcsMjQuNTEsMy42MiwyLjA4LDEwLjY3LDIuMDgsMTQuMTYtLjEyLDE1LjAyLTkuNDcsMzAuMDctMTkuMTgsNDMuNzMtMzAuNDgsOTQuOTgtNzguNTksMTQ0Ljc4LTE3OS44LDE1MC42LTMwMi44NC4zOC03Ljk5LTIuMi0xMi40OS05LjI3LTE2LjQ3WiIvPgogIDxwYXRoIGNsYXNzPSJ1dWlkLThjZDEyOTYyLTkxMjgtNDZjYy1hYTA5LWU4YWY5OGRhNWZlNiIgZD0iTTQyMy4xLDQwNGMxNS44Ny0xNC43OSwxNy45NS0zOC41NiwzLjc3LTUzLjktMTMuMzEtMTQuMzktMzcuNTItMTUuMDUtNTIuMzEtMS40Mi0xNS4wOSwxMy45MS0xNS40NiwzOS4yNy44NSw1My41NCw3LjgxLDYuODMsOS45MSwxMy44Myw5LjE5LDIzLjEyLS4zNiw0LjYxLS4wNiw5LjI4LS4wNywxMy45Mi0uMDEsNi45NiwwLDEzLjkyLS4wMiwyMC44OC0uMDMsOS45Nyw1LjI0LDE0Ljk3LDE0Ljg5LDE1LjM2LDkuNzguNCwxNS42Ni01LjM3LDE1Ljg0LTE1LjU3LjIzLTEzLjUzLS41Ni0yNy4xMy41MS00MC41OC40My01LjM1LDMuNDQtMTEuNyw3LjM2LTE1LjM1WiIvPgo8L3N2Zz4=" />
              <svg className="w-8 h-8 fill-current text-blue-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
              */}
              
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-blue-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
