export const projectData = [
  {
    id: 1,
    class: "isotop-item logo",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/work/llm-detectaive.png",
    subtitle: "Research Project",
    title: "LLM-DetectAIve: A Tool for Fine-Grained Machine-Generated Text Detection",
    target: "#portfolio-1",
    category: ["LLM", "NLP"],
    project: "website",
    languages: ["PyTorch", "LLM"],
    client: "MBZUAI",
    previewLink: "https://aclanthology.org/2024.emnlp-demo.35/",
    previewName: "LLM-DetectAIve",
    desc: [
      `This projects submitted a paper to EMNLP 2024 - System Demo. as a classification tool of an input text into one of the four types: human-written, machine-generated, machine-polished and machine-humanized text.`,

      ` My involvement is complete building dataset and model for training process and implement in two ways: 1, Using RoBERTa with DANN architecture for simple detector; 2, Using Llama-3 with the GAN archi- tecture for explainable detector.`,
    ],
  },
  {
    id: 2,
    class: "isotop-item design mockup",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/sensitivedata.png",
    subtitle: "Private Project for Enterprise",
    title: "Sensitive data detection",
    target: "#portfolio-1",
    category: ["NLP"],
    project: "website",
    languages: ["PyTorch", "Passkey retrieval"],
    client: "Viettel Group HQ",
    previewLink: "#",
    previewName: "Private project",
    desc: [
      `This project aims to create a tool to detect some sensitive data defined in Decree No. 13/2023/ND-CP of the Government on Personal Data Protection such as basic indentification information, and some specific sensitive data such as political or religious attitude, etc. in data stream ing flow or big batch of data files in Viettel Lakehouse Platform.`,

      `This project is under development and expected to finish development and testing in December 2024.`,
    ],
  },
  {
    id: 3,
    class: "isotop-item logo mockup",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/codev.png",
    subtitle: "Private Project for Enterprise",
    title: "Integrated LLM Coding Partner for Data Lakehouse",
    target: "#portfolio-1",
    category: ["LLM"],
    project: "website",
    languages: ["PyTorch", "Langchain"],
    client: "Viettel Group HQ",
    previewLink: "#",
    previewName: "Private Project",
    desc: [
      `This projects aim to create an assistant which can: i, give informations about data lakehouse and user manual; ii, generate SQL, Python and Scala code to extracting information from data lakehouse.`,

      `Results: Complete training models for code generation and question answering in English and integrated with  extensions for Visual Studio Code and JetBrains's IDE along with the library for LLM integration with connection to data lakehouse`,
    ],
  },
  {
    id: 4,
    class: "isotop-item mockup",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/work/LongAlpaca.png",
    subtitle: "Research Project",
    title: "Vietnamese LongAlpaca Dataset",
    target: "#portfolio-1",
    category: ["Big Data", "LLM"],
    project: "website",
    languages: ["Dataset"],
    client: "BKAI Research Center",
    previewLink: "#",
    previewName: "Not public",
    desc: [
      `This projects investigates in the technique to make the LLM have the capacity of understanding a whole long book; along with create a new dataset for training using this technique`,

      ` This dataset is currently unavailable for public access.`,
    ],
  }
];

export const filterButtons = [
  {
    id: 1,

    text: "All",
  },
  {
    id: 2,
    text: "Big Data",
  },
  {
    id: 3,
    text: "LLM",
  },
  {
    id: 4,
    text: "NLP",
  },
];
