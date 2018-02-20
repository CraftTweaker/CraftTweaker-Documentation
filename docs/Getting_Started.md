# 脚本入门

Crafttweaker 使用一种叫做 `ZenScript` 自定义脚本语言，ZenScript 读取位于 `<gamedir>/scripts` 文件夹下的所有带有 `.zs` 后缀的文件。

ZenScript 是一种“自上向下”顺序读取的脚本语言，这意味着 `Imports` 必须位于文件的顶部，`Variable Declarions` 也应该在较靠近文件顶部的位置声明。当然这并不是强制性的，`Variable` 能够在脚本的各处进行定义，不过这样就无法对 `Variable` 之前声明的东西进行访问了。


## 介绍

每当开始制作一个整合包，却发现只是堆砌了一堆模组，并没有带来任何综合性的体验？模组的制作都是相对独立的，相比起别的模组，总是有几个显得过于 OP？也行你希望一些物品能够拥有更好的合成，或者你渴望在不移除整个模组的情况下，仅仅是删除其中的一个物品，或者发现一些矿物注册的矿物词典过多、过少。现在你可以全部做到——只需要 MineTweaker 的一条指令。

除了核心功能来支持原版 Minecraft 之外，这个模组也提供了很多模组相关的集成库，模组集成库能够使你进一步自定义模组相关的机器合成，甚至修改模组的一些行为。

## 脚本

脚本被存放在 `<minecraftdir>/scripts` 文件夹，并在游戏的 `PreInitialization（预加载）` 阶段进行加载，不同于先前版本的 Crafttweaker，脚本无法被热加载，这是因为 Mojang 对 1.12 版本的改动, 目前仍无解决方案。最后，脚本需要**同时在服务端和客户端都拥有**才能启用。

所有以 `.zs` 为后缀的脚本文件可以被压缩为 `.zip` 文件，仍旧能够读取。

### 书写你的第一个脚本

为了能够开始书写脚本，你需要创建一个非常基本的文件，可以起名叫做 `hello.zs`，并放置在 `<minecraftdir>/scripts>` 文件夹。

在 `hello.zs` 文件中写入如下条目：

```
print("Hello world!");
```

接下来，启动你的 Minecraft，并注意 `crafttweaker.log` 文件。

`crafttweaker.log` 文件位于 `<minecraftdir>` 并且能够被任何读取文本文档的软件所打开。

这里推荐使用 Notepad++ 或者 Sublime Text 来编辑脚本文件，当然别的程序也可以。

### crafttweaker.log 文件

`crafttweaker.log` 文件使用特殊的语法来进行输出，基本的语法结构如下：

```
[LOADERSTAGE][SIDE][TYPE] <message>
```

使用了先前的示例脚本，输出结果如下：

```
[PREINITIALIZATION][CLIENT][INFO] Hello world!
```

这个语法是仅仅用于调试，除了命令 dumps 不使用此语法，在这种情况下，它只是打印消息，这样做能够更容易的复制粘贴 dumps。

### 注释

注释能够使得你的脚本更可读，更易理解！

ZenScript 支持三种不同的注释书写，分别是：

单行注释：`// I'm a single line comment!`

另一种单行注释：`# I'm also a single line comment!`

多行注释：
```
/* I'm
a
multiline comment! */
```
