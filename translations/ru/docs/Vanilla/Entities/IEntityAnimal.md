# IEntityAnimal

Животное.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.IEntityAnimal;`

## Расширение [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal расширяет [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). Это означает, что все функции, доступные [IEntities](/Vanilla/Entities/IEntityAgeable/) , также доступны для IEntityAnimal.

## Методы

### ZenGetters/Setters

| Геттер    | Тип                                                  |
| --------- | ---------------------------------------------------- |
| loveCause | [IPlayer](/Vanilla/Players/IPlayer/) (быть нулевым!) |
| isInLove  | bool                                                 |

### Методы

#### проверить можно ли использовать предмет для размножения животного

Метод ожидает [IItemStack](/Vanilla/Items/IItemStack/).  
возвращает дрон.

```zenscript
entAnObj.isBreedingItem(IItemStack);
```

#### Установить или сбросить влюбленность

Первый метод требует необязательный [IPlayer](/Vanilla/Players/IPlayer/) объект, второе ничего.  
Ничего не возвращает.

```zenscript
entAnObj.setInLove(@Optional IPlayer player);
entAnObj.resetInLove();
```

#### Проверьте, может ли другое животное совпадать с этим.

Метод ожидает IEntityAnimal объект.  
Возвращает щит.

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```