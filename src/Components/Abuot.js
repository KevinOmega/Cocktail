import React from "react";
import { social } from "../social";

const About = () => {
  return (
    <section id="about">
      <div className="contact">
        <h2>Do you have any problem?</h2>
        <div className="contact-center">
          <article>
            <label htmlFor="first-name">First Name</label>
            <input type="text" placeholder="first name" id="first-name" />
          </article>
          <article>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" placeholder="last name" id="last-name" />
          </article>
          <article>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="user@gmail.com" id="email" />
          </article>
          <article>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" placeholder="+591 77554521" />
          </article>
          <article id="textarea">
            <label htmlFor="area">Comment here</label>
            <textarea
              type="text"
              placeholder="I can't see the items "
              id="area"
            />
          </article>
        </div>
      </div>
      <footer>
        <div className="social">
          <ul>
            {social.map((item) => {
              const { id, icon, url } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default About;
