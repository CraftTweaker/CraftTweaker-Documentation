# Aspetti Dell'Entità

L'integrazione di Modtweaker's Thaumcraft estende [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
Ciò significa che è possibile utilizzare i metodi qui sotto su qualsiasi oggetto IEntityDefinition:

## Imposta gli aspetti

È possibile utilizzare questo per sovrascrivere gli aspetti che un'entità avrebbe normalmente.  
Richiede un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o molti [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) oggetti.

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5);
```

## Rimuovi gli aspetti

Puoi usarlo per evitare che alcuni aspetti vengano aggiunti a un'entità.  
Richiede un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o molti [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) oggetti.

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```