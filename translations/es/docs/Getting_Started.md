# Empezando con tus archivos 

CraftTweaker usa su propio lenguaje de programación llamado ` ZenScript `. Este lenguaje de programación lee archivos ` .zs ` que se encontrarán en la carpeta ` scripts ` dentro de tu instalación o instancia de ` minecraft. </0></p>

<p>ZenScript es un lenguaje de programación que va de arriba a abajo, lo que quiere decir que las <code> declaraciones de Variables ` y las ` Importaciones ` deberían encontrarse como más arribo del fichero, mejor. Esto no quiere decir que no puedas declarar ` Variables ` en cualquier parte, solo que esa variable no existirá a los ojos de las líneas que estén por delante de la declaración. 

## Introducción

¿Alguna vez has comenzado un modpack y te has sentido que juntar varios mods no te da algo sólido? Como la mayoría de mods se desarrollan independientemente uno del otro, es muy posible que uno parezca muy fácil o mucho más útil que otro mod parecido. O quizás crees que debería haber una receta mejor para algunos de los items de estos mods. O incluso quieres eliminar un item del juego sin tener que eliminar el mod entero. También sería posible que encuentres que un grupo de items oreDict tenga demasiados items, o falte alguno. Ahora puedes hacer todo eso, con una sola instrucción con CrafttTweaker.

A parte de las características básicas de modificar Minecraft sin mods, también existen librarias con integración para la modificación de recetas de bloques añadidos por mods y el comportamiento de los mods.

## Archivos

Los archivos se almacenan en ` /scripts ` y se cargan durante la fase de ` PreInicialización ` de Minecraft. A diferencia de otras versiones de CrafttTweaker, los archivos no pueden ser recargados una vez en partida, debido a unos cambios que Mojang hizo en 1.12.2 a los que no se puede hacer nada al respeto. Los archivos TIENEN que estar en el ` SERVIDOR y CLIENTE </strong> para funcionar.</p>

<p>Archivos tienen la extensión <code> .zs ` y pueden ser comprimidos dentro de un archivo ` .zip `, que será leído igual. 

### Escribiendo tu primer archivo.

Para empezar con tus archivos, crearemos un archivo muy basico, llamado ` hola.zs ` en el directorio ` /scripts `.

Dentro de ` hola.zs ` pon la siguiente línea:

```zenscript
<code> print ("Hello world!");

```

Ahora carga Minecraft y abre el archivo ` crafttweaker.log`.

El archivo ` crafttweaker.log ` debería estar dentro de tu directorio de Minecraft y puede ser leído por cualquier programa que pueda leer archivos de texto (VSC, Notepad ++ , Bloc de Notas).

Se recomienda usar Notepad ++ o Sublime Text para editar tus archivos, pero cualquiera valdrá.

### El archivo ` crafttweaker.log </0></h3>

<p>El archivo <code> crafttweaker.log ` usa una sintaxis muy specifica en la salida de información, que es:</p> 

    <code> [ETAPADECARGADO][LADO][TIPO] </0>
    

Mirando el ejemplo de arriba, nuestra salida para el fichero ` hola.zs </0> sería:</p>

<pre><code>[PREINITIALIZATION][CLIENT][INFO] Hello world!
`</pre> 

La sintaxis se usa para depuración y la única vez en la que no sea usa es durante líneas que salen al archivo a causa de un comando, para que sea más fácil copiar y pegar la información que haya sido añadida al archivo como puede ser por ejemplo una lista de objetos. 

### Comentarios

Los comentarios se acostumbran a usar para hacer tus archivos más comprensibles y fáciles de entender para ti y para otra persona que lo pueda leer.

Zenscript ofrece 3 tipos de comentarios, que son:

Comentario de una línea : ` //Soy un comentario `

Comentario de una línea alternativo: ` #Yo también `

Comentario de más de una línea

    <code> /*  Soy <br/> un comentario <br/> multilinear!
     */