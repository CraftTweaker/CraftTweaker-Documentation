# Entitätsaspekte

Die Thaumcraft-Integration von Modtweaker erweitert [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
Das bedeutet, dass Sie die folgenden Methoden für jedes IEntityDefinition-Objekt verwenden können:

## Aspekte setzen

Hiermit kannst du überschreiben, welche Aspekte eine Entität normalerweise haben würde.  
Benötigt einen [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] oder viele [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) Objekte.

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5);
```

## Aspekte entfernen

Hiermit können Sie verhindern, dass bestimmte Aspekte einer Entität hinzugefügt werden.  
Benötigt einen [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] oder viele [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) Objekte.

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```