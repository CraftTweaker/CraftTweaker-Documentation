# 脚本入门

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder, if you aren't sure where this folder is, just run `/ct scripts` when in the game and the folder will open.

ZenScript 是一种按“自上向下”顺序读取的脚本语言，这意味着`导入`应该位于文件的顶部，`变量声明`也应该出现在较靠近文件顶部的位置。当然这不是强制性的，`变量`虽能够在脚本的各处定义，但`变量`声明之前的所有行都无法访问这个变量。


Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

## 什么是脚本

Scripts 存储在 `<gamedir>/脚本` 中，当玩家进入世界时会被加载，就和以前版本的 CraftTweaker(不包括1.12版) 一样 ，脚本可以被重新加载，只需要运行 `/reload`。

脚本在进入单人游戏世界时会被加载两次，一次在`服务器` 中，一次在`客户端` 中。 如果你的脚本中有一个`println()`, 你将看到它两次，因为它会被运行两次。

但这并不意味着更改会被执行两次，脚本造成的更改和运行的位置有关，有些改动， 例如设置本地化，只能在客户端运行，但添加配方只能在服务器端完成。

加入服务器时，服务器会将他们的脚本发送给客户端，客户端会运行这些脚本。 这意味着一个没有任何脚本的客户端， 可以加入服务器并获得更改(这个特性很有用，如果您需要在服务器上禁用一个物品，但不想强迫客户端下载额外文件！)


### 书写你的第一个脚本

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

在 `hello.zs` 文件中写入以下内容：

```zenscript
println("Hello, world!");
```

现在加载Minecraft并看看`<gamedir>/logs/crafttweaker.org` 文件 (或运行 `/ct log` 在您的默认文本编辑器中打开文件)。

`craftweaker.log`文件位于`<gamedir>/logs`文件夹，并且可以通过任何能够读取纯文本的程序阅读。

推荐使用 Notepad++，Sublime Text或者VSCode来编辑脚本文件，当然别的程序也可以。

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.



### crafttweaker.log 文件

` crafttweaker.log ` 文件的输出会使用一种特殊的语法，基本的语法结构如下：

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

在上面的示例中，输出将会是：

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumped information is easier.

### 注释

注释可以用来使你的脚本文件更易于阅读，更容易理解!

ZenScript 支持三种不同的注释书写方法，它们分别是：

单行注释： `// 我是一条单行注释！`

另一种单行注释 `# 我也是一条单行注释！`

多行注释：
```
/* 我是
一条
多行注释！ */
```

Just note, that `#` comments are also used for PreProcessors (TODO link to PreProcessors when they are documented), so while they are still valid comments, they could cause unwanted side effects. 