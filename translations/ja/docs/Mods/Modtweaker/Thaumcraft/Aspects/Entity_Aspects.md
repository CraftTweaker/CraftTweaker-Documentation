# Entity Aspects

Modtweaker's Thaumcraft integration extends [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
That means that you can use the methods below on any IEntityDefinition object:

## Set aspects

You can use this to override what aspects an entity would normally have.  
Requires a [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] or many [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) objects.

    <entity:sheep>.setAspects(<aspect:terra>*5);
    

## Remove aspects

You can use this to prevent certain aspects from being added to an entity.  
Requires a [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] or many [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) objects.

    <entity:blaze>.removeAspects(<aspect:ignis>);