# Empezando con tus archivos

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder, if you aren't sure where this folder is, just run `/ct scripts` when in the game and the folder will open.

ZenScript es un lenguaje de programación que va de arriba a abajo, lo que quiere decir que las ` declaraciones de Variables ` y las ` Importaciones ` deberían encontrarse como más arribo del fichero, mejor. Esto no quiere decir que no puedas declarar ` Variables ` en cualquier parte, solo que esa variable no existirá a los ojos de las líneas que estén por delante de la declaración.


Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

## What are scripts

Scripts are stored in `<gamedir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`.

Scripts are loaded twice when entering a single player world, once on the `Server` side, and then on the `Client` side, if you have a `println()` in your script, you will see it twice, since it is running twice.

This does not mean that changes are applied twice however, changes made by scripts can be sided, so some changes, such as setting localization, only run on the client side, but adding recipes is only done on the server side.

When joining a server, the server sends their scripts to the client, and the client runs those scripts. This does mean that a client without any scripts, can join a server and get the changes (useful if you need to disable an item on the server but don't want to force clients to download extra files!)


### Escribiendo tu primer archivo.

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

Dentro de ` hola.zs ` pon la siguiente línea:

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<gamedir>/logs/crafttweaker.log` file (or run `/ct log` to have the file open in your default text editor).

The `crafttweaker.log` file is located in `<gamedir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++, Sublime Text or VSCode to edit script files, however any program will do.

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.



### El archivo ` crafttweaker.log </0></h3>

<p spaces-before="0">El archivo <code> crafttweaker.log ` usa una sintaxis muy specifica en la salida de información, que es:</p>

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Mirando el ejemplo de arriba, nuestra salida para el fichero ` hola.zs </0> sería:</p>

<pre><code>[14:58:06.697][DONE][SERVER][INFO] Hello world!
`</pre>

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumped information is easier.

### Comentarios

Los comentarios se acostumbran a usar para hacer tus archivos más comprensibles y fáciles de entender para ti y para otra persona que lo pueda leer.

Zenscript ofrece 3 tipos de comentarios, que son:

Comentario de una línea : ` //Soy un comentario `

Comentario de una línea alternativo: ` #Yo también `

Comentario de más de una línea
```
<code> /*  Soy </br> un comentario </br> multilinear!
 */
```

Just note, that `#` comments are also used for PreProcessors (TODO link to PreProcessors when they are documented), so while they are still valid comments, they could cause unwanted side effects. 