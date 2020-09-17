# Aspectos de la entidad

La integración de Thaumcraft de Modtweaker extiende [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
Esto significa que puede utilizar los métodos siguientes en cualquier objeto IEntityDefinition :

## Definir aspectos

Puede usar esto para anular los aspectos que normalmente tendría una entidad.  
Requiere un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o muchos [objetos CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5);
```

## Eliminar aspectos

Puede utilizar esto para evitar que ciertos aspectos se añadan a una entidad.  
Requiere un [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] o muchos [objetos CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/).

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```