# MCMaterial

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## Metodi

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


## Proprietà

| Nome           | Tipo                                                           | Ha Getter | Ha Setter | Descrizione                                                                                                                            |
| -------------- | -------------------------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| blocksMovement | boolean                                                        | sì        | no        | Ritorna se questo materiale è considerato solido o no                                                                                  |
| color          | [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor) | sì        | no        | Restituisce l'indice di colore del blocco. Questo è lo stesso colore utilizzato dalle mappe vanilla per rappresentare questo blocco.   |
| commandString  | string                                                         | sì        | no        | Gets the bracket syntax for this Material                                                                                              |
| flammable      | boolean                                                        | sì        | no        | Ritorna se il blocco può bruciare o meno.                                                                                              |
| liquid         | boolean                                                        | sì        | no        | Restituisce se i blocchi fatti di questo materiale sono liquidi.                                                                       |
| opaque         | boolean                                                        | sì        | no        | Indica se questo materiale è opaco                                                                                                     |
| pushReaction   | [PushReaction](/vanilla/api/block/material/PushReaction)       | sì        | no        | Gets this Material's [PushReaction](/vanilla/api/block/material/PushReaction).                                                         |
| replaceable    | boolean                                                        | sì        | no        | Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta. |
| solid          | boolean                                                        | sì        | no        | Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.                                          |

