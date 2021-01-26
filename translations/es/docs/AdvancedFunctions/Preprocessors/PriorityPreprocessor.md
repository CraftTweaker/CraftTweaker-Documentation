# Preprocesador de Prioridad

Este preprocesador te permite ordenar tus archivos según orden de prioridad.

## Uso

Puedes usar el preprocesador de prioridad añadiendo ` #priority X ` a tu archivo zs. ` X ` debería la prioridad de ese archivo.

## Lo que hace:

Como más grande sea la prioridad de un archivo, antes se ejecutará. Si dos archivos tienen la misma prioridad, se ordenaran como de forma predeterminada, es decir, de forma alfabética. Un ejemplo de esto: </br> ======================================= </br></br> File 1 </br></br> #priority 1000</br> print("Este archivo carga antes que");</br></br> ==================================</br></br> File 2</br> </br> #priority 100</br> print("Este");</br>