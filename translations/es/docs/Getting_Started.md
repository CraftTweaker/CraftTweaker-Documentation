# Comenzando con scripts

CraftTweaker utiliza un lenguaje de script personalizado llamado `ZenScript`, ZenScript se lee de `. s` archivos que se almacenan en la carpeta `<gamedir>/scripts`.

ZenScript es un lenguaje de scripting "top down", lo que significa que, `Importa` debe estar en la parte superior del archivo, `Declaraciones variables` deben estar cerca de la parte superior del archivo, Sin embargo, no hay restricciones para eso, una `Variable` puede ser definida en cualquier lugar de un script, Sin embargo, no será accesible a las líneas de arriba de la declaración de `Variable`.

## Introducción

¿Alguna vez has ido a construir un paquete de mods y luego has encontrado que simplemente tirar en un montón de mods no te ha dado una experiencia integrada? A medida que los mods se desarrollan de forma relativamente independiente unos de otros, uno puede sentirse dominado en comparación con el otro. O quizás creas que habría una mejor receta para algunos de los objetos. O tal vez quieras eliminar un elemento del juego sin tener que quitar todo el mod. O puede descubrir que algunas entradas del diccionario de minerales tienen demasiados o muy pocos elementos. Ahora usted puede hacer todo eso - cada uno con una sola instrucción a MineTweaker.

Además de la funcionalidad principal proporcionada para soportar minecraft de Vanilla, las bibliotecas de integración de mod se proporcionan con el mod para permitir no sólo modificar las recetas de vainilla, pero también las recetas de la máquina mod y el comportamiento del mod.

## Escrituras

Los scripts se almacenan en `<minecraftdir>/scripts` y se cargan en la `fase de preinicialización` de Minecraft, a diferencia de versiones anteriores de CraftTweaker, los scripts no pueden ser recargados, esto se debe a los cambios que Mojang ha hecho en 1. 2 y no hay workdound. También, los scripts deben estar en **ambos, el servidor y la instancia del cliente** para funcionar

Los archivos de script tienen el prefijo `.zs` y pueden comprimirse en un `.zip` que también será leído.

### Escribiendo tu primer script

Para empezar con Scripts, puedes crear un archivo muy básico, llamado `hello.zs` en la carpeta `<minecraftdir>/scripts>`.

En `hola.zs` ponga la siguiente línea

```zenscript
print("¡Hola mundo!");
```

Ahora cargue Minecraft y eche un vistazo al archivo `crafttweaker.log`.

El archivo `crafttweaker.log` se encuentra en `<minecraftdir>` y puede ser leído por cualquier programa que pueda leer archivos de texto plano.

Se recomienda utilizar Notepad++ o Sublime Text para editar archivos de script, sin embargo cualquier programa lo hará.

### El archivo crafttweaker.log

El archivo `crafttweaker.log` utiliza una sintaxis específica en su salida, esa sintaxis es:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Usando el ejemplo anterior, la salida sería:

    [PREINITIALIZATION][CLIENT][INFO] ¡Hola mundo!
    

La sintaxis se utiliza para propósitos de depuración y la única vez que la sintaxis no se usa, es para volcados de comandos, En cuyo caso simplemente imprime el mensaje, esto se hace así que copiar los volcados es más fácil.

### Comentarios

¡Los comentarios pueden ser usados para hacer que sus archivos de script sean más legibles y fáciles de entender!

ZenScript soporta 3 tipos de comentarios, siendo:

Una sola línea: `// ¡Soy un solo comentario de línea!`

Línea única alternativa: `# ¡También soy un comentario de una sola línea!`

Multilínea:

    /* ¡Soy 
    un
    comentario multicinal! */