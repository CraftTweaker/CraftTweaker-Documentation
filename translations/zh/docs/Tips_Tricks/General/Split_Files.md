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

- 脚本文件变得更易于调试。
- 一个错误只会导致某一个部分无法加载，不会影响到整个脚本。
- 查看你的脚本的用户能够快捷找到特定语句的位置

## 缺点

- 你需要注意脚本的加载顺序（尤其是一个脚本需要使用另一个脚本中所添加物品的时候）。 如果遇到加载顺序问题，请参考[优先级预处理器](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/)
- There are many ways to categorize your scripts after and yours may be confusing for outsiders.