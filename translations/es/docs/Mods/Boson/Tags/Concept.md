# Etiquetas

Las etiquetas son un concepto poderoso que ha estado presente en Vanilla Minecraft desde 1.13. Permite a jugadores y creadores de datapack definir un conjunto de elementos para que sean considerados iguales en un contexto determinado. removiendo algunos de la codificación de bloques y elementos en el código.

Las etiquetas se representan como un conjunto de archivos JSON colocados en el directorio `data/<namespace>/tags/<tag-type>` , donde `namespace` identifica el espacio de nombres al que pertenecen las etiquetas. y `<tag-type>` el tipo de elementos que los grupos de etiquetas.

Este concepto puede parecer similar al del Diccionario Mineral, y de hecho, es casi el mismo. Sin embargo, de manera diferente al diccionario de minerales , las etiquetas también pueden referirse entre sí, y algunos actuando como grupos para otros. Además, mientras que el diccionario de mineral solo funciona con elementos (i.e. cosas que se pueden colocar en tu inventario), las etiquetas también funcionan con bloques, fluidos y otros tipos si es necesario.

La implementación de Boson difiere de la de Vanilla debido a la enorme diferencia en los cambios internos en 1. 3, pero funciona casi el mismo, excepto para permitir una extensión mod más fácil con nuevos tipos de etiquetas. Por esta razón, la integración con CraftTweaker también es diferente.

Para empezar, lee cómo obtener [una etiqueta a través de un manejador de bracket](/Mods/Boson/Tags/BracketHandler/).
