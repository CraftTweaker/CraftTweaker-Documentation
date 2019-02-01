# 把你的脚本拆分成多个文件

把你的脚本拆分成多个文件是一个好习惯。

## 问题

- 当为编写大型整合包的脚本时，你的脚本可能会变得复杂而又冗长
- 调试冗长的脚本需要大量时间，尤其是当你得到没有指明所在行的错误信息时。

## 我们需要/应该知道的事情

- CraftTweaker 可以载入多个脚本文件
- CraftTweaker 甚至可以载入子目录中的脚本文件
- 另外，只要 .zip 文件没有设定密码，CraftTweaker 还可以载入其中包含的 .zs 脚本。

## 解决方法

- 把你的大脚本拆分成多个小脚本。
- You could for example create one script for each mod, or each mod handler.

## 例子

    scripts
        热力膨胀
            压缩机.zs
            熔岩炉.zs
        原版
            合成
                移除配方.zs
                有序配方.zs
                无序配方.zs
            种子掉落.zs
        矿物词典.zs
    

## 优点

- Your script files become easier to debug.
- An error won't stop your whole script from working but instead only a small part of it.
- People checking your script files can easier orient themselves

## Disadvantages

- You need to be careful with the loading order of the scripts (especially if one script removes a recipe and another one adds it). Check the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) if your script loading order is a problem
- There are many ways to categorize your scripts after and yours may be confusing for outsiders.