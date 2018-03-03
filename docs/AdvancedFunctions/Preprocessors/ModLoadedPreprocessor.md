# 模组加载器

模组加载器能够使特定脚本在有特定模组的前提下才会执行。

## 如何开启
在脚本中添加 `#modloaded modID` 来开启模组加载器，`modID` 就是你想要检测的模组 id：  
示例：`#modloaded minecraft`

你甚至可以提供多个模组 id：  
比如 `#modloaded minecraft tconstruct` 就只会在 minecraft 和 匠魂同时加载的情况下执行脚本。

## 有什么用
如果启用了这个加载器，那么当前脚本只会在特定模组加载的情况下才会执行，换句话说，依据添加的模组不同，来进行加载。