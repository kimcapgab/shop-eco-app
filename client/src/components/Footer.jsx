import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { cyan } from '@mui/material/colors';

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_in">
        <p>2021 Kim Capilla Gabbert</p>
        <div className="footer_connect">
          <p>Connect With Me</p>
          <a href="https://www.linkedin.com/in/kim-capilla-gabbert-cpa-360806106/" target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ color: cyan[800] }}  />
          </a>
          <a href="https://twitter.com/Kimcapgab" target="_blank" rel="noreferrer">
            <TwitterIcon sx={{ color: cyan[800] }}  />
          </a>
          <a href="https://github.com/kimcapgab" target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ color: cyan[800] }}  />
          </a>
        </div>
      </div>
    </div>
  );
}
