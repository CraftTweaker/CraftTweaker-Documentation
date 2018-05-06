# 模组加载器

模组加载器能够使特定脚本在有特定模组的前提下才会执行。

## 如何开启
在脚本中添加 `#modloaded modID` 来开启模组加载器，`modID` 就是你想要检测的模组 id：  
示例：`#modloaded minecraft`

你甚至可以提供多个模组 id：  
比如 `#modloaded minecraft tconstruct` 就只会在 minecraft 和 匠魂 同时加载的情况下执行脚本。

你也可以反转模组加载器的状态，使得其只在特定模组没有加载时，且特定模组被加载时才执行：  
比如`#modloaded !tconstruct minecraft` 就只会在 miencraft 被加载且 匠魂 没有被加载时执行。

## 有什么用
开启了模组加载器的脚本，仅会在指定 modID 的模组存在时被执行。  
也就是说，只有在特定模组被加载时才会执行。
