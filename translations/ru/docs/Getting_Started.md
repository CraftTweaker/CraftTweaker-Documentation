# Начало работы со скриптами

Crafttweaker использует собственный скриптовый язык, который называется `ZenScript`, ZenScript читается из файлов `.zs`, которые хранятся в папке `<gamedir>/scripts`.

ZenScript — язык сценариев «сверху вниз». Это значит, что `операторы импорта` должны быть сверху файла, `объявления переменных` должны быть недалеко от верха файла, впрочем, ограничения на это нет. `Переменная` может быть объявлена где угодно в скрипте, а доступа к ней не будет выше, чем объявлена.

## Введение

Делая модпак, вы обнаружили, что накидав несколько модов, вы не получили ощущения связанности? Так как моды разрабатываются независимо друг от друга, один может быть невообразимо мощным в сравнении с другим. Либо же вы считаете, что для некоторых предметов рецепт можно было бы сделать и получше. Или возможно вы хотите удалить предмет из игры, не удаляя мод целиком. Ну или вы обнаружили, что некоторые записи словаря руд содержат слишком много или слишком мало предметов. Now you can do all of that - each with just a single instruction to MineTweaker.

In addition to the core functionality provided to support Vanilla minecraft, mod integration libraries are provided with the mod to enable you to not only modify vanilla recipes, but also the mod machine recipes and mod behavior.

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded in the `PreInitialization` phase of Minecraft, unlike previous versions of Crafttweaker, Scripts cannot be reloaded, this is due to changes that Mojang have made in 1.12 and there is no workaround. Also, Scripts need to be on **both, the server AND the client instance** to work

Script files have the `.zs` prefix and can be compressed into a `.zip` that will also be read.

### Writing your first script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

    print("Hello world!");
    

Now load up Minecraft and and take a look at the `crafttweaker.log` file.

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