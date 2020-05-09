# MCMaterial

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Методы
### blocksMovement

Возвращает, если этот материал считается твёрдым или нет.

Возвращает boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Извлекает цветовой индекс блока. Это тот же цвет, который используется ванильными картами для представления этого блока.

Возвращает [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Возвращает, если блок может гореть или нет.

Возвращает boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Возвращает, если блоки из этих материалов являются жидкостями.

Возвращает boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Укажите, является ли материал непрозрачным

Возвращает boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Возвращает, можно ли заменить материал другими блоками при размещении - например, снегом, лозой или высокой травой.

Возвращает boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Возвращает true, если блок считается твёрдым. По умолчанию это true.

Возвращает boolean

```zenscript
myMCMaterial.isSolid();
```

### isToolNotRequired

Возвращает true, если материал может быть собран без инструмента (или с неправильным инструментом)

Возвращает boolean

```zenscript
myMCMaterial.isToolNotRequired();
```


