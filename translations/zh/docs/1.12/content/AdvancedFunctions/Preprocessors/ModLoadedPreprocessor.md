# 模组加载预处理器

模组加载预处理器只会在有特定模组时执行这个脚本。

## 调用
你可以在脚本中加入 `#modloaded modID` 来调用模组加载预处理器，`modID（模组ID）`是你想要检查的模组ID：  
例子：`#modloaded minecraft`

你也可以提供多个模组ID：  
`#modloaded minecraft tconstruct` 将只在 minecraft 和 tconstruct （匠魂）都被加载后才会被执行。

你也可以反转一个模组的条件来达到只有某个模组已加载而另一个模组未加载： `#modloaded !tconstruct minecraft` 将只在有 minecraft 但 没有 tconstruct 时被执行

## 它的作用
如果你添加这个预处理器到一个脚本里，它只会在这个模组ID出现时才会被加载，换句话说，这个脚本只有在这个模组被加载时才会被执行。