"use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// import "./animated.css";

// const Animated = () => {
//   useEffect(() => {
//     gsap.registerPlugin(CSSRulePlugin);

//     const afterRule = CSSRulePlugin.getRule(".ankush-ka-burger::after");

//     gsap.to(afterRule, {
//       cssRule: { height: "0%" },
//       duration: 1,
//       bottom:0,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <div className="ankush-ka-burger">
//       <img
//         src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?ga=GA1.1.654379375.1722505764&semt=ais_hybrid"
//         alt="Exploding Burger"
//       />
//     </div>
//   );
// };

// export default Animated;

const Animated = () => {
  return (
    <>
      <div className="main w-full bg-blue-200 md:bg-red-400 lg:bg-green-400  h-screen flex justify-center items-center">

        <h1 className=" text-2xl lg:text-4xl font-bold ">Hello Mona naam ki ladki </h1>
      </div>
    </>
  );
};

export default Animated;