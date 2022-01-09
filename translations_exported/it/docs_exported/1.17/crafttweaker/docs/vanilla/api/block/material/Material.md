# Material

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.Material;
```


## Metodi

:::group{name=blocksMotion}

Return Type: boolean

```zenscript
// Material.blocksMotion() as boolean

myMaterial.blocksMotion();
```

:::

:::group{name=getColor}

Return Type: [MaterialColor](/vanilla/api/block/material/MaterialColor)

```zenscript
// Material.getColor() as MaterialColor

myMaterial.getColor();
```

:::

:::group{name=getCommandString}

Gets the bracket syntax for this Material

Returns: The `<blockmaterial>` Bracket Syntax for this material  
Return Type: string

```zenscript
// Material.getCommandString() as string

myMaterial.getCommandString();
```

:::

:::group{name=getPushReaction}

Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// Material.getPushReaction() as PushReaction

myMaterial.getPushReaction();
```

:::

:::group{name=isFlammable}

Return Type: boolean

```zenscript
// Material.isFlammable() as boolean

myMaterial.isFlammable();
```

:::

:::group{name=isLiquid}

Return Type: boolean

```zenscript
// Material.isLiquid() as boolean

myMaterial.isLiquid();
```

:::

:::group{name=isReplaceable}

Return Type: boolean

```zenscript
// Material.isReplaceable() as boolean

myMaterial.isReplaceable();
```

:::

:::group{name=isSolid}

Return Type: boolean

```zenscript
// Material.isSolid() as boolean

myMaterial.isSolid();
```

:::

:::group{name=isSolidBlocking}

Return Type: boolean

```zenscript
// Material.isSolidBlocking() as boolean

myMaterial.isSolidBlocking();
```

:::


## Proprietà

| Nome            | Tipo                                                       | Ha Getter | Ha Setter | Descrizione                               |
| --------------- | ---------------------------------------------------------- | --------- | --------- | ----------------------------------------- |
| blocksMotion    | boolean                                                    | sì        | no        | No Description Provided                   |
| color           | [MaterialColor](/vanilla/api/block/material/MaterialColor) | sì        | no        | No Description Provided                   |
| commandString   | string                                                     | sì        | no        | Gets the bracket syntax for this Material |
| isFlammable     | boolean                                                    | sì        | no        | No Description Provided                   |
| isLiquid        | boolean                                                    | sì        | no        | No Description Provided                   |
| isReplaceable   | boolean                                                    | sì        | no        | No Description Provided                   |
| isSolid         | boolean                                                    | sì        | no        | No Description Provided                   |
| isSolidBlocking | boolean                                                    | sì        | no        | No Description Provided                   |
| pushReaction    | [PushReaction](/vanilla/api/block/material/PushReaction)   | sì        | no        | No Description Provided                   |

