# 包模式预处理器

Packmod模式预处理器只在软件包模式配置文件启用某个软件包模式时将脚本切换为执行

## 调用

您通过在脚本文件中添加 `#packmode 模式(s)` 来调用 Packmode Preprocessor， `模式` 为你想要脚本运行的包模式 (s)

## 例子

`#packmod模式普通专家` 将在正常和专家模式下启用脚本

```zenscript
#packmode normal
导入 craftminstrer.items.IItemStack;

打印("如果我出现在您的 CT-logs, 包模式正常已启用!");
```

## 它的作用

处理器只允许在启用某个包模式时执行脚本。