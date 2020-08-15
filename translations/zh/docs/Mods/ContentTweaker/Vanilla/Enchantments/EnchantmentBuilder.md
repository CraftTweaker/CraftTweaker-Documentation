# 附魔建造器

使用这个包，你可以为工具、武器和其他一切创建自定义附魔。

## 导入类

如果您遇到任何问题，可能需要导入类 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)) 这样比抱歉更安全并添加导入。  
`导入mods.contenttweeper.enchantments.EnchantmentBuilder`

## 创建附魔者

首先，您需要创建材料生成器。  
这可以使用静态创建方法。

```zenscript
//mods.contenttweeper.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweiner.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

请记住，在您完成更改后，您需要注册附魔。  
这可以通过 `注册` 方法完成，这将返回一个 [IEnchantment定义](/Vanilla/Enchantments/IEnchantmentDefinition/) 的新附魔。

```zenscript
myChant.register();
```

## 参数

您可以使用 `myChant.name` 设置和获取这些属性。

| 名称          | 类型                                                                       |
| ----------- | ------------------------------------------------------------------------ |
| name（名称）    | string                                                                   |
| 允许的 OnBooks | 布尔值                                                                      |
| 适用的栏位       | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (默认：空) |
| 曲线          | bool                                                                     |
| 域           | string (default: "contenttweaker")                                       |
| 最大级别        | 整数 (默认: 1)                                                               |
| minLevel    | 整数 (默认: 1)                                                               |
| 稀有度         | 字符串 (使用下面的自定义方法)                                                         |
| 宝箱          | bool                                                                     |
| 类型          | 字符串 (使用下面的自定义方法)                                                         |

## 计算的属性

您可以设置并获取这些属性函数。

| 名称                         | 参数                                                                                                                                                                                                                     | 返回值类型 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| can应用                      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [IItemStack](/Vanilla/Items/IItemStack/) 项目                                                                                      | 布尔值   |
| canApplyAtEnchantmentTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [IItemStack](/Vanilla/Items/IItemStack/) 项目                                                                                      | 布尔值   |
| canApplyOne                | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) 其他                                                       | 布尔值   |
| calcDamageByCreature       | [IEnchantmentDefine](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [int]() level, [字符串]() creatureType                                                                                                  | 浮点数   |
| calcEnchantabilityMin      | [IEnchantmentDefine](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [int]() 级别                                                                                                                           | 整数    |
| calcEnchantabilityMax      | [IEnchantmentDefine](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [int]() 级别                                                                                                                           | 整数    |
| calcModifier伤害             | [IEnchantmentDefine](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [int]() level, [IDamageSource](/Vanilla/Damage/IDamageSource/) damageSource                                                          | 整数    |
| calcTranslated名称           | [IEnchantmentDefine](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchants, [int]() 级别                                                                                                                           | 字符串   |
|                            |                                                                                                                                                                                                                        |       |
| onentitydamaged            | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) target, [int]() level   | 空的    |
| onUserHurt                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) attacker, [int]() level | 空的    |

## 稀有度和类型

使用这些方法即时通知您是否打过轮胎。

```zenscript
//Rotities
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

/Typtyp
myChant.setTypeAll()
myChant.setTymor()
myChant.setType()
myChang. etTypeLegs()
myChant.setTypeChest()
myChant.setTypeHead()
myChant.setTypeWeapon()
myChant.setDigger()
myChant.setTypeFishingRod()
myChant.setTypeBow()
myChant.setTypeBow()
myChant.setTypeWearable()
```

## 例子

```zenscript
#loader contenttbinevel
val builder = mods.contenttweeper.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand, feet, legs, chest, head];
builder.setTypeAll();
builder.setRarityVeryRare();
builder. alcModifierDamage = function(thisEnch, level, damageSource)@un.org
    return level;
};

builder。 nUserHurt = function(thisEnch, entity, attacker, level)。
    entity.health = entity.maxhealth；
    if(entity instanceof craftminstrer). layer.IPlayer（原玩家）
        val player as craftbiner.player。 Player = entity；
        player.foodStats.addStats(100,10 f);
    }

};

builder.register();

builder.name = "other_chant";
builder. omain = "definitly_not_cot";
builder.calcModifierDamage = null;
builder. nUserHurt = function(thisEnch, player, attriber, level, },
    player.sendMessage("EARNED IT!");   
};
builder.register();
```