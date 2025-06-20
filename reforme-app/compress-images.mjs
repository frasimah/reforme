import path from 'path';
import fs from 'fs';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';

// Функция для сжатия изображений в заданной директории
async function compressImagesInDirectory(directory) {
   try {
      // Получаем список файлов в директории
      const files = fs.readdirSync(directory);

      // Проходимся по каждому файлу
      for (const file of files) {
         const filePath = path.join(directory, file);

         // Проверяем, является ли файл директорией
         if (fs.statSync(filePath).isDirectory()) {
            // Если это директория, рекурсивно вызываем эту же функцию для этой директории
            await compressImagesInDirectory(filePath);
         } else {
            // Если это файл, то сжимаем его
            await imagemin([filePath], {
               destination: directory,
               plugins: [
                  imageminPngquant(),
                  imageminMozjpeg(),
                  imageminWebp()
               ]
            });
         }
      }

      console.log(`Compression complete in directory: ${directory}`);
   } catch (error) {
      console.error(`Error compressing images in directory: ${directory}`, error);
   }
}

// Путь к директории с изображениями
const imagesDirectory = path.resolve(process.cwd(), 'public', 'img');

// Вызываем функцию для сжатия изображений в заданной директории
compressImagesInDirectory(imagesDirectory);
