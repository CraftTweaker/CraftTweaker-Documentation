# Caminata simple

Hola, kindlich aquí. Así que estás probando ContentTweaker por 1.15, ¿eh?

A veces generalmente abreviaré ContentTweaker con CoT para ahorrarme unas pocas letras (es más un automatismo de Discord ya), así que manténgase conmigo, ¿no? Luego, primero te recomiendo que también instales un mod del gestor de recursos, para que los bloques/objetos que tienes una forma de añadir texturas y modelos para bloques y objetos más adelante.

ContentTweaker intentará crear modelos de archivos así como una simple imagen sin textura en la carpeta de recursos, siempre y cuando detecte el mod [El cargador](https://www.curseforge.com/minecraft/mc-mods/the-loader) o [Abrir cargador](https://www.curseforge.com/minecraft/mc-mods/open-loader) instalado. Si ninguna de estas dos opciones está instalada, sólo imprimirá un mensaje al registro indicando que no creará texturas para usted. En algún momento también será posible deshabilitar la generación de texturas totalmente, pero no en la construcción Alpha/Beta.

Para las texturas generadas, CoT no anulará los archivos si ya existen, para que puedas reemplazar los archivos existentes con tus propios y CoT no deshará estos cambios.


Ahora, vamos a llegar, ¿no? Daré ejemplos para algunos bloques y artículos simples. Si quieres ver todo el soporte de estas clases, usted puede encontrar la exportación de la API en la carpeta API justo debajo de este archivo en la barra de navegación!

## Loader ContentTweaker
Puesto que CraftTweaker en 1.14+ cargará mientras el servidor está activo y en ejecución, necesitamos una forma de cargar scripts en otro lugar. ¡Para eso es para el `#loader contenttweaker` !  
Simplemente póngalo en algún lugar (preferible en la parte superior) de tu archivo y ya estás listo.  
¡Recuerda **que no se permiten scripts de crafttweaker** en `#loader contenttweaker`mientras se ejecutan en diferentes fases del ciclo de laod !


## Bloques

Para crear bloques necesitas crear un objeto [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) .  
Una vez que tengas eso puedes establecer las propiedades más simples en un patrón de constructor.

Entonces puedes llamar directamente a `build(name)` en él y ser hecho si quieres crear un bloque básico.  
O podría especializar el constructor usando `withType` y proporcionar una clase de constructor especializada, por ejemplo [BuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) o [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Revisa sus respectivas páginas para ver qué características adicionales ofrecen. Tenga en cuenta que una vez que haga la llamada withType, no hay vuelta atrás, así que establezca todas las propiedades básicas antes de esa llamada.

Recuerda lo que hagas, al final de la cadena **necesitas una `build(name)` llamada**, ¡ya que de lo contrario no pasará nada!

Basta hablar, quieres un ejemplo de copia/pega, ¿verdad?

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
import mods.contenttweaker. lock.pillar. lockBuilderPillarRotatable;


//La manera más sencilla, usa el IRON
nuevo BlockBuilder()
    //Will delegar al Constructor Básico
    . uild("generic_block");


//Establece un material de bloque diferente.
nuevo BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    . uild("earth_like_block");


//El Pilar Tipo es básicamente el mismo que los registros, una textura en la parte superior/inferior y otra para los lados.
//Se puede rotar en todos los ejes, al igual que los registros.
//Los nombres de texturas por defecto serán "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Stairs.
//Tiene 3 Texturas, arriba, abajo, lados, por defecto serán "block_name" + "_top", "_bottom", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## Elementos

Para objetos que más o menos haces lo mismo, pero esta vez necesitas un [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
Puedes de nuevo, usar un `build(name)` directamente, o cambiar a una versión especializada usando `withType`.  
En el momento de esta escritura sólo existe [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool), sin embargo.

Recuerda lo que hagas, al final de la cadena **necesitas una `build(name)` llamada**, ¡ya que de lo contrario no pasará nada!

Basta hablar, quieres un ejemplo de copia/pega, ¿verdad?
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

//La forma más simple de crear elementos.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//Con propiedades
new ItemBuilder()
    . ithMaxStackSize(16) //MaxStackSize y MaxDamage se contradicen entre sí, así que sólo usa 1
    . uild("other_item");


//Si quieres herramientas necesitarás configurar el tipo.
//Desde el momento de ajustar el tipo que cambiará de contexto, por lo que los otros métodos ya no estarán disponibles.
//Esto significa que necesita establecer la durabilidad y _before_ la llamada withType.
nuevo ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) //hacha cosecha nivel = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) //pala cosecha nivel 3 y destruye velocidad 4.0
    . uild("mi_herramienta");



///Si desea una herramienta que haga daño, también puede utilizar el tipo de herramienta
nuevo ItemBuilder()
    . ithMaxDamage(100)
    . ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5. F)
    .withDurabilityCostAttack(1) //Por defecto: 2
    .build("my_mace");

```

## Nombres
Entonces, ¿cómo harías para dar nombres apropiados a los artículos?  
Para eso, necesitas un archivo de idioma.  
En el momento de escribir CoT aún no lo creó para ya, así que necesitarás crearlo tú mismo.  
En tu paquete de recursos, encuentra la carpeta `assets/contenttweaker` .  
En ella, cree una carpeta llamada `lang` si aún no existe, y crear un archivo llamado `es_us. hijo` allí.  
Recomiendo comenzar siempre con el en_us, ya que eso es a lo que volverá el juego si no puede encontrar el nombre para otro idioma. Después, siéntete libre de repetir esto con otros códigos de lang también.

Allí tendrá que crear un mapa Key-Value para sus entradas. Las claves, también llamadas claves de traducción, o en versiones anteriores nombre no localizado, dependen del nombre del bloque/elemento que usaste y se verán como
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
Para el valor, puedes establecer como el elemento se llama en ese lugar. Si no estás seguro de la sintaxis, revisa el ejemplo de abajo, o prueba un Validador JSON si tienes la sintaxis abajo.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Generic Block",
  "item.contenttweaker.generic_item": "Genérico Item",
  "item.contenttweaker.generic_item_2": "Genérico Item the 2nd",
  "item.contenttweaker.generic_item_3": "Genérico Item el encantado"
}
```