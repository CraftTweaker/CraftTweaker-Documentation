# Защита Сундука смерти

## Импорт пакета

`import mods.vanilladeathchest.DeathDefense;`

## Разблокировать элемент

```zenscript
//DeathChestDefense.setUnlocker(string stage, IItemStack unlocker);
DeathChestDefense.setUnlocker("example_stage", <minecraft:diamond_axe> * 1000);
```

Количество потребления/урона можно установить, указав размер стека как выше.

## Нанесите урон предмету разблокировки, а не потребляйте

```zenscript
//Сундук защиты.setDamageUnlockerInsteadOfConsume(string stage, bool flag);
DeathChestDefense.setDamageUnlockerInsteadOfConsume("example_stage", true);
```

## Разблокировать неудачное сообщение чата

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(string stage, string message);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "Вам нужно получить %2$s для разблокировки сундука!");
```

Строка принимает два аргумента: количество и отображаемое имя необходимых элементов.

## Оборона

```zenscript
//ChestDefense.setDefenseEntity(строковая стадия, IEntityDefinition защиты);
сундук DeathDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## NBT Обороны

```zenscript
//DeathChestDefense.setDefenseEntityNBT(string stage, IData nbt);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
    HandItems: [
        {
            Count: 1,
            id: "minecraft:diamond_sword"
        } }
    ]
});
```

`nbt` должен быть [DataMap](/Vanilla/Data/DataMap/).

## Количество спавна защитных объектов

```zenscript
//ChestDefense.setDefenseEntitySpawnCount(string stage, int count);
DeathDefense.setDefenseEntitySpawnCount("example_stage", 500);
```