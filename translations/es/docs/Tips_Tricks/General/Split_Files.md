# Divide tu código en más de un archivo

Se considera una buena idea separar lo que hagas en más de un archivo

## El problema 

- Cuando escribes archivos para un modpack grande o medianamente grande, tu archivo podría hacerse bastante largo y confuso.
- Intentar encontrar un error en un archivo con muchas líneas puede tardar mucho, especialmente si el error no es de compilador, sino de ejecución (como por ejemplo el de un evento), que no apunta a una línea específica.

## Lo que sabemos y lo que deberías saber 

- CraftTweaker puede cargar más de un archivo.
- CraftTweaker puede cargar archivos en subcarpetas.
- Además, CraftTweaker puede cargar archivos de código que estén dentro de archivos comprimidos .zip siempre y cuando el .zip no esté protegido por una contraseña.

## La solución

- Separa tus archivos en otros más pequeños y nombralos de forma lógica.
- Por ejemplo, podrías crear un archivo para cada mod o para cada máquina de mod a la que añadas o modifiques recetas.

## Example

```zenscript
scripts
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Minecraft
        Recetas
            Eliminar.zs
            Shaped.zs
            Shapeless.zs
        Semillas.zs
    oreDict.zs
```

## Ventajas:

- Es mucho más fácil encontrar un error.
- Un error no detendrá un script completo sino que sólo una parte de tus archivos fallarán.
- La gente que lea tus archivos puede encontrar las cosas de forma más rápida.

## Desventajas:

- Ten cuidado con el orden de cargado de tus archivos, especialmente si un archivo elimina una receta y otro añade otra. Quizás quieras usar el [Preprocesador de Prioridad](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) si el orden de cargado de tus archivos supone un problema para ti.
- Hay muchas maneras de ordenar tus archivos y tu manera puede ser confusa para otros.