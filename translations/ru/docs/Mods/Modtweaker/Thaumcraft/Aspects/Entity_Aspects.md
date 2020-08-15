# Аспекты сущностей

Интеграция Thaumcraft Modtweaker расширяет [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).  
Это означает, что вы можете использовать методы ниже в любом объекте IEntityDefinition:

## Установить аспекты

Вы можете использовать это, чтобы переопределить какие аспекты имеет сущность обычно имеется.  
Требуется [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] или много [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) объектов.

```zenscript
<entity:sheep>.setAspects(<aspect:terra>*5);
```

## Удалить аспекты

Вы можете использовать это для предотвращения добавления определенных аспектов в объект.  
Требуется [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] или много [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) объектов.

```zenscript
<entity:blaze>.removeAspects(<aspect:ignis>);
```