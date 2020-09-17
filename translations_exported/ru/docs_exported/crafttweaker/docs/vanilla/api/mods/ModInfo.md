# Информация о моде

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Свойства

| Название          | Тип                                                                                                  | Имеет Getter | Имеет Setter |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| blocks            | Список&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true         | false        |
| displayName       | String                                                                                               | true         | false        |
| типы сущностей    | Список&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true         | false        |
| элементы          | Список&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | true         | false        |
| мод               | String                                                                                               | true         | false        |
| пространство имён | String                                                                                               | true         | false        |
| version           | String                                                                                               | true         | false        |

