# 手

一把手是对玩家两把可能的手的计数：主手和关

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.Hand；`

## 枚举数

可以是这两种值：

- 主要的
- 关闭

```zenscript
导入 mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## 使用

手的主要用途是 [IItemUse 函数](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)。

## 比较两个握手对象

您可以使用 `==` getter比较两个助手对象。

```zenscript
Hand.main() == Hand.main()
```