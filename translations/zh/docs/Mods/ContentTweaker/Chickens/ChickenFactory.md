# 小鸡工坊（ChickenFactory）

小鸡工坊允许你往游戏中添加自定义的[鸡](/Mods/ContentTweaker/Chickens/ChickenRepresentation/)。  
注：这个模块是[setycz编写的chickens](https://minecraft.curseforge.com/projects/chickens)模组的功能，因而使用此功能需要加载了这个模组。

## 导入相关包

    import mods.contenttweaker.ChickenFactory;
    

## 创建鸡

首先，你需要创建一个[小鸡表示法](/Mods/ContentTweaker/Chickens/ChickenRepresentation/)。  
它本质上是一个小鸡的模板。  
此方法会使用下方罗列的参数，返回[小鸡表示法](/Mods/ContentTweaker/Chickens/ChickenRepresentation/)对象：

- String 名称：鸡的实体名称，用于模型和实体注册
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