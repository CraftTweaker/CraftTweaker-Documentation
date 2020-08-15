# Aspekty jednostki

Integracja Thaumcraft Modtweakera rozszerza [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
Oznacza to, że możesz użyć poniższych metod na dowolnym obiekcie IEntityDefinition:

## Ustaw aspekty

Możesz użyć tego aby nadpisać jakie aspekty jednostka miałaby normalnie.  
Wymaga [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] lub wielu [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) obiektów.

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5);
```

## Usuń aspekty

Możesz tego użyć, aby zapobiec dodaniu niektórych aspektów do jednostki.  
Wymaga [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] lub wielu [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) obiektów.

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```