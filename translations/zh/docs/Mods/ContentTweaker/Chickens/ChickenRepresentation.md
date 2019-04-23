# 小鸡表示法（ChickenRepresentation）

小鸡表示法是小鸡行为的模板。  
默认情况下，它仅仅以下玩家所指定的物品的方式存在。  
你可以通过修改默认的属性改变它们的行为。

## 导入相关包

想要导入？ 你要这么做：

    import mods.contenttweaker.Chicken;
    

## 注册小鸡

自定义了小鸡表示法后最重要的是就是注册这个表示法。  
需要注意的是，这个表示法注册后所进行的任何更改也会得到保留，因此每一种新的鸡都需要一个新的小鸡表示法。

## ZenProperties

你可以使用`object.name = newValue`或者`object.setName(newValue);`修改各属性的值。

例子：

    chickenRep.layItem = <minecraft:iron_ingot>;
    print(chickenRep.layItem.displayName);
    chickenRep.setLayItem(<minecraft:gold_ingot>);
    print(chickenRep.getLayItem().displayName);
    

| 名称                    | 类型                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------- |
| name（名称）              | string                                                                                 |
| layItem（生下的物品）        | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)                                          |
| dropItem（掉落物）         | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)                                          |
| backgroundColor（背景颜色） | [CT颜色（CTColor）](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                       |
| foregroundColor（前景色）  | [CT颜色（CTColor）](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                       |
| textureLocation（材质位置） | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawnType             | string                                                                                 |
| layCoefficient        | float                                                                                  |
| parentOne             | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo             | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |