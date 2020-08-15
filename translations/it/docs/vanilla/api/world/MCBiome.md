# MCBiome

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.world.MCBiome
```

## Metodi
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Parametro      | Tipo                                                                                           | Descrizione                 |
| -------------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | Nessuna descrizione fornita |


### getTempCategory

Ritorna una stringa

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |



## Proprietà

| Nome               | Tipo         | Ha Getter | Ha Setter |
| ------------------ | ------------ | --------- | --------- |
| category           | Stringa      | vero      | falso     |
| defaultTemperature | galleggiante | vero      | falso     |
| depth              | galleggiante | vero      | falso     |
| doesRain           | boolean      | vero      | falso     |
| doesSnow           | boolean      | vero      | falso     |
| downfall           | galleggiante | vero      | falso     |
| isHighHumidity     | boolean      | vero      | falso     |
| isMutation         | boolean      | vero      | falso     |
| isTempCold         | boolean      | vero      | falso     |
| isTempMedium       | boolean      | vero      | falso     |
| isTempOcean        | boolean      | vero      | falso     |
| isTempWarm         | boolean      | vero      | falso     |
| genitore           | Stringa      | vero      | falso     |
| rainType           | Stringa      | vero      | falso     |
| scale              | galleggiante | vero      | falso     |
| spawningChange     | galleggiante | vero      | falso     |
| translationKey     | Stringa      | vero      | falso     |
| waterColor         | int          | vero      | falso     |
| waterFogColor      | int          | vero      | falso     |

