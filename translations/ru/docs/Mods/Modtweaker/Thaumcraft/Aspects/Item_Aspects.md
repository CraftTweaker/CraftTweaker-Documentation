# Аспекты предметов

Интеграция Thaumcraft Modtweaker расширяет [IItemStacks](/Vanilla/Items/IItemStack/).  
Это означает, что вы можете использовать методы ниже в любом объекте IItemStack:

## Установить аспекты

Вы можете использовать это, чтобы переопределить какие аспекты должен иметь предмет.  
Требуется [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] или много [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) объектов.

```zenscript
<minecraft:stone>.setAspects(<aspect:ignis>*5);
```

## Удалить аспекты

Вы можете использовать это, чтобы предотвратить добавление определенных аспектов к элементу.  
Требуется [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[] или много [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) объектов.

```zenscript
<minecraft:iron_ore>.removeAspects(<aspect:terra>);
```