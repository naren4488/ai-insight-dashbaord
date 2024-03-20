import aiData from "./../mock_DB/ai-data.json";

export const getAIData = (): Promise<any> => {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(aiData);
    }, 200);

    if (false) reject("Something went wrong");
  });

  return response;
};
