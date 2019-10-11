# 脚本入门

Crafttweaker 使用一种称为 `ZenScript` 的自定义脚本语言。ZenScript 读取于 `<游戏主目录>/scripts` 文件夹下的所有带有 `.zs` 后缀的文件。

ZenScript 是一种按“自上向下”顺序读取的脚本语言，这意味着`导入`应该位于文件的顶部，`变量声明`也应该出现在较靠近文件顶部的位置。当然这不是强制性的，`变量`虽能够在脚本的各处定义，但`变量`声明之前的所有行都无法访问这个变量。

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`. In the current beta version, scripts are loaded on the client when joining a single player world, when joining a multiplayer world, nothing happens on the client, no scripts are loaded at all, but the vanilla recipe serializers send the custom recipes to the client! So it should all work find for now until mods get involved (and even then, only mods that don't use the datapack system won't work). Next version server -> client script syncing should be done :)

Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

### 书写你的第一个脚本

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<minecraftdir>/logs/crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### crafttweaker.log 文件

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### 注释

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:
```
/* 我是
一条
多行注释！ */
```