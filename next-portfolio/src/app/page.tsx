import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";

export default function CanopyDemo() {
    return (
        <div
            style={{
                background: "black",
                minHeight: "100vh",
                width: "100vw",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
            }}
        >
            {/* Centered GIF */}
            <img
                src="/asciislower.gif"
                alt="ASCII Art"
                style={{
                    maxWidth: "30vw",
                    maxHeight: "30vh",
                    display: "block",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                }}
                draggable={false}
            />

            {/* Bottom-left info */}
            <div
                style={{
                    position: "absolute",
                    left: "2rem",
                    bottom: "2rem",
                    color: "white",
                    fontSize: "0.95rem",
                    opacity: 0.85,
                    lineHeight: 1.5,
                    maxWidth: "500px",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                }}
            >
                <div style={{ fontWeight: 300, fontSize: "0.9rem", marginBottom: "0.5em", display: "flex", alignItems: "center", gap: "0.5em" }}>
                    Dev Patel
                    <a
                        href="https://x.com/_devp"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", opacity: 0.85, fontSize: "1.1em", verticalAlign: "middle", marginLeft: "1em" }}
                        tabIndex={0}
                        aria-label="Twitter"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://github.com/devp19"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", opacity: 0.85, fontSize: "1.1em", verticalAlign: "middle", marginLeft: "0.2em" }}
                        tabIndex={0}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/devp19"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", opacity: 0.85, fontSize: "1.1em", verticalAlign: "middle", marginLeft: "0.2em" }}
                        tabIndex={0}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                <div style={{ fontWeight: 300, fontSize: "0.9rem", marginBottom: "0.5em" }}>
                    code, cognition &amp; applied research
                    <br />
                    automation analyst (s25) at
                    <a
                    target="_blank"
                    href="https://www.fidelity.com"
                        style={{
                            textDecoration: "underline",
                            fontWeight: 300,
                            fontSize: "0.9rem",
                            color: "white",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            opacity: 0.85,
                            marginLeft: "0.2em",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                        }}
                        tabIndex={-1}
                    >
                        fidelity investments <CgArrowTopRight />
                    </a>
                                        

                    <br />
                    co-founder & founding engineer at
                    <a target="_blank"
                    href="https://nextjs-resdex.vercel.app"
                        style={{
                            textDecoration: "underline",
                            fontWeight: 300,
                            fontSize: "0.9rem",
                            color: "white",
                            display: "inline-flex",
                            cursor: "pointer",
                            opacity: 0.85,
                            alignItems: "center",
                            marginLeft: "0.2em",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                        }}
                        tabIndex={-1}
                    >
                        resdex <CgArrowTopRight />

                    </a>
                    <br />
                    honours computer science at
                    <a target="_blank"
                    href="https://www.torontomu.ca/"
                        style={{
                            textDecoration: "underline",
                            fontWeight: 300,
                            fontSize: "0.9rem",
                            color: "white",
                            display: "inline-flex",
                            cursor: "pointer",
                            opacity: 0.85,
                            alignItems: "center",
                            marginLeft: "0.2em",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                        }}
                        tabIndex={-1}
                    >
                        torontomet <CgArrowTopRight />

                    </a>
                </div>
            </div>
        </div>
    );
}