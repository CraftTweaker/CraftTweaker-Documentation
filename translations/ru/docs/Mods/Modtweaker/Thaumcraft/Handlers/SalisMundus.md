# Salis Mundus

Этот пакет позволяет добавить обработчики конверсий для обработчика salis thaumcraft.  
Эти обработчики вызываются, когда вы нажимаете на блок в мире с помощью соли Thaumcraft, чтобы изменить их на что-то другое.

Если этот результат является блоком, он будет помещен в мир, если нет, он будет выброшен как предмет.

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thaumcraft.SalisMundus;
```

## Добавить рецепты

Вы можете указать [IBlock](/Vanilla/Blocks/IBlock/) или [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
Если вы не указали исследование, этот рецепт всегда будет возможен, если вы решите указать исследовательскую строку, то необходимо разблокировать исследование, чтобы преобразование в работу.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Удалить рецепты

Вы также можете удалить все рецепты, которые возвращают соответствующий предмет.  
Этот обработчик проверяет, соответствует ли предоставленный параметр выходящему itemStack, так что вы можете удалить все рецепты с использованием масляного ингредиента `<*>`.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//Удаляет ВСЕ зарегистрированные обработчики
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Удаляет только распятый обработчик
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```