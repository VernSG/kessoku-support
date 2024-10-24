import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../../../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  Ryo
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/docs/commands">
                  /commands
                </Link>
              </li>
              <li>
                <Link className="p-color" href="/support">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="/support">
                  /discord-server
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://github.com/VernSG"
                className="h-color no-decoration"
              >
                VernSG
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="/docs/tos">
              /TermsOfService
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://github.com/VernSG"
            >
              /source-code
            </Link>
            <Link className="p-color no-decoration" href="/docs/privacy">
              /privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
