# Меканизм

Поддержка Mekanism CraftTweaker была интегрирована непосредственно в Меканизм ([ссылка](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Меканизм добавляет поддержку кронштейна для определения **газа** -- состояние материала отличается от ковки [**жидкостей**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*Отмечая, что `<gas:water>` отличается от `<liquid:water>`*

В соответствии с Меканизмом 9.7.0 теперь можно просматривать все зарегистрированные газы (включая газы других режимов) по команде `/ct газов`

Кроме того, с помощью меканизма 9.7.1 можно получить обработчик газа/кронштейна через строку. Используйте `mods.mekanism.MekanismHelper.getGas(строка);`

## Пример

```zenscript
импортировать mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) как IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## Геттеры

Как и LiquidStacks, IGasStacks также поддерживают некоторые специальные ZenGetters.  
Вы называете ZenGetters с помощью `gas.Getter` (например, `<gas:water>.name`)

| Геттер      | Описание                                   | Возвращаемый тип |
| ----------- | ------------------------------------------ | ---------------- |
| definition  | Возвращает определение газа                | IGasDefinition   |
| ИМЯ         | Возвращает имя газа                        | string           |
| displayName | Возвращает отображаемое имя газа           | string           |
| сумма       | Возвращает количество газа в миллисекундах | int              |

## Установка количества объекта

Вы можете задать количество объекта (объем газа в миллиблоках) двумя способами, оба из которых одинаковы:

```zenscript
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```

## IGasDefinition

Объект IGasDefinition содержит информацию о газе.  
Вы можете получить такой объект, используя `gasStack.definition` (проверьте таблицу выше)

| Геттеры     | Описание                                    | Возвращаемый тип |
| ----------- | ------------------------------------------- | ---------------- |
| ИМЯ         | Возвращает название упомянутого газа        | string           |
| displayName | Возвращает отображаемое имя указанного газа | string           |

Вы можете умножить определение газа, чтобы вернуть новый IGasStack с заданным количеством в миллиблоках:

```zenscript
var gas_definition = <gas:water>.definition;
var gas_bucket = gas_definition * 1000;
```