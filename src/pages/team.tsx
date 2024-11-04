import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import HypeSquadBadge from "/badges/margins/hypesquad-bravery.svg";
import ActiveDeveloperBadge from "/badges/margins/active-developer.svg";
import Idle from "/badges/margins/idle.svg";
import Early from "/badges/margins/early-verified-bot-developer.svg";
import Bug from "/badges/margins/bug-hunter-lv1.svg";
import Avatar from "/public/avatar.webp";
import BannerImage from "/public/jembud.jpg";
import Image from "next/image";
import Footer from "@/components/ui/footer";

export default function TeamPage() {
  return (
    <>
      <div
        className="flex astro-G3JJ5IRR card astro-5DD63B5N"
        style={{ gap: "0rem" }}
      >
        <div className="top-section astro-QLFJKSAO">
          <header className="astro-QLFJKSAO">
            <div
              className="upper astro-BCR4GW6E"
              style={{
                height: "210px",
                width: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={BannerImage}
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
                quality={100}
                className="astro-BCR4GW6E banner"
              />
            </div>
          </header>
          <div
            className="relative stick astro-DTRUHEB4 astro-IL4YI767"
            style={{ marginTop: "-50px" }}
          >
            <Image
              className="avatar levitate astro-DTRUHEB4 astro-IUSYWDOF"
              alt="Avatar"
              width={138}
              height={138}
              src={Avatar}
              loading="lazy"
              decoding="async"
              style={{ borderRadius: "50%", border: "4px solid #000" }}
            />
            <div
              className="flex astro-G3JJ5IRR status levitate astro-DTRUHEB4"
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
                gap: "0rem",
              }}
            >
              <div className="tooltip-wrapper astro-DTRUHEB4 astro-22G2KZDE astro-M2P5XHDA">
                <div className="tooltip-content astro-M2P5XHDA">
                  <div className="tooltip astro-M2P5XHDA" role="tooltip">
                    Idle
                  </div>
                  <div className="arrow astro-M2P5XHDA"></div>
                </div>
                <Image
                  src={Idle}
                  alt="Do Not-disturb"
                  width={24}
                  height={24}
                  className="status astro-22G2KZDE"
                />
              </div>
            </div>
            <div className="badge-wrapper badges astro-DTRUHEB4 astro-P646MY2Q">
              <Image
                src={HypeSquadBadge}
                className="badge astro-35ZD7XM4"
                alt="HypeSquad Bravery"
              />
              <Image
                src={Bug}
                className="badge astro-35ZD7XM4"
                alt="Bug Hunter"
              />
              <Image
                src={Early}
                className="badge astro-35ZD7XM4"
                alt="Early Verified Bot Developer"
              />
              <Image
                src={ActiveDeveloperBadge}
                className="badge astro-35ZD7XM4"
                alt="Active Developer"
              />
            </div>
          </div>
          <div
            className="space astro-5XRSOXPC"
            style={{ marginTop: "4.75rem" }}
          ></div>
        </div>
        <div className="card astro-HSVMXAXI">
          <div className="info astro-PUDIKQXY">
            <div className="nickname astro-PUDIKQXY">YN</div>
            <div className="username astro-PUDIKQXY">panggilajasyris</div>
          </div>
          <hr
            className="divider astro-VXJCJ4QH"
            style={{ marginTop: "1rem", marginBottom: "0rem" }}
          />
          <div className="scrollbar astro-UOIGRB3U">
            <div className="offset astro-UOIGRB3U">
              <section className="section astro-5V3L7MEG">
                <h4 className="label astro-5V3L7MEG">About Me</h4>
                <main className="normalize">
                  <p>
                    Hi, my name is Yusuf, and I'm a programmer. I own such
                    projects as <a href="https://yusufs.me/">Example</a> and{" "}
                    <a href="mailto:snexmania76@gmail.com">
                      snexmania76@gmail.com
                    </a>{" "}
                    and developer of{" "}
                    <a href="https://kessoku-support.vercel.app/">Ryo Bot</a>.
                  </p>
                  <p>
                    I mostly work with{" "}
                    <a href="https://discord.gg/discord-developers">here</a>
                  </p>
                </main>
              </section>
              <section className="section astro-5V3L7MEG">
                <h4 className="label astro-5V3L7MEG">Roles</h4>
                <div
                  className="flex astro-G3JJ5IRR"
                  style={{ flexWrap: "wrap", gap: "0.25rem" }}
                >
                  <div
                    className="flex astro-G3JJ5IRR role astro-I5ISU62C"
                    style={{ alignItems: "center", gap: "0rem" }}
                  >
                    <div
                      className="color astro-I5ISU62C"
                      style={{ backgroundColor: "#fffb00" }}
                    ></div>
                    <span
                      className="astro-I5ISU62C"
                      style={{ color: "#fffb00" }}
                    >
                      Software Engineer
                    </span>
                  </div>
                  <div
                    className="flex astro-G3JJ5IRR role astro-I5ISU62C"
                    style={{ alignItems: "center", gap: "0rem" }}
                  >
                    <div
                      className="color astro-I5ISU62C"
                      style={{ backgroundColor: "#236b9b" }}
                    ></div>
                    <span
                      className="astro-I5ISU62C"
                      style={{ color: "#236b9b" }}
                    >
                      He/him
                    </span>
                  </div>
                  <div
                    className="flex astro-G3JJ5IRR role astro-I5ISU62C"
                    style={{ alignItems: "center", gap: "0rem" }}
                  >
                    <div
                      className="color astro-I5ISU62C"
                      style={{ backgroundColor: "#ffecc1" }}
                    ></div>
                    <span
                      className="astro-I5ISU62C"
                      style={{ color: "#ffecc1" }}
                    >
                      Just Normal Dev
                    </span>
                  </div>
                </div>
              </section>
              <hr
                className="divider astro-VXJCJ4QH"
                style={{ marginTop: "0rem", marginBottom: "0.75rem" }}
              />
              <div className="grid astro-S2F4MTJ7">
                <div
                  className="flex astro-G3JJ5IRR connection astro-UBXOC6MX"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0rem",
                  }}
                >
                  <div
                    className="flex astro-G3JJ5IRR astro-UBXOC6MX"
                    style={{ alignItems: "center", gap: "0.5rem" }}
                  >
                    <div className="tooltip-wrapper astro-UBXOC6MX astro-M2P5XHDA">
                      <div className="tooltip-content astro-M2P5XHDA">
                        <div className="tooltip astro-M2P5XHDA" role="tooltip">
                          GitHub
                        </div>
                        <div className="arrow astro-M2P5XHDA"></div>
                      </div>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        className="icon astro-UBXOC6MX"
                      />
                    </div>
                    <div
                      className="flex astro-G3JJ5IRR astro-UBXOC6MX"
                      style={{ alignItems: "center", gap: "0.25rem" }}
                    >
                      <span className="username astro-UBXOC6MX">VernSG</span>
                      <div className="tooltip-wrapper astro-Z4KSY3LW astro-M2P5XHDA">
                        <div className="tooltip-content astro-M2P5XHDA">
                          <div
                            className="tooltip astro-M2P5XHDA"
                            role="tooltip"
                          >
                            Verified Connection
                          </div>
                          <div className="arrow astro-M2P5XHDA"></div>
                        </div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="verified-icon astro-Z4KSY3LW"
                        >
                          <g
                            clipPath="url(#clip0_84_2)"
                            className="astro-Z4KSY3LW"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 8.00002C16 8.79002 14.72 9.38002 14.48 10.09C14.24 10.8 14.92 12.09 14.48 12.68C14.04 13.27 12.64 13.03 12.02 13.48C11.4 13.93 11.23 15.32 10.48 15.57C9.73 15.82 8.81 14.77 8.01 14.77C7.21 14.77 6.26 15.77 5.54 15.57C4.82 15.37 4.62 13.93 4 13.48C3.38 13.03 2 13.3 1.54 12.68C1.08 12.06 1.77 10.84 1.54 10.09C1.31 9.34002 0 8.79002 0 8.00002C0 7.21002 1.28 6.62002 1.52 5.91002C1.76 5.20002 1.08 3.91002 1.52 3.32002C1.96 2.73002 3.37 2.97002 4 2.52002C4.63 2.07002 4.78 0.68002 5.53 0.40002C6.28 0.12002 7.2 1.23002 8 1.23002C8.8 1.23002 9.75 0.23002 10.47 0.43002C11.19 0.63002 11.38 2.07002 12 2.52002C12.62 2.97002 14 2.70002 14.46 3.32002C14.92 3.94002 14.23 5.16002 14.46 5.91002C14.69 6.66002 16 7.21002 16 8.00002Z"
                              fill="#4E5058"
                              className="astro-Z4KSY3LW"
                            ></path>
                            <path
                              d="M7.4 11.5699L4 9.0199L5 7.6599L7 9.1899L10.64 4.3999L12 5.3999L7.4 11.5699Z"
                              fill="white"
                              className="astro-Z4KSY3LW"
                            ></path>
                          </g>
                          <defs className="astro-Z4KSY3LW">
                            <clipPath
                              id="clip0_84_2"
                              className="astro-Z4KSY3LW"
                            >
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                className="astro-Z4KSY3LW"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <a
                    className="link astro-Z6PRUQNN"
                    href="https://github.com/VernSG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
