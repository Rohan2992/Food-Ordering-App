import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border p-2 m-3 flex relative justify-between border-black">
        <h3 className="font-bold text-2xl">{title}</h3>
        {isVisible ? (
          <button
            className="absolute top-2 right-2"
            onClick={() => {
              setIsVisible();
            }}
          >
            {/* //(Hide ^) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        ) : (
          <button
            className="absolute top-2 right-2"
            onClick={() => setIsVisible()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        )}
      </div>
      {isVisible && <p className="m-5 text-justify">{description}</p>}
    </>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("about");
  return (
    <div>
      <h1 className="font-bold text-3xl">INSTAMART</h1>
      {/* {Section({ title: "about" })} passing the props in the form of an object */}
      <Section
        title="About"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "about"}
        setIsVisible={() =>
          sectionConfig === "about"
            ? setSectionConfig("")
            : setSectionConfig("about")
        }
      />
      <Section
        title="Teams"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "teams"}
        setIsVisible={() =>
          sectionConfig === "teams"
            ? setSectionConfig("")
            : setSectionConfig("teams")
        }
      />
      <Section
        title="Career"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "careers"}
        setIsVisible={() =>
          sectionConfig === "careers"
            ? setSectionConfig("")
            : setSectionConfig("careers")
        }
      />
    </div>
  );
};

export default Instamart;

/**
 * Second Way of doing this
 *
 * import { useState } from "react";
 *
 * const Section = ({
 *   title,
 *   description,
 *   isVisible,
 *   functionToHideDescription,
 *   functionToShowDescription
 * }) => {
 *   return (
 *     <>
 *       <div className="border p-2 m-3 flex relative justify-between border-black">
 *         <h3 className="font-bold text-2xl">{title}</h3>
 *         {isVisible ? (
 *           <button
 *             className="absolute top-2 right-2"
 *             onClick={() => {
 *               functionToHideDescription("Hello I am Clicked");
 *               // console.log("I am clicked");
 *             }}
 *           >
 *             { //(Hide ^) }
 *             <svg
 *               xmlns="http://www.w3.org/2000/svg"
 *               fill="none"
 *               viewBox="0 0 24 24"
 *               strokeWidth={1.0}
 *               stroke="currentColor"
 *               className="w-6 h-6"
 *             >
 *               <path
 *                 strokeLinecap="round"
 *                 strokeLinejoin="round"
 *                 d="M4.5 15.75l7.5-7.5 7.5 7.5"
 *               />
 *             </svg>
 *           </button>
 *         ) : (
 *           <button
 *             className="absolute top-2 right-2"
 *             onClick={() => functionToShowDescription()}
 *           >
 *             <svg
 *               xmlns="http://www.w3.org/2000/svg"
 *               fill="none"
 *               viewBox="0 0 24 24"
 *               strokeWidth={1.0}
 *               stroke="currentColor"
 *               className="w-6 h-6"
 *             >
 *               <path
 *                 strokeLinecap="round"
 *                 strokeLinejoin="round"
 *                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
 *               />
 *             </svg>
 *           </button>
 *         )}
 *       </div>
 *       {isVisible && <p className="m-5 text-justify">{description}</p>}
 *     </>
 *   );
 * };
 *
 * const Instamart = () => {
 *   const [sectionConfig, setSectionConfig] = useState("about");
 *   return (
 *     <div>
 *       <h1 className="font-bold text-3xl">INSTAMART</h1>
 *       {{Section({ title: "about" })} passing the props in the form of an object }
 *       <Section
 *         title="About"
 *         description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
 *         isVisible={sectionConfig === "about"}
 *         functionToHideDescription={(hii) => {
 *           // console.log(hii);
 *           setSectionConfig("");
 *         }}
 *         functionToShowDescription={() => {
 *           setSectionConfig("about");
 *         }}
 *       />
 *       <Section
 *         title="Teams"
 *         description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
 *         isVisible={sectionConfig === "teams"}
 *         functionToHideDescription={() => setSectionConfig("")}
 *         functionToShowDescription={() => {
 *           setSectionConfig("teams");
 *         }}
 *       />
 *       <Section
 *         title="Career"
 *         description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
 *         isVisible={sectionConfig === "careers"}
 *         functionToHideDescription={() => setSectionConfig("")}
 *         functionToShowDescription={() => {
 *           setSectionConfig("careers");
 *         }}
 *       />
 *     </div>
 *   );
 * };
 *
 * export default Instamart;
 */

/**
 *
 * First Way of doing this
 *
 * import { useState } from "react";
 *
 * const Section = ({
 *   title,
 *   description,
 *   isVisible,
 *   setIsVisible,
 *   setIsVisible2
 * }) => {
 *   // const [isVisible, setIsVisible] = useState(false);
 *   return (
 *     <div className="border p-2 m-3 border-black">
 *       <h3 className="font-bold text-2xl">{title}</h3>
 *       {isVisible ? (
 *         <button
 *           className="underline cursor-pointer"
 *           onClick={() => {
 *             setIsVisible("Hello I am Clicked");
 *             console.log("I am clicked");
 *           }}
 *         >
 *           Hide
 *         </button>
 *       ) : (
 *         <button
 *           className="underline cursor-pointer"
 *           onClick={() => setIsVisible2(true)}
 *         >
 *           Show
 *         </button>
 *       )}
 *       {isVisible && <p className="">{description}</p>}
 *     </div>
 *   );
 * };
 *
 * const Instamart = () => {
 *   const [sectionConfig, setSectionConfig] = useState({
 *     showAbout: true,
 *     showTeams: false,
 *     showCareers: false
 *   });
 *   return (
 *     <div>
 *       <h1 className="font-bold text-3xl">INSTAMART</h1>
 *       { {Section({ title: "about" })} passing the props in the form of an object }
 *       <Section
 *         title="About"
 *         description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
 *         isVisible={sectionConfig.showAbout}
 *         setIsVisible={(hii) => {
 *           console.log(hii);
 *           setSectionConfig({
 *             showAbout: false,
 *             showTeams: false,
 *             showCareers: false
 *           });
 *         }}
 *         setIsVisible2={() => {
 *           setSectionConfig({
 *             showAbout: true,
 *             showTeams: false,
 *             showCareers: false
 *           });
 *         }}
 *       />
 *       <Section
 *         title="Teams"
 *         description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
 *         isVisible={sectionConfig.showTeams}
 *         setIsVisible={() =>
 *           setSectionConfig({
 *             showAbout: false,
 *             showTeams: false,
 *             showCareers: false
 *           })
 *         }
 *         setIsVisible2={() => {
 *           setSectionConfig({
 *             showAbout: false,
 *             showTeams: true,
 *             showCareers: false
 *           });
 *         }}
 *       />
 *       <Section
 *         title="Career"
 *         description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
 *         isVisible={sectionConfig.showCareers}
 *         setIsVisible={() =>
 *           setSectionConfig({
 *             showAbout: false,
 *             showTeams: false,
 *             showCareers: false
 *           })
 *         }
 *         setIsVisible2={() => {
 *           setSectionConfig({
 *             showAbout: false,
 *             showTeams: false,
 *             showCareers: true
 *           });
 *         }}
 *       />
 *     </div>
 *   );
 * };
 *
 * export default Instamart;
 */
