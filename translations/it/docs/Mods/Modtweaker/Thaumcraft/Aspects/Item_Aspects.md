# Aspetti Oggetto

L'integrazione di Modtweaker's Thaumcraft estende [IItemStacks](/Vanilla/Items/IItemStack/).  
Ciò significa che è possibile utilizzare i metodi qui sotto su qualsiasi oggetto IItemStack:

## Imposta gli aspetti

È possibile utilizzare questo per sovrascrivere gli aspetti che un elemento avrebbe normalmente.  
Richiede un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o molti [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) oggetti.

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```

## Rimuovi gli aspetti

È possibile utilizzare questo per evitare che alcuni aspetti vengano aggiunti ad un elemento.  
Richiede un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o molti [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) oggetti.

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```