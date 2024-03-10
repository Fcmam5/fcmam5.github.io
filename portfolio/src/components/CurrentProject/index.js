import clsx from "clsx";

import Heading from "@theme/Heading";
import styles from "./style.module.css";

const projects = [
  {
    title: "Algeria Developer survey",
    description:
      "Running an anonymous survey to get insights about Algerian software engineering industry",
    link: "https://fcmam5.me/state-of-dz-swe-2024/",
  },
  {
    title: "Writing about data protection in Algeria",
    description:
      "Writing a blog about what I think I know about data protection culture and laws in Algeria",
    link: "#",
  },
];

function Project({ title, description, link }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
function CurrentProjects() {
  return (
    <section>
      <h2 className={styles.title}>Currently working on:</h2>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--3")}>
            {/* Not proud of this block, but it's better than spending hours hacking CSS */}
          </div>
          {projects.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentProjects;
