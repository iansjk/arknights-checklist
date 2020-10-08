/* eslint-disable import/prefer-default-export */
import path from "path";
import { promises as fs } from "fs";
import slugify from "slugify";

const ACESHIP_BASEDIR = path.join(__dirname, "../aceship");
const ARKNIGHTS_DATA_BASEDIR = path.join(__dirname, "../ArknightsData");
const OPERATOR_IMAGE_DIR = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "operators"
);
const avatarImageRegex = /(?<internalName>char_\d{3}_[a-z]+)(?:_(?<eliteLevel>[12])\+?)?\.png/;

async function getCharacterNames(): Promise<Record<string, string>> {
  const characterData = await import(
    path.join(
      ARKNIGHTS_DATA_BASEDIR,
      "en-US",
      "gamedata",
      "excel",
      "character_table.json"
    )
  );
  return Object.fromEntries(
    Object.keys(characterData).map((id) => [id, characterData[id].name])
  );
}

(async () => {
  const sourceDir = path.join(ACESHIP_BASEDIR, "img", "avatars");
  const [imageFiles, lookup] = await Promise.all([
    fs.readdir(sourceDir),
    getCharacterNames(),
  ]);
  const copyImages = imageFiles
    .filter((filename) => {
      const match = filename.match(avatarImageRegex);
      return match?.groups?.internalName && lookup[match?.groups?.internalName];
    })
    .map((filename) => {
      const match = filename.match(avatarImageRegex);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newName = lookup[match!.groups!.internalName!];
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { eliteLevel } = match!.groups!;
      const newFilename = slugify(
        eliteLevel ? `${newName} elite ${eliteLevel}.png` : `${newName}.png`,
        { lower: true }
      );
      return fs.copyFile(
        path.join(sourceDir, filename),
        path.join(OPERATOR_IMAGE_DIR, newFilename)
      );
    });
  await Promise.all(copyImages);
})();
