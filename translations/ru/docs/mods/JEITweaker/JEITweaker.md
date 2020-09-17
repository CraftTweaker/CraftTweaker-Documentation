# JEITweaker

## Описание

Этот мод добавляет поддержку CraftTweaker в JEI. CraftTweaker изначально поддерживал JEI, но в связи с перезаписью версии 1.14, поддержка JEI перемещена в собственный мод.


## Пакет
`mods.jei.JEI`

## Скрытие предметов

Это скроет данный предмет в JEI. В данном примере будет скрыт блок грязи в меню JEI.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Скрытие категории

Это скроет данную категорию в JEI. Данный пример будет скрывать категорию печей при поиске рецептов в JEI.

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

Категории по умолчанию:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Моды могут добавлять больше категорий!

## Добавить информацию

Это добавит информацию к предмету, которая будет показана при использовании просмотра в JEI!.

Этот точный пример добавит 3 строки информации к предмету «Алмаз».

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["Это первая строка!", "Это вторая!", "третья"]);
```

Вышеприведенный код будет производить: ![Коробка фиксации заполнена](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


