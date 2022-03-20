import "./header.style.css"
import { Link } from "react-router-dom"

export default function Header() {
 return (
  <header className="websiteHeader">
   <Link to="/">
   <img src="https://db3pap005files.storage.live.com/y4mSXeKgzNKSkhnILWUsvs9zPbxSAF0qzrIuj_Z_dLP1falv0eLDzETLU6Jaj9vRN52iCRRT7h05ZIle0x0UN7ZTyunye_Awi-nsaZR62AG3TbqKeh81BIShcoiw6gnCXc-mue2Vq1fkv25qOBUdoIGqQ9b75zqEzbNC39cU5b9HMTENFkuBBhXfUBFzYcmQ1OE?width=1117&height=208&cropmode=none" alt="he best retro games header" />
   </Link>
  </header>
 )
}