# Эффект IPotionEffect

IPotionEffect - это [IPotion](/Vanilla/Potions/IPotion/) , который также имеет длительность и параметр усилителя (прочности).  
Вы можете получить их с объекта [IPotion](/Vanilla/Potions/IPotion/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импортируйте crafttweaker.potions.IPotionEffect;`

## Геттеры

| ZenGetter                             | Тип                                              |
| ------------------------------------- | ------------------------------------------------ |
| длительность                          | int                                              |
| зелье                                 | [Зелье](/Vanilla/Potions/IPotion/)               |
| не Показать частицы                   | bool                                             |
| усилитель                             | int                                              |
| целительные элементы                  | Список<[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                            | string                                           |
| isAmbient                             | bool                                             |
| isPotionDurationMax (также ZenSetter) | bool                                             |

## Методы

### Элемент лечебного элемента

Использует [IItemStack](/Vanilla/Items/IItemStack/).  
возвращает бул

```zenscript
isCurativeItem(IItemStack item);
```

### Выполнить эффект на сущность

Использует [IEntity](/Vanilla/Entities/IEntity/) или любой из своих подклассов (например, [IPlayer](/Vanilla/Players/IPlayer/)).  
Возвращает недействительный (ничего).

```zenscript
performtEffect(IEntity Entity);
```