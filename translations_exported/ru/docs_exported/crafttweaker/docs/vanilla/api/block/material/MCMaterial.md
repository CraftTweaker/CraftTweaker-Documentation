# MCMaterial

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## Methods

### blocksMovement

Возвращает, если этот материал считается твёрдым или нет.

Return Type: boolean

```zenscript
MCMaterial.blocksMovement() as boolean
myMCMaterial.blocksMovement();
```

### getColor

Извлекает цветовой индекс блока. Это тот же цвет, который используется ванильными картами для представления этого блока.

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
MCMaterial.getColor() as MCMaterialColor
myMCMaterial.getColor();
```

### isFlammable

Возвращает, если блок может гореть или нет.

Return Type: boolean

```zenscript
MCMaterial.isFlammable() as boolean
myMCMaterial.isFlammable();
```

### isLiquid

Возвращает, если блоки из этих материалов являются жидкостями.

Return Type: boolean

```zenscript
MCMaterial.isLiquid() as boolean
myMCMaterial.isLiquid();
```

### isOpaque

Укажите, является ли материал непрозрачным

Return Type: boolean

```zenscript
MCMaterial.isOpaque() as boolean
myMCMaterial.isOpaque();
```

### isReplaceable

Возвращает, можно ли заменить материал другими блоками при размещении - например, снегом, лозой или высокой травой.

Return Type: boolean

```zenscript
MCMaterial.isReplaceable() as boolean
myMCMaterial.isReplaceable();
```

### isSolid

Возвращает true, если блок считается твёрдым. По умолчанию это true.

Return Type: boolean

```zenscript
MCMaterial.isSolid() as boolean
myMCMaterial.isSolid();
```


## Свойства

| Название      | Тип                                                            | Имеет Getter | Имеет Setter |
| ------------- | -------------------------------------------------------------- | ------------ | ------------ |
| color         | [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor) | true         | false        |
| commandString | string                                                         | true         | false        |

