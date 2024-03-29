"use client";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip
);

export default async function Home() {
  // const a = await fetch("http://localhost:3000/api/hello");

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#9B0000",
          "#0EA5E9",
          "#FFFF00",
          "#11454C",
          "#330066",
          "#CC6600",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const Total = [
    {
      title: "Total's Money",
      price: "$53,00",
      increase: "53%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
        >
          <path
            d="M4.94644 4.81816H19.0089C19.1732 4.81809 19.3373 4.82851 19.5002 4.84937C19.445 4.46167 19.3118 4.08917 19.1088 3.75433C18.9057 3.41949 18.6369 3.12925 18.3186 2.9011C18.0003 2.67294 17.6391 2.51161 17.2568 2.42683C16.8745 2.34204 16.4789 2.33556 16.094 2.40776L4.52895 4.38223H4.51577C3.78983 4.52105 3.14427 4.93178 2.71094 5.53052C3.36379 5.06616 4.14529 4.81713 4.94644 4.81816Z"
            fill="white"
          />
          <path
            d="M19.0093 5.87488H4.94678C4.20111 5.87569 3.48621 6.17227 2.95894 6.69954C2.43167 7.22681 2.13509 7.94171 2.13428 8.68738V17.1249C2.13509 17.8705 2.43167 18.5854 2.95894 19.1127C3.48621 19.64 4.20111 19.9366 4.94678 19.9374H19.0093C19.7549 19.9366 20.4698 19.64 20.9971 19.1127C21.5244 18.5854 21.821 17.8705 21.8218 17.1249V8.68738C21.821 7.94171 21.5244 7.22681 20.9971 6.69954C20.4698 6.17227 19.7549 5.87569 19.0093 5.87488ZM16.9219 14.3124C16.6437 14.3124 16.3719 14.2299 16.1406 14.0754C15.9093 13.9209 15.7291 13.7012 15.6227 13.4443C15.5162 13.1873 15.4884 12.9046 15.5426 12.6318C15.5969 12.359 15.7308 12.1084 15.9275 11.9118C16.1242 11.7151 16.3747 11.5812 16.6475 11.5269C16.9203 11.4726 17.2031 11.5005 17.46 11.6069C17.717 11.7134 17.9366 11.8936 18.0911 12.1249C18.2456 12.3561 18.3281 12.628 18.3281 12.9061C18.3281 13.2791 18.18 13.6368 17.9162 13.9005C17.6525 14.1642 17.2948 14.3124 16.9219 14.3124Z"
            fill="white"
          />
          <path
            d="M2.15625 11.6514V7.27881C2.15625 6.32651 2.68359 4.72998 4.51392 4.38413C6.06738 4.09277 7.60547 4.09277 7.60547 4.09277C7.60547 4.09277 8.61621 4.7959 7.78125 4.7959C6.94629 4.7959 6.96826 5.87256 7.78125 5.87256C8.59424 5.87256 7.78125 6.90527 7.78125 6.90527L4.50732 10.6187L2.15625 11.6514Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Total's Users",
      price: "$2,300",
      increase: "5%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
        >
          <path
            d="M12 2.35858C6.952 2.35858 2.85938 6.45121 2.85938 11.4992C2.85938 16.5472 6.952 20.6398 12 20.6398C17.048 20.6398 21.1406 16.5472 21.1406 11.4992C21.1406 6.45121 17.048 2.35858 12 2.35858Z"
            fill="white"
            stroke="#0075FF"
            strokeWidth="0.75"
            strokeMiterlimit="10"
          />
          <path
            d="M12.0001 2.35858C9.44824 2.35858 7.04883 6.45121 7.04883 11.4992C7.04883 16.5472 9.44824 20.6398 12.0001 20.6398C14.552 20.6398 16.9515 16.5472 16.9515 11.4992C16.9515 6.45121 14.552 2.35858 12.0001 2.35858Z"
            fill="white"
            stroke="#0075FF"
            strokeWidth="0.75"
            strokeMiterlimit="10"
          />
          <path
            d="M5.90625 5.40552C7.58672 6.59863 9.70224 7.31011 12.0001 7.31011C14.298 7.31011 16.4136 6.59863 18.094 5.40552"
            fill="white"
          />
          <path
            d="M5.90625 5.40552C7.58672 6.59863 9.70224 7.31011 12.0001 7.31011C14.298 7.31011 16.4136 6.59863 18.094 5.40552"
            stroke="#0075FF"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.094 17.5944C16.4136 16.4013 14.298 15.6898 12.0001 15.6898C9.70224 15.6898 7.58672 16.4013 5.90625 17.5944"
            stroke="#0075FF"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <path
            d="M12 2.35858V20.6398"
            stroke="#0075FF"
            strokeWidth="0.75"
            strokeMiterlimit="10"
          />
          <path
            d="M21.1406 11.499H2.85938"
            stroke="#0075FF"
            strokeWidth="0.75"
            strokeMiterlimit="10"
          />
        </svg>
      ),
    },
    {
      title: "New Client",
      price: "+3,052",
      decrease: "14%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
        >
          <path
            d="M13.4062 10.1057H19.5586C19.6021 10.1057 19.6438 10.123 19.6746 10.1538C19.7054 10.1845 19.7227 10.2263 19.7227 10.2698V18.5315C19.7227 19.2743 19.4276 19.9867 18.9023 20.5119C18.3771 21.0372 17.6647 21.3323 16.9219 21.3323H7.07812C6.33531 21.3323 5.62292 21.0372 5.09767 20.5119C4.57243 19.9867 4.27734 19.2743 4.27734 18.5315V4.46899C4.27734 3.72618 4.57243 3.01379 5.09767 2.48854C5.62292 1.96329 6.33531 1.66821 7.07812 1.66821H11.1211C11.1646 1.66821 11.2063 1.6855 11.2371 1.71627C11.2679 1.74703 11.2852 1.78876 11.2852 1.83228V7.98462C11.2852 8.54717 11.5086 9.08668 11.9064 9.48446C12.3042 9.88224 12.8437 10.1057 13.4062 10.1057ZM8.48437 17.137H15.5156C15.7052 17.137 15.887 17.0616 16.0211 16.9276C16.1552 16.7935 16.2305 16.6117 16.2305 16.4221C16.2305 16.2325 16.1552 16.0507 16.0211 15.9166C15.887 15.7826 15.7052 15.7073 15.5156 15.7073H8.48437C8.29479 15.7073 8.11296 15.7826 7.9789 15.9166C7.84484 16.0507 7.76953 16.2325 7.76953 16.4221C7.76953 16.6117 7.84484 16.7935 7.9789 16.9276C8.11296 17.0616 8.29479 17.137 8.48437 17.137ZM8.48437 13.6213H15.5156C15.7052 13.6213 15.887 13.546 16.0211 13.412C16.1552 13.2779 16.2305 13.0961 16.2305 12.9065C16.2305 12.7169 16.1552 12.5351 16.0211 12.401C15.887 12.267 15.7052 12.1916 15.5156 12.1916H8.48437C8.29479 12.1916 8.11296 12.267 7.9789 12.401C7.84484 12.5351 7.76953 12.7169 7.76953 12.9065C7.76953 13.0961 7.84484 13.2779 7.9789 13.412C8.11296 13.546 8.29479 13.6213 8.48437 13.6213Z"
            fill="white"
            stroke="#0075FF"
            strokeWidth="0.0234375"
          />
          <path
            d="M12.8447 2.22753L19.1644 8.54726L12.8447 2.22753ZM12.8447 2.22753C12.8447 2.22753 12.8447 2.22753 12.8447 2.22752M12.8447 2.22753L12.8447 2.22752M12.8447 2.22752C12.8341 2.21694 12.8205 2.20974 12.8058 2.20683C12.7911 2.20392 12.7758 2.20542 12.7619 2.21116C12.748 2.2169 12.7362 2.22662 12.7278 2.23908C12.7194 2.25155 12.7149 2.2662 12.7148 2.28121V7.98573C12.7148 8.1691 12.7877 8.34496 12.9174 8.47462C13.047 8.60429 13.2229 8.67713 13.4063 8.67713H19.1107C19.1258 8.67707 19.1404 8.67257 19.1529 8.66419C19.1654 8.65582 19.1751 8.64395 19.1808 8.63007C19.1866 8.61619 19.1881 8.60092 19.1851 8.58619C19.1822 8.57147 19.175 8.55793 19.1645 8.54728L12.8447 2.22752Z"
            fill="white"
            stroke="#0075FF"
            strokeWidth="0.0234375"
          />
        </svg>
      ),
    },
    {
      title: "Total Sales",
      price: "$173,000",
      increase: "8%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
        >
          <path
            d="M8.48438 19.9374C9.26103 19.9374 9.89062 19.3078 9.89062 18.5311C9.89062 17.7545 9.26103 17.1249 8.48438 17.1249C7.70772 17.1249 7.07812 17.7545 7.07812 18.5311C7.07812 19.3078 7.70772 19.9374 8.48438 19.9374Z"
            fill="white"
          />
          <path
            d="M18.3281 19.9374C19.1048 19.9374 19.7344 19.3078 19.7344 18.5311C19.7344 17.7545 19.1048 17.1249 18.3281 17.1249C17.5515 17.1249 16.9219 17.7545 16.9219 18.5311C16.9219 19.3078 17.5515 19.9374 18.3281 19.9374Z"
            fill="white"
          />
          <path
            d="M20.8242 5.55796C20.7254 5.43713 20.601 5.33981 20.4599 5.27308C20.3188 5.20634 20.1647 5.17185 20.0086 5.17212H6.63384L6.36445 3.6437C6.33573 3.4809 6.25056 3.33342 6.1239 3.22717C5.99724 3.12093 5.83719 3.06271 5.67187 3.06274H2.85937C2.67289 3.06274 2.49405 3.13682 2.36219 3.26868C2.23033 3.40055 2.15625 3.57939 2.15625 3.76587C2.15625 3.95235 2.23033 4.13119 2.36219 4.26305C2.49405 4.39491 2.67289 4.46899 2.85937 4.46899H5.08213L7.08867 15.8412C7.11739 16.004 7.20257 16.1514 7.32923 16.2577C7.45588 16.3639 7.61593 16.4221 7.78125 16.4221H19.0312C19.2177 16.4221 19.3966 16.348 19.5284 16.2162C19.6603 16.0843 19.7344 15.9055 19.7344 15.719C19.7344 15.5325 19.6603 15.3537 19.5284 15.2218C19.3966 15.0899 19.2177 15.0159 19.0312 15.0159H8.37099L8.12314 13.6096H18.743C18.9868 13.6093 19.2231 13.5248 19.4117 13.3703C19.6004 13.2158 19.7299 13.0009 19.7783 12.7619L21.0439 6.43379C21.0744 6.28064 21.0705 6.12263 21.0325 5.97117C20.9945 5.81971 20.9234 5.67857 20.8242 5.55796Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-8 w-full gap-[24px]">
        {Total.map((item, index) => (
          <div
            key={index}
            className="col-span-2 rounded-lg bg-blue-950 flex justify-between p-2 "
          >
            <div className="flex flex-col">
              <span className="text-white">{item.title}</span>
              <span className="text-white ">
                {item.price}
                {item.increase && (
                  <span className="text-green-500 font-xs ml-2">
                    {"+" + item.increase}
                  </span>
                )}

                {item.decrease && (
                  <span className="text-red-500 font-xs ml-2">
                    {"-" + item.decrease}
                  </span>
                )}
              </span>
            </div>
            <div className="rounded-lg bg-[#0075FF] flex items-center p-2 h-10">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="grid grid-cols-subgrid gap-4 col-span-2">
          <Doughnut data={data} />
        </div>
        <div className="grid grid-cols-subgrid gap-4 col-span-2">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}
