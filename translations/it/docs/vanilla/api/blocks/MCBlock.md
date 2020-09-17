# MCBlock

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.MCBlock
```

## Metodi
### canSpawnInBlock

Restituisce un booleano

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Restituisce un [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Proprietà

| Nome           | Tipo    | Ha Getter | Ha Setter |
| -------------- | ------- | --------- | --------- |
| lootTable      | Stringa | vero      | falso     |
| translationKey | Stringa | vero      | falso     |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | falso     |

