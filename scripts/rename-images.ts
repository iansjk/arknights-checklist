/* eslint-disable import/prefer-default-export */
import path from "path";
import { promises as fs } from "fs";
import slugify from "slugify";
import { getOperatorName } from "./globals";

const ACESHIP_BASEDIR = path.join(__dirname, "../aceship");
const PUBLIC_IMAGE_DIR = path.join(__dirname, "..", "public", "images");

const skillIconFilenameRegex = /skill_icon_(?<skillId>[^.]+)\.png/;
function newSkillIconFilename(oldFilename: string): string | null {
  const match = oldFilename.match(skillIconFilenameRegex);
  if (!match?.groups?.skillId) {
    return null;
  }
  return `${match.groups.skillId}.png`;
}

(async () => {
  const avatarFilenameRegex = /(?<internalName>char_\d+_[a-z]+)(?:_(?<eliteLevel>[12])\+?)?\.png/;
  function newOperatorImageFilename(oldFilename: string): string | null {
    const match = oldFilename.match(avatarFilenameRegex);
    if (
      !match?.groups?.internalName ||
      !getOperatorName(match.groups.internalName)
    ) {
      return null;
    }
    const { eliteLevel } = match.groups;
    const operatorName = getOperatorName(match.groups.internalName);
    const newFilename = slugify(
      eliteLevel
        ? `${operatorName} elite ${eliteLevel}.png`
        : `${operatorName}.png`,
      { lower: true }
    );
    return newFilename;
  }

  const operatorImageTask = {
    sourceDir: path.join(ACESHIP_BASEDIR, "img", "avatars"),
    destinationDir: path.join(PUBLIC_IMAGE_DIR, "operators"),
    renameFn: newOperatorImageFilename,
  };
  const skillIconTask = {
    sourceDir: path.join(ACESHIP_BASEDIR, "img", "skills"),
    destinationDir: path.join(PUBLIC_IMAGE_DIR, "skills"),
    renameFn: newSkillIconFilename,
  };

  const tasks = [operatorImageTask, skillIconTask].map(async (task) => {
    const files = await fs.readdir(task.sourceDir);
    return Promise.all(
      files.map(async (filename) => {
        const newFilename = task.renameFn(filename);
        if (newFilename) {
          // use readFile, writeFile instead of copyFile to guarantee byte-by-byte equality
          // (otherwise git will think files will change on every script run)
          const buf = await fs.readFile(path.join(task.sourceDir, filename));
          fs.writeFile(path.join(task.destinationDir, newFilename), buf);
        }
      })
    );
  });
  await Promise.all(tasks);
})();
