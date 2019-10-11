# Начало работы со скриптами

CraftTweaker использует собственный скриптовый язык, который называется `ZenScript`, ZenScript читается из файлов `.zs`, которые хранятся в папке `<папка игры>/scripts`.

ZenScript — язык сценариев «сверху вниз». Это значит, что `операторы импорта` должны быть сверху файла, `объявления переменных` должны быть недалеко от верха файла, впрочем, ограничения на это нет. `Переменная` может быть объявлена где угодно в скрипте, а доступа к ней не будет выше, чем объявлена.

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`. In the current beta version, scripts are loaded on the client when joining a single player world, when joining a multiplayer world, nothing happens on the client, no scripts are loaded at all, but the vanilla recipe serializers send the custom recipes to the client! So it should all work find for now until mods get involved (and even then, only mods that don't use the datapack system won't work). Next version server -> client script syncing should be done :)

Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

### Написание вашего первого скрипта

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<minecraftdir>/logs/crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### Файл crafttweaker.log

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### Комментарии

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:
```
/* Я
многострочный комментарий! */
```