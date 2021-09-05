# Empezando con tus archivos

CraftTweaker usa su propio lenguaje de programación llamado ` ZenScript `. Este lenguaje de programación lee archivos ` .zs ` que se encontrarán en la carpeta ` scripts ` dentro de tu instalación o instancia de ` minecraft. `

ZenScript es un lenguaje de programación que va de arriba a abajo, lo que quiere decir que las ` declaraciones de Variables ` y las ` Importaciones ` deberían encontrarse como más arribo del fichero, mejor. Esto no quiere decir que no puedas declarar ` Variables ` en cualquier parte, solo que esa variable no existirá a los ojos de las líneas que estén por delante de la declaración.


Los scripts tienen que ser ficheros `.zs`, cuidado que no sean `.zs.txt`

## Que son scripts

Los scripts se almacenan`<directoriodeljuego>/scripts` y se cargan cuando un jugador entra en el mundo. A diferencia de otras versiones de Crafttweaker (mayoritariamente 1.12.2), los scripts se pueden recargar con el comando `/reload`.

Los scripts se cargan dos veces cuando se entra a un mundo en un mundo de un jugador, una vez en el Servidor y otra en el Cliente, asi que si tienes un `println()` en tu scripts, lo verás dos veces, ya que se carga dos veces.

Esto no quiere decir que los cambios se apliquen dos veces, los cambios pueden aplicarse en un único lado, como por ejemplo añadir una descripción emergente, las recetas solo se añaden en el servidor.

Cuando te unes a un servidor, el servidor envía sus scripts al cliente, y el cliente los ejecuta. Esto significa que si un cliente sin scripts pero con el mod se une a un servidor recibirá los cambios. Esto es útil cuando quieres eliminar la necesidad de descargar archivos adicionales a tus jugadores.


### Escribiendo tu primer archivo.

Para empezar con tus archivos, crearemos un archivo muy básico, llamado ` hola.zs ` en el directorio ` /scripts `. Si no sabes donde está, usa `/ct scripts`.

Dentro de ` hola.zs ` pon la siguiente línea:

```zenscript
println("Hola Mundo");
```

Ahora carga Minecraft y abre el archivo ` crafttweaker.log`. Si no sabes donde está, usa `/ct log`

El archivo ` crafttweaker.log ` debería estar dentro de tu directorio de Minecraft y puede ser leído por cualquier programa que pueda leer archivos de texto (VSC, Notepad ++ , Bloc de Notas).

Se recomienda usar Notepad ++ o Sublime Text para editar tus archivos, pero cualquiera valdrá.

Cuando elijas un programa para editar scripts, comprueba que Resaltadores de Sintaxis existen, la mayoría tendrán la opción de Zenscript con un plugin, aunque es posible que estén hechos para la versión 1.12.2



### El archivo ` crafttweaker.log `

<p spaces-before="0">El archivo crafttweaker.log usa una sintaxis muy specifica en la salida de información, que es:</p>


```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Mirando el ejemplo de arriba, nuestra salida para el fichero `hola.zs` sería: </p>

```
<pre><code>[14:58:06.697][DONE][SERVER][INFO] Hola Mundo</pre>
```

La sintaxis se usa para depuración y la única vez en la que no sea usa es durante líneas que salen al archivo a causa de un comando, para que sea más fácil copiar y pegar la información que haya sido añadida al archivo como puede ser por ejemplo una lista de objetos. 

### Comentarios

Los comentarios se acostumbran a usar para hacer tus archivos más comprensibles y fáciles de entender para ti y para otra persona que lo pueda leer.

Zenscript ofrece 3 tipos de comentarios, que son:

Comentario de una línea : ` //Soy un comentario `

Comentario de una línea alternativo: ` #Yo también `

Comentario de más de una línea
```
/*  Soy 
 un comentario 
 multilinear!
 */
```

Los comentarios `#` también pueden ser usados para llamar preprocesadores, así que hay que ir con cuidado cuando se usan estos de no tener una palabra clave en ellos.
