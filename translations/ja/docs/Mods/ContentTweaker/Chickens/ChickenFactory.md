# ChickenFactory

The ChickenFactory allows you to create custom [Chickens](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) to the game.  
Note that this module is a feature addition to the [Chickens mod by setycz](https://minecraft.curseforge.com/projects/chickens), so this module is only available if that mod is loaded.

## パッケージのインポート

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## ニワトリを作る

First of all, you will need to create a [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
This is essentially an empty template of what your chicken will become.  
This method returns such a [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) object, by taking the following parameters:

- 文字列名: モデルとエンティティレジストリに使用されるチキンのエンティティ名。
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color: 色, ニワトリは持っています.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: 鶏が後に置くアイテム。

```zenscript
ChickenFactory.createChicken(String name, CTColor color, IItemStack item);
```

## スクリプト例

```zenscript
#loader contenttweaker
#modloaded chickens

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```