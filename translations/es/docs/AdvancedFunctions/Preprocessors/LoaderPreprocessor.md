# Prepocesador de Cargado 

El Preprocesador de cargado establecerá el cargador que leerá tu archivo. 

## Uso

Puedes usar el Preprocesador de cargado añadiendo `#loader nombreDeCargador` a tu archivo. nombreDeCargador debería de ser el cargador que debería leer tu archivo. Un ejemplo es ` #loader contenttweaker` que preparará tu archivo para ser leído como un archivo de ContentTweaker.

## Lo que hace:

Los archivos que tengan un cargado diferente al predeterminado (` crafttweaker `) serán reconocidos por ese cargador. Normalmente los diferentes cargadores vienen añadidos por "addons" de CraftTweaker2 que necesitan su propio cargador. Lista de posibles cargadores: ` crafttweaker, contenttweaker, alchemistry, mekatweaker `. Nota: El cargador ` crafttweaker ` no es necesario. Nota 2: Modtweaker2 usa el cargador predeterminado, ` crafttweaker `.