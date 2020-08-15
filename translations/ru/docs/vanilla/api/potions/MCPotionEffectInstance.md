# Экземпляр MCPotionEffectEffect

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
Экземпляр crafttweaker.api.potion.MCPotionEffectEffect
```

## Методы
### Дополнительная фигура

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### комбинировать

Возвращает boolean

```zenscript
myMCPotionEffectInstance.combine(эффект как crafttweaker.api.potion.MCPotionEffectInstance);
```

| Параметр | Тип                                                                                                   | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------- | -------------------- |
| effect   | [Экземпляр crafttweaker.api.potion.MCPotionEffectEffect](/vanilla/api/potions/MCPotionEffectInstance) | Описание отсутствует |


### getCurativeItems

Возвращает список <[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Возвращает boolean

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(предметы как crafttweaker.api.item.IItemStack[]);
```

| Параметр | Тип                                                                 | Описание             |
| -------- | ------------------------------------------------------------------- | -------------------- |
| элементы | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Описание отсутствует |



## Свойства

| Название         | Тип                                                                           | Имеет Getter | Имеет Setter |
| ---------------- | ----------------------------------------------------------------------------- | ------------ | ------------ |
| окружающий       | boolean                                                                       | true         | false        |
| усилитель        | int                                                                           | true         | false        |
| длительность     | int                                                                           | true         | false        |
| effectName       | String                                                                        | true         | false        |
| зелье            | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true         | false        |
| показать иконку  | boolean                                                                       | true         | false        |
| показать частицы | boolean                                                                       | true         | false        |

