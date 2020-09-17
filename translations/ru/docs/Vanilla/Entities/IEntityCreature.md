# Сущность

Существ.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.IEntityCreature;`

## Расширение [IEntityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature расширяет [IEntityLiving](/Vanilla/Entities/IEntityLiving/). Это означает, что все функции, доступные для объектов [IEntityLiving](/Vanilla/Entities/IEntityLiving/) , также доступны для IEntityCreature.

## Методы

### ZenGetters/Setters

| Геттер              | Тип                                    |
| ------------------- | -------------------------------------- |
| имеет путь          | bool                                   |
| Снятие ДомДистанции | bool                                   |
| позиция дома        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance | float                                  |
| hasHome             | bool                                   |

### Методы

#### исполнить звук жизни

Метод ничего не ожидает.  
ничего не возвращает.

```zenscript
entCreObj.playLivingSound();
```

#### Установка или отключение дома

Первый метод ожидает объект [IBlockPos](/Vanilla/World/IBlockPos/) и int.  
Второй метод ничего не ожидает.  
Оба метода ничего не возвращают.

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### Проверьте, находится ли положение в пределах домашнего расстояния

Метод ожидает объект [IBlockPos](/Vanilla/World/IBlockPos/) .  
Возвращает щит.

```zenscript
entAnObj.isPositionWithinHomeDistance
```