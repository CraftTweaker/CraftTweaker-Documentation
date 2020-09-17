# MCBlock

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.block.MCBlock
```

## Методы
### canSpawnInBlock

Тип возврата: логическое значение

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Тип возврата: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Свойства

| Название       | Тип    | Имеет Getter | Имеет Setter |
| -------------- | ------ | ------------ | ------------ |
| lootTable      | String | true         | false        |
| translationKey | String | true         | false        |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | false            |

