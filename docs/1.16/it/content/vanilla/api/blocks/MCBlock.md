# MCBlock

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.MCBlock
```

## Methods
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


## Properties

| Name           | Type   | Ha Getter | Ha Setter |
| -------------- | ------ | --------- | --------- |
| lootTable      | String | true      | false     |
| translationKey | String | true      | false     |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | false     |

