# Aspectos del artículo

La integración de Thaumcraft de Modtweaker extiende de [ItemStacks](/Vanilla/Items/IItemStack/).  
Esto significa que puede utilizar los métodos siguientes en cualquier objeto ItemStack:

## Definir aspectos

Puedes usar esto para anular los aspectos que normalmente tendría un objeto.  
Requiere un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o muchos [objetos CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```

## Eliminar aspectos

Puedes usar esto para evitar que ciertos aspectos se añadan a un objeto.  
Requiere un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o muchos [objetos CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```