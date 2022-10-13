# Начало работы со скриптами

CraftTweaker использует собственный скриптовый язык, который называется `ZenScript`. ZenScript читается из файлов `.zs`, которые хранятся в папке `<папка игры>/scripts`. Если вы не уверены, где она находится, вызовите команду `/ct scripts` в игре — и папка откроется.

ZenScript — язык сценариев «сверху вниз». Это значит, что `операторы импорта` должны быть сверху файла, `объявления переменных` должны быть недалеко от верха файла, впрочем, ограничения на это нет. `Переменная` может быть объявлена где угодно в скрипте, а доступа к ней не будет выше, чем объявлена.


Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

## What are scripts

Скрипты хранятся в папке `<папка Minecraft>/scripts`, и они загружаются, как только игрок присоединяется к миру; как и в предыдущих версиях Crafttweaker (кроме 1.12), скрипты МОЖНО перезагрузить, просто вызвав `/reload`.

When joining a server, the server sends their scripts to the client, and the client runs those scripts. This does mean that a client without any scripts, can join a server and get the changes (useful if you need to disable an item on the server but don't want to force clients to download extra files!)

### Написание вашего первого скрипта

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

В `hello.zs` вставьте следующую строку

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<gamedir>/logs/crafttweaker.log` file (or run `/ct log` to have the file open in your default text editor).

The `crafttweaker.log` file is located in `<gamedir>/logs` and can be read by any program that can read plaintext files.

Для редактирования файлов скриптов рекомендуется использовать VSCode, Sublime Text или Notepad++, впрочем, подойдет любой текстовый редактор.

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.


### Файл crafttweaker.log

Файл `crafttweaker.log` использует специальный синтаксис в выходном файле, приведенный ниже:

```
[чч:мм:сс.мс][ТИП] <сообщение>
```

Используя приведенный выше шаблон, можно сделать пример:

```
[14:58:06.697][INFO] Привет, мир!
```

### Комментарии

Комментарии облегчают понимание скриптов и делают их более читабельными!

ZenScript поддерживает 3 типа комментариев:

Однострочный: `// Я - однострочный комментарий!`

Альтернативный однострочный: `# Я тоже однострочный комментарий!`

Многострочный:
```
/* Я
многострочный комментарий! */
```

Также обратите внимание, что комментарии, начинающиеся на `#`, используются для [препроцессоров](/zencode/Preprocessors/Preprocessors), так что могут привести к нежеланными эффектам. 