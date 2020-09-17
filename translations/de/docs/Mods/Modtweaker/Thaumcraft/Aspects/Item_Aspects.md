# Element Aspekte

Modtweakers Thaumcraft-Integration erweitert [IItemStacks](/Vanilla/Items/IItemStack/).  
Das bedeutet, dass Sie die folgenden Methoden für jedes IItemStack Objekt verwenden können:

## Aspekte setzen

Hiermit kannst du überschreiben, welche Aspekte ein Gegenstand normalerweise hat.  
Benötigt einen [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] oder viele [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) Objekte.

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```

## Aspekte entfernen

Hiermit kannst du verhindern, dass bestimmte Aspekte einem Element hinzugefügt werden.  
Benötigt einen [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] oder viele [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) Objekte.

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```