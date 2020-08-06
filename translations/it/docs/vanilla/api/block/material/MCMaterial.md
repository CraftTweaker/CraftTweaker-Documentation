# MCMaterial

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Metodi
### blocksMovement

Ritorna se questo materiale è considerato solido o no

Restituisce un booleano

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Restituisce l'indice di colore del blocco. Questo è lo stesso colore utilizzato dalle mappe vanilla per rappresentare questo blocco.

Ritorna [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Ritorna se il blocco può bruciare o meno.

Restituisce un booleano

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Restituisce se i blocchi fatti di questo materiale sono liquidi.

Restituisce un booleano

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indicate if the material is opaque

Returns boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Returns whether the material can be replaced by other blocks when placed - eg snow, vines and tall grass.

Returns boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Returns true if the block is a considered solid. This is true by default.

Returns boolean

```zenscript
myMCMaterial.isSolid();
```

### isToolNotRequired

Returns true if the material can be harvested without a tool (or with the wrong tool)

Returns boolean

```zenscript
myMCMaterial.isToolNotRequired();
```


