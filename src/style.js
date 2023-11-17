const styles = {
    boxWidth: "max-w-[1500px]",
    boxWidthFirst: "w-full",
  
    heading2: "font-crimsonPro font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-inter font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    boxPaddingX: "sm:px-0 lg:px-36 px-4",
    paddingX: "sm:px-20 px-4",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    websitesImg: "web-img animate-pulse relative max-w-none",
    blueButton: "text-aleBlue font-medium tracking-customWide text-1xl  mt-6 py-2 px-7 border-4 border-2 sm:mt-10 sm:text-xl border-aleBlue rounded-md transition duration-150 hover:bg-aleBlueLight hover:translate-y-[-0.2rem]"
  //top-[0%] -left-[0%] max-w-none w-[0%] ss:top-[0%] ss:w-[0%] ss:left-[0%] md:top-[0%] md:left-[0%] md:w-[100%]
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;