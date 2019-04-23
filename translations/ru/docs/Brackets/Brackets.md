# Обработчики скобок

ZenScript использует скобки, чтобы ссылаться на игровые объекты вроде предметов, сущностей или словаря руд. 

## Как использовать обработчики скобок

Brackets in ZenScript are defined using the `<` and `>` characters, anything inside these characters are considered a Bracket.

An example of a Bracket Handler would be the Item Bracket Handler, which gives you access to the items inside the game.

## Примеры

Примером [обработчика скобок предмета](/Vanilla/Brackets/Bracket_Item/) был бы:

    <minecraft:apple>
    

Это даст вам доступ к [предмету](/Vanilla/Items/IItemStack/) `яблока`.

An example of the [OreDictEntry Bracket Handler](/Vanilla/Brackets/Bracket_Ore/) would be:

    <ore:ingotIron>
    

This will give you access to the [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) for `ingotIron`.