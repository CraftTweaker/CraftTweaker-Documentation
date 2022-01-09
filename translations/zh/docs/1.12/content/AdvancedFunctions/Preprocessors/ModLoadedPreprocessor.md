# 模组加载预处理器

模组加载预处理器只会在有特定模组时执行这个脚本。

## 调用
You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

你也可以反转一个模组的条件来达到只有某个模组已加载而另一个模组未加载： `#modloaded !tconstruct minecraft` 将只在有 minecraft 但 没有 tconstruct 时被执行

## 它的作用
如果你添加这个预处理器到一个脚本里，它只会在存在提供的模组ID，换个说法，如果这个模组被加载了时才会被执行。