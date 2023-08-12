const Logo = ({ color }) => {
  return (
    <svg
      width="100"
      height="92"
      viewBox="0 0 100 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.0371 42.0986V25.7086L63.2381 18.7549V12.2954L43.8634 0L32.8173 4.34164V21.9788L19.6538 27.4382V59.7358H25.4886V31.2974L36.17 27.3205V59.7358H43.3693V5.21232L58.5209 14.531V59.7358H63.3675V43.9694L74.2959 51.6643V59.7358H79.3896V45.4519L74.0371 42.0986ZM70.6845 39.7336L63.1087 34.639V24.2026L70.6845 28.7913V39.7336Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M8.00268 71.7726C8.00268 72.1234 7.93691 72.4523 7.82728 72.7812C7.71765 73.1101 7.52033 73.417 7.25723 73.702C6.99412 73.987 6.64332 74.2063 6.18289 74.3817C5.72247 74.5571 5.21818 74.6448 4.60428 74.6448H2.7845V78.109H0V68.8566H4.62621C5.24011 68.8566 5.76632 68.9443 6.20482 69.1197C6.64332 69.2951 7.01605 69.5363 7.27915 69.8213C7.54225 70.1063 7.73958 70.4132 7.84921 70.7421C7.95883 71.071 8.00268 71.4218 8.00268 71.7726ZM5.15241 71.7726C5.15241 71.3341 5.02086 71.0272 4.75776 70.8737C4.49466 70.7202 4.03423 70.6325 3.35455 70.6325H2.7845V72.8689H3.37648C3.83691 72.8689 4.18771 72.8469 4.45081 72.7812C4.69199 72.7154 4.88931 72.6058 4.99894 72.4523C5.10856 72.2988 5.15241 72.0796 5.15241 71.7726Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M20.9366 78.109H17.9329L17.2093 76.4646C16.9462 75.8726 16.7051 75.4341 16.4858 75.1491C16.2666 74.8641 16.0692 74.6887 15.85 74.6229C15.6527 74.5352 15.3896 74.5133 15.0607 74.5133H14.7537V78.1309H11.9692V68.8566H16.727C17.4944 68.8566 18.1302 69.01 18.6126 69.317C19.0949 69.6239 19.4457 70.0186 19.665 70.4571C19.8842 70.8956 19.9938 71.3341 19.9938 71.7288C19.9938 72.1892 19.9061 72.5838 19.7307 72.9127C19.5553 73.2416 19.358 73.4609 19.1607 73.6143C18.9634 73.7678 18.7441 73.8993 18.481 74.0309C18.788 74.2063 19.0291 74.4036 19.2265 74.6448C19.4238 74.886 19.6869 75.3683 20.0158 76.0919L20.9366 78.109ZM17.1436 71.7726C17.1436 71.3341 17.012 71.0491 16.727 70.8737C16.442 70.6983 15.9815 70.6106 15.3676 70.6106H14.7757V72.8469H15.3676C16.0473 72.8469 16.5077 72.7812 16.7708 72.6277C17.012 72.4961 17.1436 72.2111 17.1436 71.7726Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M34.5324 73.4828C34.5324 74.3379 34.3351 75.1492 33.9404 75.8727C33.5458 76.5962 32.9538 77.1663 32.1645 77.6048C31.3752 78.0433 30.4105 78.2406 29.2923 78.2406C28.1522 78.2406 27.1875 78.0213 26.3763 77.5828C25.587 77.1443 24.995 76.5524 24.6003 75.8288C24.2057 75.1053 24.0303 74.316 24.0303 73.5048C24.0303 72.6716 24.2276 71.8823 24.6003 71.1588C24.9731 70.4352 25.565 69.8433 26.3763 69.4048C27.1656 68.9663 28.1522 68.747 29.2923 68.747C30.1474 68.747 30.9148 68.8786 31.5725 69.1197C32.2522 69.3828 32.8003 69.7117 33.2169 70.1502C33.6554 70.5887 33.9843 71.093 34.2035 71.6631C34.4228 72.2331 34.5324 72.847 34.5324 73.4828ZM31.6821 73.4828C31.6821 73.132 31.6383 72.8251 31.5287 72.5401C31.4191 72.255 31.2656 72.0139 31.0682 71.7946C30.8709 71.5754 30.6078 71.4219 30.3009 71.2903C29.9939 71.1807 29.665 71.1149 29.2704 71.1149C28.5249 71.1149 27.9329 71.3342 27.5164 71.7727C27.0998 72.2112 26.8805 72.7812 26.8805 73.4828C26.8805 74.1844 27.0998 74.7545 27.5164 75.193C27.9549 75.6315 28.5249 75.8508 29.2704 75.8508C29.7747 75.8508 30.2132 75.7411 30.5859 75.5438C30.9367 75.3465 31.2217 75.0615 31.3971 74.7107C31.5945 74.3598 31.6821 73.9433 31.6821 73.4828Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M53.6072 75.4999C53.6072 76.2892 53.3441 76.925 52.796 77.4074C52.2478 77.8897 51.4805 78.1309 50.5158 78.1309H45.166V68.8566H49.6388C50.2088 68.8566 50.7131 68.9223 51.1516 69.032C51.5901 69.1416 51.919 69.2951 52.1821 69.4924C52.4452 69.6897 52.6425 69.909 52.774 70.1721C52.9056 70.4352 52.9714 70.7202 52.9714 71.0272C52.9714 71.356 52.9056 71.6849 52.774 71.9699C52.6425 72.255 52.4671 72.4961 52.2698 72.6715C52.0724 72.8469 51.8751 72.9785 51.6778 73.0662C52.3136 73.3074 52.796 73.6362 53.1248 74.009C53.4537 74.3817 53.6072 74.886 53.6072 75.4999ZM50.3404 71.5314C50.3404 71.0929 50.1869 70.786 49.9019 70.6325C49.6168 70.479 49.1564 70.4132 48.5206 70.4132H47.9286V72.6277H48.5206C49.1564 72.6277 49.6168 72.5619 49.9019 72.4084C50.2088 72.255 50.3404 71.9699 50.3404 71.5314ZM50.8008 75.3683C50.8008 74.579 50.2307 74.1844 49.0687 74.1844H47.9286V76.5523H49.0687C50.2307 76.5523 50.8008 76.1576 50.8008 75.3683Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M67.2659 73.9651C67.2659 74.7544 67.1124 75.4341 66.8274 76.0042C66.5424 76.5742 66.1477 77.0127 65.6435 77.3197C65.1392 77.6266 64.6349 77.8678 64.0648 78.0213C63.4948 78.1748 62.9467 78.2405 62.3766 78.2405C61.5873 78.2405 60.8199 78.109 60.0964 77.8459C59.3509 77.5828 58.737 77.1223 58.2328 76.4865C57.7285 75.8507 57.4873 75.0175 57.4873 73.9871V68.8566H60.2718V73.2416C60.2718 73.8555 60.3595 74.3598 60.5349 74.7544C60.7103 75.1491 60.9515 75.4341 61.2804 75.6314C61.5873 75.8068 61.96 75.9165 62.3985 75.9165C62.8151 75.9165 63.1659 75.8288 63.4948 75.6534C63.8018 75.478 64.0648 75.171 64.2402 74.7764C64.4156 74.3817 64.5034 73.8774 64.5034 73.2635V68.8566H67.2878V73.9651H67.2659Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M74.6551 78.109H71.8706V68.8566H74.6551V78.109Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M86.4511 78.109H79.4131V68.8566H82.1976V75.8945H86.4511V78.109Z"
        fill={color ? color : "#24201F"}
      />
      <path
        d="M99.9999 73.6582C99.9999 74.601 99.8245 75.3683 99.4737 75.9384C99.1229 76.5084 98.7282 76.9689 98.2459 77.3416C97.5881 77.8678 96.6453 78.1309 95.4614 78.1309H90.4844V68.8566H94.3432C94.9132 68.8566 95.4175 68.8785 95.8341 68.9443C96.2507 69.01 96.6234 69.0977 96.9523 69.2074C97.2812 69.317 97.5662 69.4485 97.7854 69.5801C98.0266 69.7116 98.2239 69.8651 98.3993 70.0186C98.7063 70.2817 98.9913 70.5887 99.2325 70.9395C99.4737 71.2903 99.671 71.7068 99.8026 72.1673C99.9341 72.6058 99.9999 73.1101 99.9999 73.6582ZM97.1715 73.5266C97.1715 72.7812 97.0181 72.1892 96.733 71.7726C96.448 71.356 96.0972 71.071 95.7026 70.9175C95.3079 70.7641 94.8913 70.6983 94.4748 70.6983H93.2908V76.1796H94.4748C95.1983 76.1796 95.8341 76.0042 96.3822 75.6534C96.8865 75.3245 97.1715 74.6229 97.1715 73.5266Z"
        fill={color ? color : "#24201F"}
      />
      <g opacity="0.5">
        <path
          d="M13.8572 84.7303C14.2299 84.7303 14.6027 84.7742 14.9535 84.8619C15.3043 84.9496 15.6989 85.0811 16.1155 85.3004V86.4843C15.7208 86.2432 15.3481 86.0897 14.9973 85.98C14.6465 85.8704 14.2957 85.8266 13.923 85.8266C13.4625 85.8266 13.024 85.9143 12.6513 86.1116C12.2786 86.3089 11.9936 86.572 11.7743 86.9228C11.5551 87.2736 11.4674 87.6683 11.4674 88.0849C11.4674 88.5234 11.577 88.918 11.7743 89.2688C11.9716 89.6196 12.2786 89.8827 12.6513 90.08C13.024 90.2774 13.4406 90.3651 13.923 90.3651C14.2738 90.3651 14.6246 90.3212 14.9535 90.2116C15.2823 90.102 15.6989 89.9266 16.2032 89.6415V90.8255C15.7866 91.0448 15.392 91.1982 15.0192 91.3079C14.6684 91.3956 14.2519 91.4394 13.7695 91.4394C13.0679 91.4394 12.454 91.3078 11.9059 91.0228C11.3577 90.7378 10.9412 90.3432 10.6123 89.8389C10.3053 89.3127 10.1519 88.7426 10.1519 88.1287C10.1519 87.471 10.3053 86.879 10.6342 86.3528C10.9631 85.8266 11.4016 85.41 11.9497 85.125C12.5198 84.8619 13.1556 84.7303 13.8572 84.7303Z"
          fill={color ? color : "#24201F"}
        />
        <path
          d="M25.2577 84.7303C25.9374 84.7303 26.5513 84.8619 27.0995 85.1469C27.6476 85.4319 28.0861 85.8266 28.393 86.3528C28.7219 86.879 28.8754 87.471 28.8754 88.0849C28.8754 88.6988 28.7219 89.2688 28.393 89.795C28.0861 90.3212 27.6476 90.7378 27.0995 91.0228C26.5513 91.3078 25.9374 91.4613 25.2358 91.4613C24.5561 91.4613 23.9422 91.3078 23.3722 91.0228C22.8021 90.7378 22.3855 90.3212 22.0786 89.8169C21.7716 89.2907 21.6182 88.7207 21.6182 88.1068C21.6182 87.5148 21.7716 86.9447 22.0786 86.4185C22.3855 85.8923 22.824 85.4758 23.3722 85.1907C23.9203 84.8619 24.5561 84.7303 25.2577 84.7303ZM22.9556 88.1068C22.9556 88.5453 23.0652 88.9399 23.2626 89.2907C23.4599 89.6415 23.7449 89.9047 24.0957 90.102C24.4465 90.2993 24.8412 90.387 25.3016 90.387C25.9813 90.387 26.5294 90.1677 26.9679 89.7512C27.4064 89.3346 27.6257 88.7865 27.6257 88.1068C27.6257 87.6683 27.538 87.2736 27.3406 86.9228C27.1433 86.572 26.8583 86.3089 26.5075 86.1116C26.1567 85.9143 25.762 85.8266 25.3016 85.8266C24.8412 85.8266 24.4465 85.9143 24.0957 86.1116C23.7449 86.3089 23.4599 86.572 23.2845 86.9228C23.0433 87.2736 22.9556 87.6683 22.9556 88.1068Z"
          fill={color ? color : "#24201F"}
        />
        <path
          d="M35.8265 84.8181L37.9752 87.4052L40.1239 84.8181H41.264V91.3956H39.9923V86.7913H39.9485L38.041 89.1154H37.8656L35.9581 86.7913H35.9142V91.3956H34.6426V84.8181H35.8265Z"
          fill={color ? color : "#24201F"}
        />
        <path
          d="M49.8592 84.8181C50.4731 84.8181 50.9774 84.9935 51.3501 85.3443C51.7448 85.6951 51.9201 86.1555 51.9201 86.7256C51.9201 87.2956 51.7228 87.7561 51.3282 88.1069C50.9335 88.4577 50.4292 88.6331 49.7934 88.6331H48.5656V91.3956H47.2939V84.8181H49.8592ZM49.5522 87.6245C49.8811 87.6245 50.1442 87.5368 50.3415 87.3833C50.5389 87.2299 50.6266 86.9887 50.6266 86.7037C50.6266 86.0898 50.2319 85.8047 49.4645 85.8047H48.6095V87.6245H49.5522Z"
          fill={color ? color : "#24201F"}
        />
        <path
          d="M60.296 84.8181L63.1901 91.3956H61.8527L61.173 89.7951H58.257L57.6211 91.3956H56.2837L59.0024 84.8181H60.296ZM58.6516 88.8085H60.7783L59.6602 86.1994L58.6516 88.8085Z"
          fill={color ? color : "#24201F"}
        />
        <path
          d="M69.6992 84.8181L73.6019 89.4004V84.8181H74.8517V91.3956H73.7554L69.8308 86.7256V91.3956H68.5811V84.8181H69.6992Z"
          fill={color ? color : "#24201F"}
        />
        <path
          d="M81.7383 84.8181L83.3169 87.0106L84.9175 84.8181H86.4303L83.9528 88.1288V91.3737H82.6811V88.1069L80.1816 84.7962H81.7383V84.8181Z"
          fill={color ? color : "#24201F"}
        />
      </g>
    </svg>
  );
};

export default Logo;
