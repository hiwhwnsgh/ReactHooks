export const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1",
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2",
    },
  ];
  
  const useTabs = (initalTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initalTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex,
    };
  };