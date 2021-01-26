# Ignorar Errores De Paréntesis

Este preprocesador hace que tu archivo ignore errores de paréntesis (<>). ESTO NO CORRIGE TU ARCHIVO DE CUALQUIER FORMA. Los errores simplemente son eliminados.

## Uso

Puedes usar este preprocesador escribiendo ` #ignoreBracketErrors` dentro de tu archivo zs. Este preprocesador solo afecta al archivo en el que lo usas.

## Lo que hace:

Cuando se usa el preprocesador, todos los errores que tengan algo que ver con cosas dentro de paréntesis de ZenScript (<>), ya sean objetos, bloques, entidades, serán eliminados y no aparecerán en ninguna parte. Esto no cambia las líneas de código en tu archivo, solo hace que los errores de paréntesis de ese archivo en cuestión no aparecerán en el archivo <0>crafttweaker.log</0> .