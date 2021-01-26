# Prepocesador de Cargado 

El Preprocesador de cargado establecerá el cargador que leerá tu archivo. 

## Uso

Puedes usar el Preprocesador de cargado añadiendo `#loader nombreDeCargador` a tu archivo. nombreDeCargador debería de ser el cargador que debería leer tu archivo. Un ejemplo es ` #loader contenttweaker` que preparará tu archivo para ser leído como un archivo de ContentTweaker.

## Lo que hace:

Los archivos que tengan un cargado diferente al predeterminado ( crafttweaker </0>) serán reconocidos por ese cargador. Normalmente los diferentes cargadores vienen añadidos por "addons" de CraftTweaker2 que necesitan su propio cargador. 
Lista de posibles cargadores: <code> crafttweaker, contenttweaker, alchemistry, mekatweaker </0>. 
Nota: El cargador <code> crafttweaker </0> no es necesario. 
Nota 2: Modtweaker2 usa el cargador predeterminado, <code> crafttweaker </0>.</p>