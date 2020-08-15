# `标签` 加载器

`标签` 加载器是一个特殊的加载器，它会在稍后阶段触发Minecraft加载过程，并允许 操纵 [标签](/Mods/Boson/Tags/Concept/)。 Tag括号处理程序在这个加载器加载的文件 中使用时有不同的含义：请参考Tags文档获取更多信息。

## 使用此加载器
这个加载器可以通过 [`#loader` 预处理器指令](/AdvancedFunctions/Preprocessors/LoaderPreprocessor/) 通过在声明 旁边指定其名称。 例如以下示例：

```zenscript
#加载器标签
```

## 此加载器的原因
更多信息请参阅 [标签括号处理器](/Mods/Boson/Tags/BracketHandler/) 的文档和与 相关的页面[实际概念](/Mods/Boson/Tags/Concept/)。
