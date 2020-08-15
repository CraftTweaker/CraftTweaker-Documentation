# En preprocesadores

## Qué son los preprocesadores

Como el nombre sugiere, los preprocesadores se ejecutan antes de que el script se ejecute.  
Pueden realizar varias acciones como activar el modo de depuración o Suprimir errores de corchete.

## Llamando a un preprocesador

Se puede llamar a un preprocesador usando la función #comment .  
Tenga cuidado con los comentarios, aunque ya que puede iniciar uno con una palabra clave preprocesador.

```zenscript
#debug es mi palabra favorita que me gusta añadirla en todas partes como comentario
```

☆ Se activaría el modo de depuración como `#debug` se encuentra. Si realmente quieres asegurarte de que un caso tan raro no suceda, usa `//` para comentarios.