# Item Aspects

Modtweaker's Thaumcraft integration extends [IItemStacks](/Vanilla/Items/IItemStack/).  
That means that you can use the methods below on any IItemStack object:

## Set aspects

You can use this to override what aspects an item would normally have.  
Requires a [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] or many [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) objects.

    <minecraft:stone>.setAspects(<aspect:ignis>*5);
    

## Remove aspects

You can use this to prevent certain aspects from being added to an item.  
Requires a [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] or many [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) objects.

    <minecraft:iron_ore>.removeAspects(<aspect:terra>);