# Использование этой вики

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Термины

Перед тем как начать, вы должны понять некоторые термины:

## ZenGetter

A ZenGetter is a way of retrieving information from a certain object. Например, у [IItemStack](/Vanilla/Items/IItemStack/) есть ZenGetter displayName.  
Мы используем ZenGetter вот так:

    //объект.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

ZenGetter всегда что-нибудь возвращает, в данном случае &mdash; текстовое представление имени предмета ("Iron Ingot").

## ZenSetter

A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". We know from the entry that it is of type string.

Мы используем ZenSetter'ы вот так:

    //объект.zenSetter = новоеЗначение;
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