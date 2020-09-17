# IEnchantment

Суть заклинаний - это [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) и уровень зачарования.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.enchantments.IEnchantment;`

## Геттеры/сеттеры

| Геттер      | Сеттер      | Тип                                                                     |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| definition  |             | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| level       |             | int                                                                     |
| displayName | displayName | string                                                                  |

## Методы

### Получить чары в формате NBT

Вы можете получить NBT-тег Зачара.  
Вы можете использовать его как [IData](/Vanilla/Data/IData/) или использовать метод:

```zenscript
ench.makeTag();
ench as crafttweaker.data.IData;
```