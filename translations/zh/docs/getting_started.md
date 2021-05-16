# 脚本入门

CraftTweaker 是由一个叫做 `ZenScript` 的自定义脚本语言编写的，ZenScript 是以 `.zs` 类型文件保存在 `<gamedir>/scripts` 文件夹中的，如果你不确定文件夹在哪，在游戏中运行指令`/ct scripts` 然后文件夹就会打开。

ZenScript 是一种按“自上向下”顺序读取的脚本语言，这意味着`导入`应该位于文件的顶部，`变量声明`也应该出现在较靠近文件顶部的位置。当然这不是强制性的，`变量`虽能够在脚本的各处定义，但`变量`声明之前的所有行都无法访问这个变量。


脚本文件的后缀名为 `.zs`，请确保它不是`.zs.txt`！

## 什么是脚本

Scripts 被存储在 `<gamedir>/scripts` 文件夹中，当玩家进入世界时会被加载，就和以前版本的 CraftTweaker(不包括1.12版) 一样 ，脚本可以被重新加载，只需要运行 `/reload`。

脚本在进入单人游戏世界时会被加载两次，一次在`服务器` 中，一次在`客户端` 中。 如果你的脚本中有一个`println()`, 你将看到它两次，因为它会被运行两次。

但这并不意味着更改会被执行两次，脚本造成的更改和运行的位置有关，有些改动， 例如设置本地化，只能在客户端运行，但添加配方只能在服务器端完成。

加入服务器时，服务器会将它们的脚本发送给客户端，客户端会运行这些脚本。 这意味着一个没有任何脚本的客户端， 可以加入服务器并获得更改(这个特性很有用，如果您需要在服务器上禁用一个物品，但不想强迫客户端下载额外文件！)


### 书写你的第一个脚本

要开始使用脚本，你可以创建一个很基本的文件，叫做 `hello.zs` 并放在 `<gamedir>/scripts>` 文件夹中；如果你不确定文件夹在哪，只需要运行指令`/ct scripts` 然后文件夹就会打开。

在 `hello.zs` 文件中写入以下内容：

```zenscript
println("Hello, world!");
```

现在加载Minecraft并看看`<gamedir>/logs/crafttweaker.org` 文件 (或运行 `/ct log` 在您的默认文本编辑器中打开文件)。

`craftweaker.log`文件位于`<gamedir>/logs`文件夹，并且可以通过任何能够读取纯文本的程序阅读。

推荐使用 Notepad++，Sublime Text或者VSCode来编辑脚本文件，当然别的程序也可以。

当使用一个脚本编辑器时，注意查看可用的语法高亮模式，多数脚本编辑器带有ZenScript的语法高亮插件。



### crafttweaker.log 文件

` crafttweaker.log ` 文件的输出会使用一种特殊的语法，基本的语法结构如下：

```
[HH:MM:SS.ms][Forge 加载阶段（LOADERSTAGE）][端（SIDE）][类型（TYPE）] <信息>
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

请注意，`#`注释也用于预处理程序（TODO：预处理程序的文档被编写后，链接到预处理程序的文档），虽然这样它们仍然是有效的注释，但它们可能会引起不必要的副作用。 