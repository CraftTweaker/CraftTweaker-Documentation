# MCBiome

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.world.MCBiome
```

## Métodos
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Parámetro      | Tipo                                                                                           | Descripción             |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | No description provided |


### getTempCategory

Returns String

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parámetro | Tipo                                                         | Descripción             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## Propiedades

| Nombre             | Tipo     | Has Getter | Has Setter |
| ------------------ | -------- | ---------- | ---------- |
| category           | Cadena   | verdad     | falso      |
| defaultTemperature | flotante | verdad     | falso      |
| depth              | flotante | verdad     | falso      |
| doesRain           | boolean  | verdad     | falso      |
| doesSnow           | boolean  | verdad     | falso      |
| downfall           | flotante | verdad     | falso      |
| isHighHumidity     | boolean  | verdad     | falso      |
| isMutation         | boolean  | verdad     | falso      |
| isTempCold         | boolean  | verdad     | falso      |
| isTempMedium       | boolean  | verdad     | falso      |
| isTempOcean        | boolean  | verdad     | falso      |
| isTempWarm         | boolean  | verdad     | falso      |
| padre              | Cadena   | verdad     | falso      |
| rainType           | Cadena   | verdad     | falso      |
| scale              | flotante | verdad     | falso      |
| spawningChange     | flotante | verdad     | falso      |
| translationKey     | Cadena   | verdad     | falso      |
| waterColor         | int      | verdad     | falso      |
| waterFogColor      | int      | verdad     | falso      |

