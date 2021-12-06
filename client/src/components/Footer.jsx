import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_in">
      <p>2021 Kim Capilla Gabbert</p>
        <div className="footer_connect">
        <p>Connect With Me</p>
        <LinkedInIcon />
        <TwitterIcon />
        <GitHubIcon />
        </div>
      </div>
    </div>
  )
}
