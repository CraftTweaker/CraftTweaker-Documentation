# Начало работы со скриптами

Crafttweaker использует собственный скриптовый язык, который называется `ZenScript`, ZenScript читается из файлов `.zs`, которые хранятся в папке `<gamedir>/scripts`.

ZenScript — язык сценариев «сверху вниз». Это значит, что `операторы импорта` должны быть сверху файла, `объявления переменных` должны быть недалеко от верха файла, впрочем, ограничения на это нет. `Переменная` может быть объявлена где угодно в скрипте, а доступа к ней не будет выше, чем объявлена.

## Введение

Делая модпак, вы обнаружили, что накидав несколько модов, вы не получили ощущения связанности? Так как моды разрабатываются независимо друг от друга, один может быть невообразимо мощным в сравнении с другим. Либо же вы считаете, что для некоторых предметов рецепт можно было бы сделать и получше. Или возможно вы хотите удалить предмет из игры, не удаляя мод целиком. Ну или вы обнаружили, что некоторые записи словаря руд содержат слишком много или слишком мало предметов. Теперь вы можете сделать все это одной инструкцией MineTweaker.

Помимо основных функций, чтобы расширить Minecraft, есть также библиотеки для интеграции с модами, чтобы менять не только рецепты в верстаке, но и рецепты в механизмах из модов или поведение модов.

## Скрипты

Скрипты содержатся в `<minecraftdir>/scripts` и загружаются в фазе `пре-инициализации` Minecraft. В отличие от предыдущих версий Crafttweaker, скрипты не могут быть перезагружены из-за изменений, сделанных Mojang в 1.12. Возможности обойти их нет. Кроме того, скрипты должны быть **ОДНОВРЕМЕННО и на сервере, и на клиенте**, чтобы работать.

Файлы скриптов используют расширение `.zs` и могут быть сжаты в `.zip`, сохраняя возможность чтения.

### Написание вашего первого скрипта

Чтобы начать работать со скриптами, можете создать простой файл, названный `hello.zs` в папке `<minecraftdir>/scripts`.

В `hello.zs` вставьте следующую строку

    print("Привет, мир!");
    

Теперь загрузите Minecraft и обратите внимание на файл `crafttweaker.log`.

The `crafttweaker.log` file is located in `<minecraftdir>` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Using the example above, the output would be:

    [PREINITIALIZATION][CLIENT][INFO] Hello world!
    

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### Comments

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:

    /* I'm 
    a
    multiline comment! */