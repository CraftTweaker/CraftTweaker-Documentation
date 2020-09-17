# MCMaterial

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
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

Indica se questo materiale è opaco

Restituisce un booleano

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta.

Restituisce un booleano

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.

Restituisce un booleano

```zenscript
myMCMaterial.isSolid();
```

### isToolNotRequired

Ritorna true se il materiale può essere raccolto senza l'utilizzo di alcun strumento (o con lo strumento errato)

Restituisce un booleano

```zenscript
myMCMaterial.isToolNotRequired();
```


