# MCMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## Methods

:::group{name=blocksMovement}

Ritorna se questo materiale è considerato solido o no

Return Type: boolean

```zenscript
// MCMaterial.blocksMovement() as boolean

myMCMaterial.blocksMovement();
```

:::

:::group{name=getColor}

Restituisce l'indice di colore del blocco. Questo è lo stesso colore utilizzato dalle mappe vanilla per rappresentare questo blocco.

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
// MCMaterial.getColor() as MCMaterialColor

myMCMaterial.getColor();
```

:::

:::group{name=getCommandString}

Gets the bracket syntax for this Material

Return Type: string

```zenscript
// MCMaterial.getCommandString() as string

myMCMaterial.getCommandString();
```

:::

:::group{name=getPushReaction}

Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).

Return Type: [PushReaction](/vanilla/api/block/material/PushReaction)

```zenscript
// MCMaterial.getPushReaction() as PushReaction

myMCMaterial.getPushReaction();
```

:::

:::group{name=isFlammable}

Ritorna se il blocco può bruciare o meno.

Return Type: boolean

```zenscript
// MCMaterial.isFlammable() as boolean

myMCMaterial.isFlammable();
```

:::

:::group{name=isLiquid}

Restituisce se i blocchi fatti di questo materiale sono liquidi.

Return Type: boolean

```zenscript
// MCMaterial.isLiquid() as boolean

myMCMaterial.isLiquid();
```

:::

:::group{name=isOpaque}

Indica se questo materiale è opaco

Return Type: boolean

```zenscript
// MCMaterial.isOpaque() as boolean

myMCMaterial.isOpaque();
```

:::

:::group{name=isReplaceable}

Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta.

Return Type: boolean

```zenscript
// MCMaterial.isReplaceable() as boolean

myMCMaterial.isReplaceable();
```

:::

:::group{name=isSolid}

Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.

Return Type: boolean

```zenscript
// MCMaterial.isSolid() as boolean

myMCMaterial.isSolid();
```

:::


## Properties

| Name           | Type                                                           | Ha Getter | Ha Setter | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| blocksMovement | boolean                                                        | true      | false     | Ritorna se questo materiale è considerato solido o no                                                                                  |
| color          | [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor) | true      | false     | Restituisce l'indice di colore del blocco. Questo è lo stesso colore utilizzato dalle mappe vanilla per rappresentare questo blocco.   |
| commandString  | string                                                         | true      | false     | Gets the bracket syntax for this Material                                                                                              |
| flammable      | boolean                                                        | true      | false     | Ritorna se il blocco può bruciare o meno.                                                                                              |
| liquid         | boolean                                                        | true      | false     | Restituisce se i blocchi fatti di questo materiale sono liquidi.                                                                       |
| opaque         | boolean                                                        | true      | false     | Indica se questo materiale è opaco                                                                                                     |
| pushReaction   | [PushReaction](/vanilla/api/block/material/PushReaction)       | true      | false     | Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).                                                         |
| replaceable    | boolean                                                        | true      | false     | Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta. |
| solid          | boolean                                                        | true      | false     | Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.                                          |

