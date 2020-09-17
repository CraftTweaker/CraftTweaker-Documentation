# MCBiome

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.world.MCBiome
```

## Métodos
### getTemperatura

Tipo de retorno: flotante

```zenscript
myMCBiome.getTemperature(pos como crafttweaker.api.util.BlockPos);
```

| Parámetro | Tipo                                                         | Descripción                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No se proporcionó descripción |



## Propiedades

| Nombre          | Tipo     | Tiene Obtén | Tiene Setter |
| --------------- | -------- | ----------- | ------------ |
| categoría       | Cadena   | verdad      | falso        |
| profundidad     | flotante | verdad      | falso        |
| Lluvia          | boolean  | verdad      | falso        |
| Nieve           | boolean  | verdad      | falso        |
| caída           | flotante | verdad      | falso        |
| es alta humedad | boolean  | verdad      | falso        |
| tipo de lluvia  | Cadena   | verdad      | falso        |
| escala          | flotante | verdad      | falso        |
| acuarela        | int      | verdad      | falso        |
| color del agua  | int      | verdad      | falso        |

