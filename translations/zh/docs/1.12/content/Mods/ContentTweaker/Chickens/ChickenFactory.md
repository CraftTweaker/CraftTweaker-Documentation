# 小鸡工坊（ChickenFactory）

The ChickenFactory allows you to create custom [Chickens](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) to the game.  
Note that this module is a feature addition to the [Chickens mod by setycz](https://minecraft.curseforge.com/projects/chickens), so this module is only available if that mod is loaded.

## 导入相关包
```zenscript
import mods.contenttweaker.ChickenFactory;
```


## 创建鸡

First of all, you will need to create a [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
This is essentially an empty template of what your chicken will become.  
This method returns such a [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) object, by taking the following parameters:

- String 名称：鸡的实体名称，用于模型和实体注册。
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) 颜色：鸡的颜色。
- [IItemestack](/Vanilla/Items/IItemStack/) 生下的物品：鸡会生下的物品。

```zenscript
ChickenFactory.createChicken(String name, CTColor color, IItemStack item);
```

## 示例脚本
```zenscript
#loader contenttweaker
#modloaded chickens

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```