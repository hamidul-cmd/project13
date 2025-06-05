import React from "react";
import herobgvideo from "../assets/herobgvideo.mp4";
import logo from "../assets/logo.png";

function Hero() {
  const nvlinks = [
    {
      id: 1,
      link: "#home",
      title: "Home",
    },
    {
      id: 2,
      link: "#listings",
      title: "Listings",
    },
    {
      id: 3,
      link: "#blog",
      title: "Blog",
    },
    {
      id: 4,
      link: "#pages",
      title: "Pages",
    },
    {
      id: 5,
      link: "#about",
      title: "About",
    },
    {
      id: 6,
      link: "#contact",
      title: "Contact",
    },
  ];
  return (
    <>
      <section className="h-screen w-screen relative">
        <video
          src={herobgvideo}
          className="h-full w-full object-cover object-bottom"
          muted
          autoPlay
          loop
        ></video>
        <div className="header__wrapper absolute top-0 left-0 w-full h-full">
        <header className=" w-full flex justify-between items-center py-6.7 px-14.5 mb-7.5">
          <ul className="flex text-white gap-7.5">
            {nvlinks.map((item, i) => {
              return (
                <li key={item.id} className="flex gap-1 items-center">
                  <a
                    href={item.link}
                    className="block text-15 leading-27 font-medium capitalize"
                  >
                    {item.title}
                  </a>
                  {i < 4 && (
                    <div>
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_5_6744" fill="white">
                          <path d="M0.279297 0.189941H8.2793V4.18994H0.279297V0.189941Z" />
                        </mask>
                        <g
                          clip-path="url(#paint0_diamond_5_6744_clip_path)"
                          data-figma-skip-parse="true"
                          mask="url(#path-1-inside-1_5_6744)"
                        >
                          <g transform="matrix(0.004 0 0 0.004 4.2793 0.189941)">
                            <rect
                              x="0"
                              y="0"
                              width="2000"
                              height="2000"
                              fill="url(#paint0_diamond_5_6744)"
                              opacity="1"
                              shape-rendering="crispEdges"
                            />
                            <rect
                              x="0"
                              y="0"
                              width="2000"
                              height="2000"
                              transform="scale(1 -1)"
                              fill="url(#paint0_diamond_5_6744)"
                              opacity="1"
                              shape-rendering="crispEdges"
                            />
                            <rect
                              x="0"
                              y="0"
                              width="2000"
                              height="2000"
                              transform="scale(-1 1)"
                              fill="url(#paint0_diamond_5_6744)"
                              opacity="1"
                              shape-rendering="crispEdges"
                            />
                            <rect
                              x="0"
                              y="0"
                              width="2000"
                              height="2000"
                              transform="scale(-1)"
                              fill="url(#paint0_diamond_5_6744)"
                              opacity="1"
                              shape-rendering="crispEdges"
                            />
                          </g>
                        </g>
                        <path
                          d="M0.279297 0.189941V-3.81006H-3.7207V0.189941H0.279297ZM8.2793 0.189941H12.2793V-3.81006H8.2793V0.189941ZM0.279297 4.18994H8.2793V-3.81006H0.279297V4.18994ZM4.2793 0.189941V4.18994H12.2793V0.189941H4.2793ZM4.2793 4.18994V0.189941H-3.7207V4.18994H4.2793Z"
                          data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.99999988079071045},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:0.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.99999988079071045},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:0.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:8.0,&#34;m01&#34;:0.0,&#34;m02&#34;:0.2792968750,&#34;m10&#34;:0.0,&#34;m11&#34;:8.0,&#34;m12&#34;:-3.810058593750},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                          mask="url(#path-1-inside-1_5_6744)"
                        />
                        <defs>
                          <clipPath id="paint0_diamond_5_6744_clip_path">
                            <path
                              d="M0.279297 0.189941V-3.81006H-3.7207V0.189941H0.279297ZM8.2793 0.189941H12.2793V-3.81006H8.2793V0.189941ZM0.279297 4.18994H8.2793V-3.81006H0.279297V4.18994ZM4.2793 0.189941V4.18994H12.2793V0.189941H4.2793ZM4.2793 4.18994V0.189941H-3.7207V4.18994H4.2793Z"
                              mask="url(#path-1-inside-1_5_6744)"
                            />
                          </clipPath>
                          <linearGradient
                            id="paint0_diamond_5_6744"
                            x1="0"
                            y1="0"
                            x2="500"
                            y2="500"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="1" stop-color="white" />
                            <stop offset="1" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <div className="flex items-center gap-7.5 text-15 font-medium text-white">
            <a href="/signin" className="flex gap-2.5">
              <span>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5_6770)">
                    <path
                      d="M8.25 8.45C5.98333 8.45 4.25 8.96667 3.05 10C1.85 11.0333 1.25 12.5167 1.25 14.45C1.25 14.6167 1.30833 14.75 1.425 14.85C1.54167 14.95 1.66667 15 1.8 15H14.7C14.8333 15 14.9583 14.95 15.075 14.85C15.1917 14.75 15.25 14.6167 15.25 14.45C15.25 12.5167 14.65 11.0333 13.45 10C12.25 8.96667 10.5167 8.45 8.25 8.45ZM2.4 13.9C2.6 11 4.55 9.55 8.25 9.55C11.95 9.55 13.9 11 14.1 13.9H2.4ZM8.25 0C7.58333 0 6.96667 0.158333 6.4 0.474999C5.83333 0.791666 5.39167 1.23333 5.075 1.8C4.75833 2.36667 4.6 3 4.6 3.7C4.6 4.4 4.76667 5.05833 5.1 5.675C5.43333 6.29167 5.875 6.775 6.425 7.125C6.975 7.475 7.58333 7.65 8.25 7.65C8.91667 7.65 9.525 7.475 10.075 7.125C10.625 6.775 11.0667 6.29167 11.4 5.675C11.7333 5.05833 11.9 4.4 11.9 3.7C11.9 3 11.7417 2.36667 11.425 1.8C11.1083 1.23333 10.6667 0.791666 10.1 0.474999C9.53333 0.158333 8.91667 0 8.25 0ZM8.25 6.55C7.55 6.55 6.95 6.275 6.45 5.725C5.95 5.175 5.7 4.50833 5.7 3.725C5.7 2.94167 5.94167 2.30833 6.425 1.825C6.90833 1.34167 7.51667 1.1 8.25 1.1C8.98333 1.1 9.59167 1.35 10.075 1.85C10.5583 2.35 10.8 2.98333 10.8 3.75C10.8 4.51667 10.55 5.175 10.05 5.725C9.55 6.275 8.95 6.55 8.25 6.55Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_6770">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.75 15)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Sigh in</span>
            </a>
            <a
              href="/listingsubmite"
              className="block py-2.5 px-6.6 rounded-full border border-white hover:bg-white transition-all duration-200 ease-in hover:text-black"
            >
              Submit Listing
            </a>
          </div>
        </header>
        </div>
        
      </section>
    </>
  );
}

export default Hero;
