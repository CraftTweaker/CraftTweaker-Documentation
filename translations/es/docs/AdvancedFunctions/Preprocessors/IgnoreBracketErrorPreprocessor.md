# Ignorar Errores De Paréntesis

Este preprocesador hace que tu archivo ignore errores de paréntesis (<>). ESTO NO CORRIGE TU ARCHIVO DE CUALQUIER FORMA. Los errores simplemente son eliminados.

## Uso

Puedes usar este preprocesador escribiendo ` #ignoreBracketErrors` dentro de tu archivo zs. Este preprocesador solo afecta al archivo en el que lo usas.

## Lo que hace:

When the preprocessor is called on a file, all error logging on bracket errors will be supressed.  
This doesn't change the affected lines in any way, instead the only change is that your log won't contain the regarding lines.