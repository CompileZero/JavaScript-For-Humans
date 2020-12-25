const githubToken = process.env.GITHUB_TOKEN;

// if (!githubToken) {
//   throw new Error("Missing environment variable GITHUB_TOKEN.");
// }

export const config = {
  name: "JavaScript For Humans",
  subtitle: "All Concepts Explained JavaScript",
  birthday: "1997-02-07",
  githubUsername: "compilezero",
  //notionAchievementTableId: "9ace8568ccdb4263970b9e29dfede38d",
  notionProjectTableId: "af06f31e0fc24b5e8b833046760e76df",
  notionBlogTableId: "7f7237a328cf49e680aeaaf7acac93d4",
  githubToken,
};
