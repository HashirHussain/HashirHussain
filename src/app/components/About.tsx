import React from 'react'

const LinkedInAction = () => {
    return (
        <a
            className="underline-offset-4"
            rel="noreferrer nofollow noopener"
            href="https://www.linkedin.com/in/hashir-hussain/"
            target="_blank"
        >
            LinkedIn
        </a>
    );
};

const EmailAction = () => {
    return (
        <a
            className="underline-offset-4"
            rel="noreferrer nofollow noopener"
            href="mailto:hashir.hussain111@gmail.com"
        >
            hashir.hussain111@gmail.com
        </a >
    );
};

export default function About() {
    return (
        <>
            <div>
                <h1 className="text-3xl md:text-6xl tracking-wider">
                    <span className="font-semibold">Hashir</span> <span className="font-extralight">Hussain</span>
                </h1>
                <h2 className="md:text-xl">Full Stack Engineer</h2>
                <p className="italic text-xs font-semibold">
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#javaScript</span>
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#typeScript</span>
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#reactJs</span>
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#nodeJs</span>
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#angular</span>
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#nextJs</span>
                    <span className="mr-1 after:content-['-'] after:ml-0.5">#devOps</span>
                    <span className="mr-1">#agile</span>
                </p>
            </div>
            <div className="leading-loose [&_a]:font-bold [&_a]:underline">
                <p>
                    I&apos;m <strong>Hashir</strong>, Full Stack <strong>JavaScript</strong> Engineer.
                </p>
                <p>
                    My area of expertise is building web applications in various
                    JavaScript technologies.
                </p>
                <p>
                    I also take charge on leading team and defining the end-to-end
                    development process.
                </p>
                <p>
                    Currently working as a full-time Technical lead at <strong>HCL Technologies (India)</strong>.
                </p>
                <p>

                    Let&apos; connect on <LinkedInAction /> or via
                    email <EmailAction /><br /> I would be happy to hear from you!
                </p>
            </div>
        </>
    )
}
