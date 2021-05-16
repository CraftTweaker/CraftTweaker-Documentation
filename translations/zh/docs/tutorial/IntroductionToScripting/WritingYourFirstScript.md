# 编写你的第一个脚本

要开始编写你的第一个脚本，你需要导航到scripts文件夹。  
如果你不确定它在哪里，可以看一下[What Are Scripts](/tutorial/IntroductionToScripting/WhatAreScripts)页面。

现在在我们在scripts文件夹中，建立一个叫做`script.zs`的新文件。

在你喜欢的文本编辑器中打开`script.zs`，并添加以下代码。

```zenscript
println("Hello World!");
```

现在打开Minecraft，或者使用`/reload`命令，然后查看`crafttweaker.log`文件（如果你不确定它在哪里，可以看一下[The CraftTweaker Log File](/tutorial/IntroductionToScripting/TheCraftTweakerLogFile)页面）。

你可以忽略所有带有`[DEBUG]`的条目，你要找的是一个看起来像这样的条目：

```plaintext
[05:05:41.856][DONE][CLIENT][INFO] Hello World!
```

如果你能找到这个条目，那么太棒了！  
你的脚本文件已经被加载到游戏中，你已经准备好开始实际修改游戏并添加新的配方了！

If you can't find the entry, that could mean a few things, either your script didn't load or it is possible that you forgot to hit save when you were done writing your script (don't worry! it happens to the best of us!).

To check if your script loaded, try and find a line that looks like:

```plaintext
[05:05:23.365][DONE][CLIENT][INFO] Loading file: script.zs
```

If you can't find it, it means that your script file didn't get loaded, try and make sure that it doesn't have a `.txt` file extension (as discussed in the [What Are Scripts](/tutorial/IntroductionToScripting/WhatAreScripts) page).

还要看看是否有任何看起来像这样的行：

```plaintext
[05:08:57.688][DONE][CLIENT][ERROR]
```

This could mean that your script file loaded, but there was an error (such as a missing `;` at the end of the line), so just double check the file and make sure that all of it looks good.

如果你仍然有问题，那么请加入[CraftTweaker Discord](https://discord.blamejared.com)服务器，我们可以在那里帮助你。