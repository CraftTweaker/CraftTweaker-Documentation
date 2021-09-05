# 编写你的第一个脚本

要开始编写你的第一个脚本，你需要导航到scripts文件夹。  
如果你不确定它在哪里，可以看一下[What Are Scripts](/tutorial/IntroductionToScripting/WhatAreScripts)页面。

现在在我们在scripts文件夹中，建立一个叫做`script.zs`的新文件。

在你喜欢的文本编辑器中打开`script.zs`，并添加以下代码。

```zenscript
println("Hello World!");
```

现在打开Minecraft，或者使用`/reload`命令，然后查看`crafttweaker.log`文件（如果你不确定它在哪里，可以看一下[CraftTweaker日志文件](/tutorial/IntroductionToScripting/TheCraftTweakerLogFile)页面）。

你可以忽略所有带有`[DEBUG]`的条目，你要找的是一个看起来像这样的条目：

```plaintext
[05:05:41.856][DONE][CLIENT][INFO] Hello World!
```

如果你能找到这个条目，那么太棒了！  
你的脚本文件已经被加载到游戏中，你已经准备好开始实际修改游戏并添加新的配方了！

如果你找不到这个条目，这可能意味着有几种情况，要么是你的脚本没有加载，或者是你在写完脚本后忘了保存（别担心！ 这发生在我们中最好的人身上！）

要检查你的脚本是否已经被加载了，试着找到一个看起来像这样的行：

```plaintext
[05:05:23.365][DONE][CLIENT][INFO] Loading file: script.zs
```

如果你找不到它，说明你的脚本文件没有被加载，试着确保它没有`.txt`文件扩展名（这有被在 [脚本是什么](/tutorial/IntroductionToScripting/WhatAreScripts) 页面中讨论）。

还要看看是否有任何看起来像这样的行：

```plaintext
[05:08:57.688][DONE][CLIENT][ERROR]
```

这可能意味着你的脚本文件已经加载，但有一个错误（列如行尾缺少`;`），因此仅需要再次检查文件，确保所有的文件看起来都很好。

如果你仍然有问题，那么请加入[CraftTweaker Discord](https://discord.blamejared.com)服务器，我们可以在那里帮助你。