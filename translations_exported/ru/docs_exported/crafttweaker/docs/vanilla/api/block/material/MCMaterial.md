# MCMaterial

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Implemented Interfaces
MCMaterial реализует следующие интерфейсы. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### blocksMovement

Возвращает, если этот материал считается твёрдым или нет.

Return type: boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Извлекает цветовой индекс блока. Это тот же цвет, который используется ванильными картами для представления этого блока.

Тип возврата: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Возвращает, если блок может гореть или нет.

Return type: boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Возвращает, если блоки из этих материалов являются жидкостями.

Return type: boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Укажите, является ли материал непрозрачным

Return type: boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Возвращает, можно ли заменить материал другими блоками при размещении - например, снегом, лозой или высокой травой.

Return type: boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Возвращает true, если блок считается твёрдым. По умолчанию это true.

Return type: boolean

```zenscript
myMCMaterial.isSolid();
```


## Свойства

| Название      | Тип    | Имеет Getter | Имеет Setter |
| ------------- | ------ | ------------ | ------------ |
| commandString | String | true         | false        |

