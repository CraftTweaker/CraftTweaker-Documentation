# MCMaterial

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## Methods

:::group{name=blocksMovement}

Возвращает, если этот материал считается твёрдым или нет.

Return Type: boolean

```zenscript
// MCMaterial.blocksMovement() as boolean

myMCMaterial.blocksMovement();
```

:::

:::group{name=getColor}

Извлекает цветовой индекс блока. Это тот же цвет, который используется ванильными картами для представления этого блока.

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
// MCMaterial.getColor() as MCMaterialColor

myMCMaterial.getColor();
```

:::

:::group{name=getCommandString}

Gets the bracket syntax for this Material

Returns: The `<blockmaterial>` Bracket Syntax for this material  
Return Type: string

```zenscript
// MCMaterial.getCommandString() as string

myMCMaterial.getCommandString();
```

:::

:::group{name=getPushReaction}

Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).

Returns: The [PushReaction](/vanilla/api/block/material/PushReaction) of this Material.  
Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// MCMaterial.getPushReaction() as PushReaction

myMCMaterial.getPushReaction();
```

:::

:::group{name=isFlammable}

Возвращает, если блок может гореть или нет.

Return Type: boolean

```zenscript
// MCMaterial.isFlammable() as boolean

myMCMaterial.isFlammable();
```

:::

:::group{name=isLiquid}

Возвращает, если блоки из этих материалов являются жидкостями.

Return Type: boolean

```zenscript
// MCMaterial.isLiquid() as boolean

myMCMaterial.isLiquid();
```

:::

:::group{name=isOpaque}

Укажите, является ли материал непрозрачным

Return Type: boolean

```zenscript
// MCMaterial.isOpaque() as boolean

myMCMaterial.isOpaque();
```

:::

:::group{name=isReplaceable}

Возвращает, можно ли заменить материал другими блоками при размещении - например, снегом, лозой или высокой травой.

Return Type: boolean

```zenscript
// MCMaterial.isReplaceable() as boolean

myMCMaterial.isReplaceable();
```

:::

:::group{name=isSolid}

Возвращает true, если блок считается твёрдым. По умолчанию это true.

Return Type: boolean

```zenscript
// MCMaterial.isSolid() as boolean

myMCMaterial.isSolid();
```

:::


## Свойства

| Название       | Тип                                                            | Имеет Getter | Имеет Setter | Description                                                                                                              |
| -------------- | -------------------------------------------------------------- | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| blocksMovement | boolean                                                        | true         | false        | Возвращает, если этот материал считается твёрдым или нет.                                                                |
| color          | [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor) | true         | false        | Извлекает цветовой индекс блока. Это тот же цвет, который используется ванильными картами для представления этого блока. |
| commandString  | string                                                         | true         | false        | Gets the bracket syntax for this Material                                                                                |
| flammable      | boolean                                                        | true         | false        | Возвращает, если блок может гореть или нет.                                                                              |
| liquid         | boolean                                                        | true         | false        | Возвращает, если блоки из этих материалов являются жидкостями.                                                           |
| opaque         | boolean                                                        | true         | false        | Укажите, является ли материал непрозрачным                                                                               |
| pushReaction   | [PushReaction](/vanilla/api/block/material/PushReaction)       | true         | false        | Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).                                           |
| replaceable    | boolean                                                        | true         | false        | Возвращает, можно ли заменить материал другими блоками при размещении - например, снегом, лозой или высокой травой.      |
| solid          | boolean                                                        | true         | false        | Возвращает true, если блок считается твёрдым. По умолчанию это true.                                                     |

