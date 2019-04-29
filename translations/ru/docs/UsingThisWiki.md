# Использование этой вики

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Terms

Before we start, there are some terms you might want to get used to:

## ZenGetter

A ZenGetter is a way of retrieving information from a certain object. For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:

    //object.zenGetter;
    <minecraft:iron_ingot>.displayName;
    

A ZenGetter will always return something, in this case a string representing the item's name ("Iron Ingot").

## ZenSetter

A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". We know from the entry that it is of type string.

We use the ZenSetter like this:

    //object.zenSetter = newValue;
    <minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
    

A ZenSetter will never return something, since it is meant to set, not to get.

## Assign operators

If an item has both, a ZenGetter and a ZenSetter with the same name (e.g. [IItemStack's](/Vanilla/Items/IItemStack/) "displayName"), you can use the assign operators other than `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

    //Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
    //object.zenSetter += value;
    //object.zenSetter = object.zenGetter + value;
    
    <minecraft:iron_ingot>.displayName += " of Doom";
    <minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";