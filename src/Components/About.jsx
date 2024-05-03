/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an Electrical and Electronics Engineering student studying at Strathmore University. I am passionate about leveraging cutting-edge technologies to create innovative solutions that address real-world challenges.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Programming: C, C++, Micropython (AVR, ESP32, STM32)",
  "Embedded Systems: RTOS, Wired/Wireless Protocols",
  "Circuit Simulation & PCB Design",
  "Cloud Technologies: MQTT, HTTP, CoAP, Virtual Machines",
  "Databases & APIs: InfluxDB, MongoDB, MariaDB, REST, GraphQL",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am deeply committed to solving challenges through the lens of first principles. With an analytical mind, I approach problems strategically, breaking down complexities into fundamental components. This approach not only enhances my problem-solving capabilities but also allows me to create innovative and enduring solutions. In both my professional and personal pursuits, I strive to embody the essence of engineering from first principles to drive meaningful impact and foster growth.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
