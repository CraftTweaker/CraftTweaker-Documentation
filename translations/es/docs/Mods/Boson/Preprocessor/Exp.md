# Directiva sobre preprocesadores de banderas experimentales

Esta directiva de preprocesadores permite un comportamiento experimental para ciertas funcionalidades de ZenScript.

Ser parte del proyecto ZenScriptX y debido a la naturaleza experimental del proyecto en sí mismo. algunas características pueden requerir pruebas extensas en el lado del compilador o causar otros efectos secundarios no deseados. Por estas razones, algunas características han sido consideradas experimentales y no están habilitadas por defecto al compilar un script.

Además, algunas banderas experimentales pueden no funcionar y se proporcionan sólo como indicios de las características futuras. Debería siempre referirse a la documentación para saber si se utiliza o no una determinada bandera. Por otro lado, las banderas experimentales nunca serán removidas, lo que significa que las características que están integradas en la parte "no experimental" de ZenScriptX no tendrán sus banderas deshabilitadas. Esto permite que los scripts sean compatibles con las nuevas versiones del proyecto ZenScriptX sin que requiera una reescritura.

## Utilizando la directiva
Usar la directiva es tan sencillo como añadir `#experimental` al principio del archivo, y especificando una lista de banderas que representan el comportamiento para habilitar justo después de la declaración.

Cada bandera debe estar separada por los demás con espacios y **tiene que** comenzar con `-E`. Esto identifica la bandera como una bandera experimental. Following that declaration, a series of letters and numbers that identify the specific flag should be entered. Consulte la lista de esta documentación para conocer todas las banderas disponibles.

Como ejemplo, imagina que queríamos habilitar las banderas `soo` y `wd4`. La línea correspondiente sería:
```zenscript
#experimental -Esoo -Ewd4
```

## Lista de banderas
| Nombre de marca | Estado actual | Descripción                                                                                |
| --------------- | ------------- | ------------------------------------------------------------------------------------------ |
| `soo`           | Deshabilitado | Habilita la sobrecarga del operador para secuencias                                        |
| `saia`          | Deshabilitado | Proporciona un argumento automático `it` para funcionar con un solo parámetro en Sequences |
| `sao`           | Activado      | Permite la creación de `secuencias` desde argumentos de matriz                             |

El significado para el estado actual son los siguientes:

- **Desactivado** identifica una bandera que existe pero no tiene las acciones correspondientes debido a que el backend no está listo. Es proporcionado simplemente debido a "roadmap", permitiendo a los desarrolladores saber qué nuevas características estarán disponibles en un futuro próximo.
- **Activado** identifica una bandera que existe y tiene un efecto en el archivo.
- **Obsoleto** identifica una bandera que ya no debería ser usada debido a que una característica alcanza la madurez y no ser considerada experimental más. No obstante, se proporciona como una forma de compatibilidad hacia atrás.
