# Слот IEntityEquipmentSlot

Ячейка IEntityEquipmentSlot - это ячейка в инвентаре игрока. Это может быть mainHand или один из слотов брони.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт crafttweaker.entity.IEntityEquipmentSlot;`

## Способы ZenGetters/ZenMethods

| Геттер    | Тип    |
| --------- | ------ |
| index     | int    |
| slotIndex | int    |
| имя       | string |

### Сравнить

Вы можете проверить, совпадают ли два IEntityEquipmentSlot объекты:  
Возвращает доску.

```zenscript
slotOne == slotTwo;
```

## Перечисление

Интерфейс EntityEquipmentSlot содержит 6 статических методов, каждый из которых возвращает предмет IEntityEquipments(Ячейка IEntityEquipment).

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
crafttweaker.entity.IEntityEquipmentSlot.head();
```