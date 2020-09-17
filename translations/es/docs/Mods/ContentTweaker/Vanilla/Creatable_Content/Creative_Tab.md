# Tab creativo

¡Esto te permite añadir etiquetas creativas al juego!

## Creando el objeto ICreativeTab

Antes de añadir la pestaña, necesita crear una representación que le permita establecer las propiedades de la pestaña que desea añadir.  
Aquí es donde entra la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) en:

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemStackSupplier
```

La Cadena está en cada uno de los tres métodos del mismo: Es el nombre sin localizar que tendrá la Tabla más adelante.  
El segundo parámetro es el símbolo que tu pestaña llevará más tarde (e. Un cubo de lava para "misc").  
Puede decidir el tipo de elemento que desea utilizar una representación de artículos, una Stack, una representación de bloques o una función itemStackSupplier.

## Llamar a un objeto ICreativeTab existente

También puedes llamar a una pestaña [creativa](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) existente, aunque no puedes cambiar ninguna de sus propiedades.  
¿Por qué necesitarías esto, te preguntas?  
¡Necesitarás esto si quieres añadir un bloque o elemento recién creado a una pestaña existente!

## Propiedades

Puede llamar y configurar todas estas propiedades usando la pestaña normal de ZenGetters y ZenSetters  
`. nlocalizedName = "h";`  
Ten en cuenta que probablemente casi nunca necesitarás los Setters ya que estas propiedades ya están inicializadas a tus valores deseados cuando crees el objeto ICreativeTab.  
Además, no puedes establecer ni obtener propiedades de un ICreativeTab(uno que hayas recuperado usando el controlador de [Bracket](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/))!

| Nombre de Propiedad | Tipo                                                                                                    | Requerido | Valor por defecto | Descripción/Notas                |
| ------------------- | ------------------------------------------------------------------------------------------------------- | --------- | ----------------- | -------------------------------- |
| unlocalizedName     | cadena                                                                                                  | SI        |                   | El nombre de la pestaña creativa |
| iconStack           | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | SÍ/NO     |                   | Icono de la pestaña creativa     |
| iconStackSupplier   | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | NO/Sí     | nulo              | ¿Determina algo?                 |

## Registrando la pestaña creativa

¡Necesitas llamar a este método para registrar la pestaña creativa en el juego!  
¡De lo contrario no pasará nada!  
Después de haber llamado a esta función, no puede anular el registro de la pestaña o cambiar ninguna de sus propiedades!

```zenscript
tab.register();
```

## Ejemplo de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```