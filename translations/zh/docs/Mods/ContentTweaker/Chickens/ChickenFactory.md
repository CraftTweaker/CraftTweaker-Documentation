# 小鸡工坊（ChickenFactory）

小鸡工坊允许你往游戏中添加自定义的[鸡](/Mods/ContentTweaker/Chickens/ChickenRepresentation/)。  
注：这个模块是[setycz编写的chickens](https://minecraft.curseforge.com/projects/chickens)模组的功能，因而使用此功能需要加载了这个模组。

## 导入相关包

    import mods.contenttweaker.ChickenFactory;
    

## 创建鸡

First of all, you will need to create a [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
This is essentially an empty template of what your chicken will become.  
This method returns such a [Chicken Representation](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) object, by taking the following parameters:

- String name: the entity name of the chicken, used for models and the entity registry.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color: The color, the chicken will have.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: The item the chicken will lay later on.

    ChickenFactory.createChicken(String name, CTColor color, IItemStack item);
    

## Example Script

    #loader contenttweaker
    #modloaded chickens
    
    import mods.contenttweaker.ChickenFactory;
    import mods.contenttweaker.Color;
    
    
    val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffff), <item:minecraft:bedrock>);
    
    chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));
    
    chickenRepresentation.register();