# 脚本入门

Crafttweaker 使用一种称为 `ZenScript` 的自定义脚本语言。ZenScript 读取于 `<游戏主目录>/scripts` 文件夹下的所有带有 `.zs` 后缀的文件。

ZenScript 是一种“自上向下”顺序读取的脚本语言，这意味着`导入`需要位于文件的顶部，`变量声明`也应该出现在较靠近文件顶部的位置。当然这不是强制性的，`变量`虽能够在脚本的各处定义，但`变量`声明之前的所有行都无法访问这个变量。

## 介绍

你有过这样的经历吗？你做了一个整合包，却发现自己只是堆砌了一堆模组，却并没有带来任何综合性的体验？ 模组的制作都是相对独立的，相比起别的模组，总是有几个显得过于 OP。 也许你认为一些物品有更好的配方， 也许你渴望在不移除整个模组的情况下，仅仅删除其中的一个物品， 也许你发现一些矿物词典包含过多或过少的物品…… 现在你可以全部做到——只需要一条 MineTweaker 指令。

除了支持原版 Minecraft 的主要功能之外，Crafttweaker 也提供了兼容其他模组的库，允许你进一步自定义其他模组相关的机器配方，甚至修改其他模组的一些行为。

## 脚本

脚本被存放在`<游戏主目录>/scripts` 文件夹，并在游戏的`预加载（PreInitialization）`阶段加载。不同于先前版本的 Crafttweaker，脚本无法被重新加载。这是因为 Mojang 对 1.12 版本的改动，目前仍无解决方案。 最后，脚本需要**同时在服务端和客户端上**才能启用。

所有以 `.zs` 为后缀的脚本文件可以被压缩为 `.zip` 文件，且压缩后仍旧能够正常读取。

### 书写您的第一个脚本

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