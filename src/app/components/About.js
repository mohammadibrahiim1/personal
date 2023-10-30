import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen" id="about">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://i.ibb.co/8Pst2r2/profile-img.jpg"
            width={360}
            height={360}
            className="max-w-sm rounded-lg shadow-2xl mx-auto"
            alt="Picture of the author"
          />
          <div>
            <h5>Hello,My name is</h5>
            <h1 className="text-5xl font-bold"> Mohammad Ebrahim</h1>
            <h3 className="text-lg font-bold pb-4">
              MERN maestro weaving web wonders with MongoDB, Express, React,{" "}
              <br /> and Node.js.
            </h3>

            <button className="btn">Check Out My Resume</button>
          </div>
        </div>
      </div>

      <section className="skill_section">
        <h1>
          Hard <span>skills</span>
        </h1>

        <div className="skill_container">
          <div>
            <h2>HTML</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>CSS</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>Javascript</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>Tailwind Css/Bootstrap</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>React/Redux</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>Firebase</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>Mongodb/Mongoose</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div>
            <h2>Node.js/Express.js</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="212"
              height="30"
              viewBox="0 0 212 40"
              fill="none"
            >
              <path
                d="M32.8107 7.64017L21.1834 0.858838C19.2199 -0.286318 16.7802 -0.28624 14.8166 0.858838L3.1894 7.64017C1.22207 8.78743 0 10.927 0 13.2239V26.776C0 29.0729 1.22207 31.2125 3.18932 32.3598L14.8166 39.1411C16.7805 40.2865 19.2201 40.2861 21.1834 39.1411L32.8106 32.3598C34.7779 31.2125 36 29.0729 36 26.776V13.2239C36 10.9271 34.7779 8.78751 32.8107 7.64017ZM32.9099 26.776C32.9099 27.9592 32.2804 29.0613 31.267 29.6522L19.6397 36.4335C18.6282 37.0235 17.3717 37.0235 16.3602 36.4335L4.73292 29.6522C3.71959 29.0612 3.09013 27.9592 3.09013 26.776V13.2239C3.09013 12.0409 3.71959 10.9388 4.733 10.3478L16.3602 3.56649C17.3718 2.97649 18.6287 2.97673 19.6398 3.56649L31.2671 10.3477C32.2804 10.9388 32.9099 12.0408 32.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M76.8107 7.64017L65.1834 0.858838C63.2199 -0.286318 60.7802 -0.28624 58.8166 0.858838L47.1894 7.64017C45.2221 8.78743 44 10.927 44 13.2239V26.776C44 29.0729 45.2221 31.2125 47.1893 32.3598L58.8166 39.1411C60.7805 40.2865 63.2201 40.2861 65.1834 39.1411L76.8106 32.3598C78.7779 31.2125 80 29.0729 80 26.776V13.2239C80 10.9271 78.7779 8.78751 76.8107 7.64017ZM76.9099 26.776C76.9099 27.9592 76.2804 29.0613 75.267 29.6522L63.6397 36.4335C62.6282 37.0235 61.3717 37.0235 60.3602 36.4335L48.7329 29.6522C47.7196 29.0612 47.0901 27.9592 47.0901 26.776V13.2239C47.0901 12.0409 47.7196 10.9388 48.733 10.3478L60.3602 3.56649C61.3718 2.97649 62.6287 2.97673 63.6398 3.56649L75.2671 10.3477C76.2804 10.9388 76.9099 12.0408 76.9099 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M120.811 7.64017L109.183 0.858838C107.22 -0.286318 104.78 -0.28624 102.817 0.858838L91.1894 7.64017C89.2221 8.78743 88 10.927 88 13.2239V26.776C88 29.0729 89.2221 31.2125 91.1893 32.3598L102.817 39.1411C104.78 40.2865 107.22 40.2861 109.183 39.1411L120.811 32.3598C122.778 31.2125 124 29.0729 124 26.776V13.2239C124 10.9271 122.778 8.78751 120.811 7.64017ZM120.91 26.776C120.91 27.9592 120.28 29.0613 119.267 29.6522L107.64 36.4335C106.628 37.0235 105.372 37.0235 104.36 36.4335L92.7329 29.6522C91.7196 29.0612 91.0901 27.9592 91.0901 26.776V13.2239C91.0901 12.0409 91.7196 10.9388 92.733 10.3478L104.36 3.56649C105.372 2.97649 106.629 2.97673 107.64 3.56649L119.267 10.3477C120.28 10.9388 120.91 12.0408 120.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M164.811 7.64017L153.183 0.858838C151.22 -0.286318 148.78 -0.28624 146.817 0.858838L135.189 7.64017C133.222 8.78743 132 10.927 132 13.2239V26.776C132 29.0729 133.222 31.2125 135.189 32.3598L146.817 39.1411C148.78 40.2865 151.22 40.2861 153.183 39.1411L164.811 32.3598C166.778 31.2125 168 29.0729 168 26.776V13.2239C168 10.9271 166.778 8.78751 164.811 7.64017ZM164.91 26.776C164.91 27.9592 164.28 29.0613 163.267 29.6522L151.64 36.4335C150.628 37.0235 149.372 37.0235 148.36 36.4335L136.733 29.6522C135.72 29.0612 135.09 27.9592 135.09 26.776V13.2239C135.09 12.0409 135.72 10.9388 136.733 10.3478L148.36 3.56649C149.372 2.97649 150.629 2.97673 151.64 3.56649L163.267 10.3477C164.28 10.9388 164.91 12.0408 164.91 13.2239V26.776Z"
                fill="#445964"
              />
              <path
                d="M208.811 7.64017L197.183 0.858838C195.22 -0.286318 192.78 -0.28624 190.817 0.858838L179.189 7.64017C177.222 8.78743 176 10.927 176 13.2239V26.776C176 29.0729 177.222 31.2125 179.189 32.3598L190.817 39.1411C192.78 40.2865 195.22 40.2861 197.183 39.1411L208.811 32.3598C210.778 31.2125 212 29.0729 212 26.776V13.2239C212 10.9271 210.778 8.78751 208.811 7.64017ZM208.91 26.776C208.91 27.9592 208.28 29.0613 207.267 29.6522L195.64 36.4335C194.628 37.0235 193.372 37.0235 192.36 36.4335L180.733 29.6522C179.72 29.0612 179.09 27.9592 179.09 26.776V13.2239C179.09 12.0409 179.72 10.9388 180.733 10.3478L192.36 3.56649C193.372 2.97649 194.629 2.97673 195.64 3.56649L207.267 10.3477C208.28 10.9388 208.91 12.0408 208.91 13.2239V26.776Z"
                fill="#445964"
                fillOpacity="0.2"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
