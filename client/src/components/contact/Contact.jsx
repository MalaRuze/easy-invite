import React from "react";

function Contact() {
  const mailIcon = (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 85.57"
      stroke="currentColor"
      fill="currentColor"
      className="h-full w-full"
    >
      <title>mail</title>
      <path d="M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z" />
    </svg>
  );
  const githubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      viewBox="0 0 640 640"
      stroke="currentColor"
      fill="currentColor"
      className="h-full w-full"
    >
      <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
    </svg>
  );
  const linkedinIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      viewBox="0 0 640 640"
      stroke="currentColor"
      fill="currentColor"
      className="h-full w-full"
    >
      <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z" />
    </svg>
  );

  return (
    <div className="col-start-2 pb-16">
      <h2 className="pt-24 text-2xl md:text-3xl pb-6">Contact me</h2>
      <p className="my-auto">
        Suggestion, feature request or job offer? ... hit me up:)
      </p>
      <div className="flex flex-row justify-between h-6 text-easyPurple w-40 mt-8">
        <button
          className="hover:opacity-80 duration-200"
          onClick={() => (window.location = "mailto:vojtech.ruzic@gmail.com")}
        >
          {mailIcon}
        </button>
        <button
          className="hover:opacity-80 duration-200"
          onClick={() =>
            window.open("https://www.linkedin.com/in/vojtech-ruzicka", "_blank")
          }
        >
          {linkedinIcon}
        </button>
        <button
          className="hover:opacity-80 duration-200"
          onClick={() => window.open("https://github.com/MalaRuze", "_blank")}
        >
          {githubIcon}
        </button>
      </div>
    </div>
  );
}

export default Contact;
