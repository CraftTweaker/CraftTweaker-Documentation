# Эффект "Зелье MC"

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Реализованные интерфейсы
MCPotionEffect реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### Готов

Тип возврата: логическое значение

```zenscript
myMCPotionEffect.isReady(продолжительность, int, усилитель как int);
```

| Параметр     | Тип | Описание             |
| ------------ | --- | -------------------- |
| длительность | int | Описание отсутствует |
| усилитель    | int | Описание отсутствует |


### newInstance

Тип возврата: [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(длительность int, усилитель как int);
```

| Параметр     | Тип | Описание             | Необязательный | Значение по умолчанию |
| ------------ | --- | -------------------- | -------------- | --------------------- |
| длительность | int | Описание отсутствует | false          | `null`                |
| усилитель    | int | Описание отсутствует | true           | `0`                   |



## Свойства

| Название             | Тип                                                                                         | Имеет Getter | Имеет Setter |
| -------------------- | ------------------------------------------------------------------------------------------- | ------------ | ------------ |
| командная строка     | String                                                                                      | true         | false        |
| целительные элементы | Список&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | true         | false        |
| displayName          | String                                                                                      | true         | false        |
| Бенефициар           | boolean                                                                                     | true         | false        |
| Мгновенный           | boolean                                                                                     | true         | false        |
| ликвидационный цвет  | int                                                                                         | true         | false        |
| имя                  | String                                                                                      | true         | false        |

