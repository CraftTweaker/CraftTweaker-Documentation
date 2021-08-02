# 脚本是什么

脚本只是一个带有`.zs`文件扩展名的文件，这就是将一个文件归类为脚本文件的全部条件了。

#### Note

Windows隐藏了“已知”文件类型的扩展名，这意味着`text.txt`在你的电脑上可能只显示为`text`。

这也意味着`script.zs.txt`在你的电脑上也将显示为`script.zs`。

如果你不确定文件扩展名是否显示，请在你的游戏目录中找到名为`options.txt`的文件，如果你看到一个名为`options`的文件，而不是`options.txt`，这意味着你的文件扩展名被隐藏，你在制作脚本文件时可能会遇到麻烦。

你可以在[这里](https://www.howtohaven.com/system/show-file-extensions-in-windows-explorer.shtml)找到如何解决这个问题的方法。

# 脚本在哪里

一般来说脚本放在安装目录下的`scripts`文件夹中，它与`mods`、`config`和`logs`处于同一层级。

如果你找不到它，你可以在游戏中运行`/ct scripts`命令，它应该会打开脚本文件夹。

它应该看起来像是这样的树状图：

```plaintext
├── config
├── defaultconfigs
├── logs
├── mods
├── saves
└── scripts
```

## 子文件夹

`scripts`文件夹内的脚本可以放在任何数量的子文件夹中，列如根据mod将脚本放入文件夹，这是一个这样做的树状图：

```plaintext
scripts/
└── mods
    ├── botania
    ├── recipes.zs
    ├── tags.zs
    └── thermal
        ├── recipes.zs
        └── tags.zs
```

这是完全有效的，而且这是管理大型整合包中的脚本文件的好方法！

