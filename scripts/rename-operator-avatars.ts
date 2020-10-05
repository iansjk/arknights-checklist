/* eslint-disable import/prefer-default-export */
import path from "path";
import { promises as fs } from "fs";
import slugify from "slugify";

const ACESHIP_BASEDIR = path.join(__dirname, "../aceship");
const OPERATOR_IMAGE_DIR = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "operators"
);
const avatarImageRegex = /(?<internalName>char_\d{3}_[a-z]+)(?:_(?<eliteLevel>[12])\+?)?\.png/;

(async () => {
  const aceshipCharacterData = await import(
    path.join(ACESHIP_BASEDIR, "json", "tl-char.json")
  );
  const patchCharacterData = await import(
    path.join(__dirname, "character-data.patch.json")
  );
  const characterData = { ...patchCharacterData, ...aceshipCharacterData };
  const lookup = Object.fromEntries(
    Object.keys(characterData).map((internalName) => [
      internalName,
      characterData[internalName].en,
    ])
  );
  const sourceDir = path.join(ACESHIP_BASEDIR, "img", "avatars");
  const imageFiles = await fs.readdir(sourceDir);
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