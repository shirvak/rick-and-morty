const Loading = () => {
  return (
    <svg
      version="1.1"
      id="L4"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
    >
      <circle fill="#16bdca" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        ></animate>
      </circle>
      <circle fill="#16bdca" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        ></animate>
      </circle>
      <circle fill="#16bdca" stroke="none" cx="46" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        ></animate>
      </circle>
    </svg>
  );
};

export default Loading;
