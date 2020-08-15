# IEntityMod

A Mod.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.IEntityMob;`

## Расширение [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Это означает, что все функции, доступные для объектов [IEntityCreature](/Vanilla/Entities/IEntityCreature/) , также доступны для IEntityMob.

## Методы

### ZenMethods

#### Проверьте, предотвращает ли моб сн игрока

Метод требует [IPlayer](/Vanilla/Players/IPlayer/) объекта.  
Возвращает рабочее пространство.

```zenscript
entMobObj.isPreventingPlayerRest(Игрок);
```