# IFoodStats

Интерфейс IPlayer позволяет просматривать информацию о параметрах еды игрока.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| Геттеры              | ZenSetter            | Тип     |
| -------------------- | -------------------- | ------- |
| Уровень еды          | Уровень еды          | int     |
| уровень насыщенности | уровень насыщенности | float   |
| еда                  |                      | boolean |

## ZenMethods

#### Добавление статистики

Процедура Бездны. Принимает int и float в качестве параметра intput .

```zenscript
stats.addStats(int food Value, float saturationLevel);
```

#### onUpdate

Процедура Бездны. В качестве входного параметра принимает объект [IPlayer](/Vanilla/Players/IPlayer/).

```zenscript
stats.onUpdate(IPlayer игрока);
```

#### асНБТ

Возвращает объект IData представляющий статистику еды.

```zenscript
stats.asNBT();
статистика как crafttweaker.data.IData;
```

#### Добавить выдержку

Функция Бездна. принимает значение с плавающей точкой в качестве входного параметра.

```zenscript
stats.addExhaustion(истощение с плавающей запятой);
```