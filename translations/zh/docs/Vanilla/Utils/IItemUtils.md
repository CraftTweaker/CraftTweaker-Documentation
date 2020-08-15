# IItemUtils

ItemUtils 接口提供了各种项目工具。  
它可以使用 `项目` 关键字访问。

## 创建药水

CreatePotions函数允许您创建自定义药水。  
返回药水为 [IItemStack](/Vanilla/Items/IItemStack/)。  
由于此函数的参数是一个变量，您可以提供一个对象[] 或许多对象[]。  
在这两种情况下，每个对象都需要包含

1. 一个 [IPotion](/Vanilla/Potions/IPotion/)
2. 一个整数型变量，说明效果的放大/强度
3. 一个整数型变量，描述效果持续时间。 

如果对象[…]不符合此长度或不符合此顺序，它将被忽略。

```zenscript
//createPotion(Object[]...);
/// createPotion([effect,strengthen,duration],,[effect,strengthen,duration2],...);
///createPotion([effect,strengthen,duration],[effect2,strenge2,duration2],...]);
val potation = itemUtils.createPotion[[<potion:minecraft:strength>, 1, 1]]);
```

## 按名称获取项目

这两个函数都返回了 [IItemStack](/Vanilla/Items/IItemStack/)[]，其中包含所有匹配的物品。  
对项目注册表名称的初步检查，第二个使用未本地化名称。

```zenscript
//getItemsByRegexRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegexRegistryName(".*sword.*"); // 所有名字中有剑的
itemutils.getItemsByRegexRegexRegistryName("). thermal.*"); // 所有热扩张/foundation/dyname项目

//getItemsByRegexunlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // 粉红色东西!! <3
```

## 模拟物品栏处理器

此方法与 [条物品处理器](/Vanilla/Brackets/Bracket_Item/)一样.  
与波黑不同的是，您需要提供元数据作为可选参数。  
如果您想使用通配符，请使用 `32767`

    //getItem(位置，@Opidema);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemuss.getItem("minecraft:dye"), 1//<minecraft:dye:1>
    items.utItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## 创建生成蛋

createSpawnEgg 函数允许您创建自定义的模组生成蛋。  
定制NBT 是OPTIA而且可以覆盖实体标签。  
返回生成的eff为 [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
//createSpawnEgg(entity, @opulatory customNBT)
/NBT overties entity (这样创建了爬行者蛋！)
val egg = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 as byte,PersistenceRequire:1 as byte});
```