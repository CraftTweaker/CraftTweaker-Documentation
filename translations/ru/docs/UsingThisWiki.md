# Использование этой вики

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Термины

Перед тем как начать, вы должны понять некоторые термины:

## Геттер

Геттер ZenScipt — способ получить информацию о некотором объекте. Например, у [IItemStack](/Vanilla/Items/IItemStack/) есть геттер displayName.  
Мы используем геттер вот так:

    //объект.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

Геттер всегда что-нибудь возвращает, в данном случае &mdash; текстовое представление имени предмета ("Iron Ingot").

## Сеттер

Сеттер работает почти так же, как и геттер, единственное отличие в том, что сеттер устанавливает значение, а геттер &mdash; получает.  
Давайте снова начнем с [IItemStack](/Vanilla/Items/IItemStack/), у которого также есть сеттер displayName. Мы знаем, что тип этой записи &mdash; строка.

Мы используем сеттеры ZenScipt вот так:

    //объект.сеттер = новоеЗначение;
    <minecraft:iron_ingot>.displayName = "Как ни странно, слиток";
    

A ZenSetter will never return something, since it is meant to set, not to get.

## Операторы присваивания

If an item has both, a ZenGetter and a ZenSetter with the same name (e.g. [IItemStack's](/Vanilla/Items/IItemStack/) "displayName"), you can use the assign operators other than `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

    //Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
    //object.zenSetter += value;
    //object.zenSetter = object.zenGetter + value;
    
    <minecraft:iron_ingot>.displayName += " of Doom";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";