# Divida tus scripts en múltiples archivos

Es una buena idea dividir el script en varios archivos

## Problema

- Cuando escriba scripts para paquetes de mods más grandes, su script pronto podría ser bastante largo y confuso.
- Depurar un script largo puede tardar mucho, especialmente si tiene un error que no indica una línea específica en su script.

## Lo que sabemos/necesitamos saber

- CraftTweaker puede cargar archivos de varios archivos de script.
- CraftTweaker puede incluso cargar archivos en subcarpetas.
- Además, CraftTweaker puede cargar archivos .zip que contengan scripts .zs dentro de ellos, siempre y cuando el archivo .zip no esté protegido por contraseña.

## Solución

- Dividir sus scripts grandes en varios más pequeños.
- Podría, por ejemplo, crear un script para cada mod, o cada manejador de mods.

## Ejemplo

```zenscript
scripts
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Vanilla
        Recetas
            Remove.zs
            Shaped.zs
            Shapeless.zs
        Seeds.zs
    oreDict.zs
```

## Ventajas

- Los archivos de script son más fáciles de depurar.
- Un error no impedirá que todo su script funcione, sino que sólo una pequeña parte del mismo.
- Las personas que revisan sus archivos de script pueden orientarse más fácilmente a sí mismas

## Desventajas

- Necesitas tener cuidado con el orden de carga de los scripts (especialmente si un script elimina una receta y otro la agrega). Compruebe el [Preprocesador de prioridad](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) si su orden de carga de script es un problema
- Hay muchas maneras de clasificar sus scripts después y el suyo puede ser confuso para los extranjeros.