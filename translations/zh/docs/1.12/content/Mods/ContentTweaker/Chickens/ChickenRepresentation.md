# 小鸡表示法（ChickenRepresentation）

The ChickenRepresentation is a template of what your Chicken will do.  
By default, it will only exist and lay the egg you gave it as initial parameter.  
You can change this behavior to allow for better chickens by modifying the given properties.

## 导入类
想要导入？ 你要这么做：
```zenscript
import mods.contenttweaker.Chicken;
```

## 注册小鸡

After you have set your chickenRepresentation to be what you want it to be, the most important part is to register it.  
Be careful though, as any changes done to this template after the the registering will still take effect, so you should create a new chickenRepresentation for each chicken you want to have.

## ZenProperties

你可以使用`object.name = newValue`或者`object.setName(newValue);`修改各属性的值。

示例：
```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| name（名称）               | 类型                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------- |
| name（名称）               | string                                                                                 |
| layItem（生下的物品）         | [IItemstack](/Vanilla/Items/IItemStack/)                                               |
| dropItem（掉落物）          | [IItemstack](/Vanilla/Items/IItemStack/)                                               |
| backgroundColor（背景颜色）  | [CT颜色（CTColor）](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                       |
| foregroundColor（前景色）   | [CT颜色（CTColor）](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                       |
| textureLocation（材质位置）  | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| 生成类型（spawnType）        | string                                                                                 |
| 下蛋频率系数（layCoefficient） | float                                                                                  |
| 父本（parentOne）          | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| 母本（parentTwo）          | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |