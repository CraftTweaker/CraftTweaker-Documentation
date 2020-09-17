# Блендер

Blender объединяет в себе предметы и напитки, восстанавливающие еду и насыщенность.

## Ванильные Напитки

- Fruit Crush (2x Apple, 4x Melon) для 4 еды.
- Veggie Juice (4x Carrot, 1x Potato, 2x Тыквенная Пиа) для 6 продуктов.
- Cookies and Cream Milkshake (2x Cookie, 1x Milk Bucket) for 4 food.
- Энергетический напиток (8х редстоун, 1х огненный сбор, 16х сахар) на 8 ед.

## Удаление напитков

## Удалите подходящие смесительные напитки.

```zenscript
mods.cfm.Blender.remove(@Optional final String name, @Optional final IItemStack[] ingredients, @Optional final Integer food, @Optional final int[] color);

// Удаляем напиток с именем "Fruit Crush"
mods.cfm.Blender. emove("Fruit Crush");
// Удаляем напитки, требующие одного морковя, одного картофеля и одного тыквенного пирога, чтобы создать
моды. fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Удаляем все напитки
mods.cfm.Blender.remove();
```

## Добавление напитков

Добавить смешанный напиток.

## В настоящее время насыщенность и ценность продуктов питания не могут быть заданы самостоятельно.

```zenscript
mods.cfm.Blender. ddDrink(@Nonnull final String name, @Nonnull final IItemStack[] ingredients, final int food, @Nonnull final int[] color);

// Добавляем напиток под названием "Арбуз Снеж", который окрашен в розовый цвет и восстанавливает 20 еды и 20 насыщенности, требуя 8 дын и 4 снежков для создания
модов. fm.Blender.addDrink("Watermelon Snow", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```