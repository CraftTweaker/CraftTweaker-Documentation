# MCBiome

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.world.MCBiome
```

## Métodos
### getSpawns

Devuelve List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(clasificación como crafttweaker.api.entity.MCEntityClassification);
```

| Parámetro     | Tipo                                                                                         | Descripción                   |
| ------------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| clasificación | [crafttweaker.api.entity.Clasificación de MCs](/vanilla/api/entities/MCEntityClassification) | No se proporcionó descripción |


### Obtener categoría de Tempso

Devuelve Cadena

```zenscript
myMCBiome.getTempCategory();
```

### getTemperatura

Devuelve flotante

```zenscript
myMCBiome.getTemperature(pos como crafttweaker.api.util.BlockPos);
```

| Parámetro | Tipo                                                         | Descripción                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |



## Propiedades

| Nombre                  | Tipo     | Tiene Obtén | Tiene Setter |
| ----------------------- | -------- | ----------- | ------------ |
| categoría               | Cadena   | verdad      | falso        |
| Temperatura por defecto | flotante | verdad      | falso        |
| profundidad             | flotante | verdad      | falso        |
| Lluvia                  | boolean  | verdad      | falso        |
| Nieve                   | boolean  | verdad      | falso        |
| caída                   | flotante | verdad      | falso        |
| es alta humedad         | boolean  | verdad      | falso        |
| es Mutación             | boolean  | verdad      | falso        |
| es Tempfrío             | boolean  | verdad      | falso        |
| isTempMedia             | boolean  | verdad      | falso        |
| isTempOcean             | boolean  | verdad      | falso        |
| isTempWarm              | boolean  | verdad      | falso        |
| padre                   | Cadena   | verdad      | falso        |
| tipo de lluvia          | Cadena   | verdad      | falso        |
| escala                  | flotante | verdad      | falso        |
| spawningChange          | flotante | verdad      | falso        |
| translationKey          | Cadena   | verdad      | falso        |
| acuarela                | int      | verdad      | falso        |
| color del agua          | int      | verdad      | falso        |

