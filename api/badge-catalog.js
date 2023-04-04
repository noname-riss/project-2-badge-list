

export default async function handler(request, res) {

    const catalog= [
      {
      "titleIcon" : "save",
      "title": "TESTING",
      "paragraph":"This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.",
      "author":"Ryan",
      "timeToComplete":2.8,
      "opened": false,
      "collapseIcon": "arrow-drop-up"
      }

    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(catalog);
  }
  