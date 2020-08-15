# CTAspectStack

CTAspectStack - это [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) в сочетании с количеством, показывающим сколько очков будет сделано.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импортировать thaumcraft.aspectStack;`

## Получение такого объекта

Вы можете получить объект CTAspectStack от объекта [CTAspectStack Bracket](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/):

```zenscript
val aspect = <aspect:ignis>;
```

## Геттеры

| Название   | Тип                                                              |
| ---------- | ---------------------------------------------------------------- |
| сумма      | int                                                              |
| внутренняя | [Аспект CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Установка суммы

```zenscript
//Они делают то же самое, оба возвращают новый CTAspectStack
аспект валы = <aspect:ignis> * 10;

аспект вал1 = <aspect:ignis>.setAmount(10);
```