# MCBiome

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.world.MCBiome
```

## Metodi
### getSpawns

Lista restituiti<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classificazione come crafttweaker.api.entity.MCEntityClassification);
```

| Parametro       | Tipo                                                                                           | Descrizione                 |
| --------------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| classificazione | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | Nessuna descrizione fornita |


### getTempCategory

Ritorna una stringa

```zenscript
myMCBiome.getTempCategory();
```

### getTemperatura

Restituisce fluttuante

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |



## Proprietà

| Nome               | Tipo         | Ha Getter | Ha Setter |
| ------------------ | ------------ | --------- | --------- |
| categoria          | Stringa      | vero      | falso     |
| defaultTemperatura | galleggiante | vero      | falso     |
| profondità         | galleggiante | vero      | falso     |
| doesRain           | boolean      | vero      | falso     |
| doesNeve           | boolean      | vero      | falso     |
| caduta             | galleggiante | vero      | falso     |
| isHighHumidity     | boolean      | vero      | falso     |
| isMutazione        | boolean      | vero      | falso     |
| isTempCold         | boolean      | vero      | falso     |
| isTempMedium       | boolean      | vero      | falso     |
| isTempOcean        | boolean      | vero      | falso     |
| isTempWarm         | boolean      | vero      | falso     |
| genitore           | Stringa      | vero      | falso     |
| rainType           | Stringa      | vero      | falso     |
| scala              | galleggiante | vero      | falso     |
| spawningChange     | galleggiante | vero      | falso     |
| translationKey     | Stringa      | vero      | falso     |
| acquerello         | int          | vero      | falso     |
| waterFogColor      | int          | vero      | falso     |

