import logo from "./assets/chef-claude-icon.png"
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img src={logo} />
      <h1>Chef Claude</h1>
    </header>
  )
}
