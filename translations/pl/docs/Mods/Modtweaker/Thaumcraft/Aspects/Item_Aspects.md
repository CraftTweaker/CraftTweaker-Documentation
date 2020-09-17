# Aspekty Produktu

Integracja Thaumcraft Modtweakera rozszerza [IItemStacks](/Vanilla/Items/IItemStack/).  
Oznacza to, że możesz użyć poniższych metod na dowolnym obiekcie IItemStack:

## Ustaw aspekty

Możesz użyć tego aby nadpisać, jakie aspekty ma przedmiot normalnie.  
Wymaga [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] lub wielu [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) obiektów.

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```

## Usuń aspekty

Możesz tego użyć, aby zapobiec dodaniu niektórych aspektów do przedmiotu.  
Wymaga [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] lub wielu [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) obiektów.

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```