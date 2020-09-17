# Обработчик деталей Material Part

The Material Part Bracket Handler gives you access to the Material Parts in the game. Вы можете получить только те материалы, которые зарегистрированы в игре, так что вам нужно быть осторожным в порядке загрузки скриптов.

Материальные части упоминаются в обработчике деталей Material Part Bracket таким образом:

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

Если материальная часть найдена, то будет возвращен объект MaterialPartDefinition.  
Это объект, который действует как оба an [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) а также объект [IItemStack](/Vanilla/Items/IItemStack/) , , так что оба интерфейса будут работать над возвращаемым определением.