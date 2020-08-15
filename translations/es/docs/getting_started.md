# Comenzando con scripts

CraftTweaker utiliza un lenguaje de script personalizado llamado `ZenScript`, ZenScript se lee de `. s` archivos que se almacenan en la carpeta `<gamedir>/scripts` , si no estás seguro de dónde está esta carpeta, simplemente ejecuta `/ct scripts` cuando esté en el juego y la carpeta se abrirá.

ZenScript es un lenguaje de scripting "top down", lo que significa que, `Importa` debe estar en la parte superior del archivo, `Declaraciones variables` deben estar cerca de la parte superior del archivo, Sin embargo, no hay restricciones para eso, una `Variable` puede ser definida en cualquier lugar de un script, Sin embargo, no será accesible a las líneas de arriba de la declaración de `Variable`.


Los archivos de script tienen el prefijo `.zs` , asegúrese de que no es `.zs.txt`!

## Qué son los scripts

Los scripts se almacenan en `<gamedir>/scripts` y se cargan cuando el jugador se une a un mundo, como versiones anteriores de CraftTweaker (excluyendo 1. 2), Scripts CAN se recargarán, solo ejecuta `/reload`.

Los scripts se cargan dos veces al entrar a un solo mundo de jugador, una vez en el lado del servidor `` , y luego en el lado `Cliente` si tiene un `println()` en su script, lo verá dos veces, ya que se está ejecutando dos veces.

Esto no significa que los cambios se apliquen dos veces, sin embargo, los cambios realizados por scripts pueden ser secundarios, por lo que algunos cambios, como configurar la localización, sólo ejecutarse en el lado del cliente, pero añadir recetas sólo se hace en el lado del servidor.

Al unirse a un servidor, el servidor envía sus scripts al cliente, y el cliente los ejecuta. Esto significa que un cliente sin scripts, puede unirse a un servidor y obtener los cambios (útil si necesita desactivar un elemento en el servidor pero no quiere forzar a los clientes a descargar archivos adicionales!)


### Escribiendo tu primer script

Para empezar con Scripts, puedes crear un archivo muy básico llamado `hola. s` en la carpeta `<gamedir>/scripts>` ; Si no estás seguro de dónde está la carpeta, simplemente ejecuta `/ct scripts` y debería abrirse!

En `hola.zs` ponga la siguiente línea

```zenscript
println("¡Hola mundo!");
```

Ahora carga Minecraft y echa un vistazo a `<gamedir>/logs/crafttweaker. og` archivo (o ejecutar `/ct log` para tener el archivo abierto en el editor de texto predeterminado).

El archivo `crafttweaker.log` se encuentra en `<gamedir>/logs` y puede ser leído por cualquier programa que pueda leer archivos de texto plano.

Se recomienda utilizar Notepad++, Sublime Text o VSCode para editar archivos de script, sin embargo cualquier programa lo hará.

Al elegir un programa para editar scripts, eche un vistazo a qué resaltadores de sintaxis están disponibles, los editores de texto más comunes tienen ZenScript destacando soporte a través del uso de un plugin.



### El archivo crafttweaker.log

El archivo `crafttweaker.log` utiliza una sintaxis específica en su salida, esa sintaxis es:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Usando el ejemplo anterior, la salida sería:

```
[14:58:06.697][DONE][SERVER][INFO] ¡Hola mundo!
```

La sintaxis se utiliza para propósitos de depuración y la única vez que la sintaxis no se usa, es para volcados de comandos, En cuyo caso simplemente imprime el mensaje, esto se hace así que copiar la información volcada es más fácil.

### Comentarios

¡Los comentarios pueden ser usados para hacer que sus archivos de script sean más legibles y fáciles de entender!

ZenScript soporta 3 tipos de comentarios, siendo:

Una sola línea: `// ¡Soy un solo comentario de línea!`

Línea única alternativa: `# ¡También soy un comentario de una sola línea!`

Multilínea:
```
/* ¡Soy 
un
comentario multicinal! */
```

Tenga en cuenta que `#` comentarios también se utilizan para Preprocesadores (enlace TODO a Preprocesadores cuando están documentados), de modo que mientras sigan siendo comentarios válidos, podrían causar efectos secundarios no deseados. 