# MCMaterial

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Interfacce Implementate
MCMaterial implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### blocksMovement

Ritorna se questo materiale è considerato solido o no

Tipo restituito: booleano

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

Tipo restituito: booleano

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Restituisce se i blocchi fatti di questo materiale sono liquidi.

Tipo restituito: booleano

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indica se questo materiale è opaco

Tipo restituito: booleano

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Restituisce se questo materiale può essere rimpiazzato da altri blocchi quando vengono piazzati - per esempio neve, liane e erba alta.

Tipo restituito: booleano

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Restituisce true se il blocco è considerato solido. Questo vale per impostazione predefinita.

Tipo restituito: booleano

```zenscript
myMCMaterial.isSolid();
```


## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |

