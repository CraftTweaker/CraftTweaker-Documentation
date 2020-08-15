# 死亡箱子

## 导入相关包

`导入 mods.vanilladeathchest.DeathChestDefense;`

## 解锁物品

```zenscript
///DeathChestDefense.setUnlocker(字符串阶段，IItemStack 解锁)；
DeathChestDefense.setUnlocker(“example_stage”， <minecraft:diamond_axe> * 1000)；
```

可以通过指定堆栈大小来设置消耗/损坏金额。

## 损坏解锁项目而不是消耗它

```zenscript
///DeathChestDefense.setDamageUnlockerInsintofConsume(string stage, bool flag);
DeathChestDefense.setDamageUnlockerInstance("example_stage", true);
```

## 解锁失败的聊天消息

```zenscript
///DeathChestDefense.setUnlockFailedChatMessage(字符串级，字符串信息)；
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "你需要获得一个 %2$s 解锁来箱子!")；
```

字符串需要两个参数：所需项目的数量和显示名称。

## 防御实体

```zenscript
///DeathChestDefense.setDefenseEntity(string deathChestDefenseEntity);
DeathChestDefense.setDefenseEntity(“example_stage”, <entity:minecraft:zombie_pigman>);
```

## 防御实体 NBT

```zenscript
///DeathChestDefense.setDefenseEntityNBT(字符串级，IData nbt)；
DeathChestDefense.setDefenseEntityNBT("example_stage", format@@
    HandItems：[

            Count: 1,
            id：“minecraft:diamond_sword”
        }

})；
```

`nbt` 应该是一个 [数据地图](/Vanilla/Data/DataMap/)。

## 防御实体生成计数

```zenscript
///DeathChestDefense.setDefenseEntitySpawnCount(字符串级，int count)；
DeathChestDefenseEntitySpawnCount(“example_stage”，500)；
```