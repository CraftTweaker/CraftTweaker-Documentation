# MCMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterial;
```


## Methods

### blocksMovement

Ritorna se questo materiale è considerato solido o no

Return Type: boolean

```zenscript
MCMaterial.blocksMovement() as boolean
myMCMaterial.blocksMovement();
```

### getColor

Restituisce l'indice di colore del blocco. Questo è lo stesso colore utilizzato dalle mappe vanilla per rappresentare questo blocco.

Return Type: [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
MCMaterial.getColor() as MCMaterialColor
myMCMaterial.getColor();
```

### isFlammable

Ritorna se il blocco può bruciare o meno.

Return Type: boolean

```zenscript
MCMaterial.isFlammable() as boolean
myMCMaterial.isFlammable();
```

### isLiquid

Restituisce se i blocchi fatti di questo materiale sono liquidi.

Return Type: boolean

```zenscript
MCMaterial.isLiquid() as boolean
myMCMaterial.isLiquid();
```

### isOpaque

Indica se questo materiale è opaco

Return Type: boolean

```zenscript
MCMaterial.isOpaque() as boolean
myMCMaterial.isOpaque();
```

### isReplaceable

Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta.

Return Type: boolean

```zenscript
MCMaterial.isReplaceable() as boolean
myMCMaterial.isReplaceable();
```

### isSolid

Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.

Return Type: boolean

```zenscript
MCMaterial.isSolid() as boolean
myMCMaterial.isSolid();
```


## Properties

| Name          | Type                                                           | Ha Getter | Ha Setter |
| ------------- | -------------------------------------------------------------- | --------- | --------- |
| color         | [MCMaterialColor](/vanilla/api/block/material/MCMaterialColor) | true      | false     |
| commandString | string                                                         | true      | false     |

