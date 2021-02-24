# Preprocesador de Prioridad

Este preprocesador te permite ordenar tus archivos según orden de prioridad.

## Uso

Puedes usar el preprocesador de prioridad añadiendo ` #priority X ` a tu archivo zs. ` X ` debería la prioridad de ese archivo.

## Lo que hace:

Como más grande sea la prioridad de un archivo, antes se ejecutará. Si dos archivos tienen la misma prioridad, se ordenaran como de forma predeterminada, es decir, de forma alfabética. Un ejemplo de esto:   
=======================================   
  
File 1   
  
#priority 1000  
print("Este archivo carga antes que");  
  
==================================  
  
File 2  
  
#priority 100  
print("Este")