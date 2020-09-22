# MCWeightedItemStack

ItemStack с шансом, обычно используется для вывода рецептов. <p> Будьте осторожны, если стек был использован для создания WeightedStack, то набор размеров будет мутировать оригинальную стеку!

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Реализованные интерфейсы
MCWeightedItemStack реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Конструкторы
Вручную создает взвешенный ItemStack. Обычно вы можете использовать оператор или `.weight(вес)` метод IItemStack, хотя
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Параметр     | Тип                                                               | Описание                      |
| ------------ | ----------------------------------------------------------------- | ----------------------------- |
| элемент Стек | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек                          |
| вес          | double                                                            | Шанс, между 0 (0%) и 1 (100%) |



## Методы
### вес

Создает новый взвешенный стек с заданным весом

 Возвращается: `новый взвешенный стек предметов`

Тип возврата: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.вес (0.5D).вес (новый вес в два раза);
<item:minecraft:bedrock>.вес (0.5D).вес (0.75D);
```

| Параметр  | Тип    | Описание |
| --------- | ------ | -------- |
| новый вес | double | Процент  |



## Свойства

| Название         | Тип                                                               | Имеет Getter | Имеет Setter |
| ---------------- | ----------------------------------------------------------------- | ------------ | ------------ |
| командная строка | String                                                            | true         | false        |
| stack            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true         | false        |
| вес              | double                                                            | true         | false        |

## Операторы
### MUL

Устанавливает кол-во предметов Stack. <p> Если оригинальный стек был мутирован, также мутирует размер оригинала.

 Возвращается: `новый взвешенный стек предметов`

```zenscript
<item:minecraft:bedrock>.weight (0.5D) * newAmount as int
<item:minecraft:bedrock>.weight (0.5D) * 5
```

| Параметр    | Тип | Описание            |
| ----------- | --- | ------------------- |
| новая сумма | int | Размер нового стека |
### MOD

Создает новый взвешенный стек с заданным процентом

 Возвращается: `новый взвешенный стек предметов`

```zenscript
<item:minecraft:bedrock>.вес (0,5D) % нового веса как int
<item:minecraft:bedrock>.веса (0,5D) % 75
```

| Параметр  | Тип | Описание |
| --------- | --- | -------- |
| новый вес | int | Процент  |

