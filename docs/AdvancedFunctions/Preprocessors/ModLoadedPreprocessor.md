# 模组加载器

模组加载器能够使特定脚本在有特定模组的前提下才会执行。

## 如何开启
在脚本中添加 `#modloaded modID` 来开启模组加载器，`modID` 就是你想要检测的模组 id：  
示例：`#modloaded minecraft`

你甚至可以提供多个模组 id：  
比如 `#modloaded minecraft tconstruct` 就只会在 minecraft 和 匠魂同时加载的情况下执行脚本。

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded:
`#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## What it does
If you added this preprocessor to a script, it will only be executed if the provided modID's are present, in other words if the respecting mods are loaded.
