import replace from "gulp-replace"; // Поиск и замена путей файлов
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Cообщения (подсказки)
import browserSync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления картинок
import ifPlugin from "gulp-if"; // Услованое ветвление

export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browserSync: browserSync,
   newer: newer,
   if: ifPlugin,
};
