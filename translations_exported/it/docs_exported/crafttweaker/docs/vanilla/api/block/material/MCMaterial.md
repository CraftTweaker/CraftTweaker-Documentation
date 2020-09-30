# MCMaterial

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Interfacce Implementate
MCMaterial implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### blocksMovement

Ritorna se questo materiale è considerato solido o no

Return type: boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Restituisce l'indice di colore del blocco. Questo è lo stesso colore utilizzato dalle mappe vanilla per rappresentare questo blocco.

Tipo di restituzione: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Ritorna se il blocco può bruciare o meno.

Return type: boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Restituisce se i blocchi fatti di questo materiale sono liquidi.

Return type: boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indica se questo materiale è opaco

Return type: boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta.

Return type: boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.

Return type: boolean

```zenscript
myMCMaterial.isSolid();
```


## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |

