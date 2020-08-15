# Objeto

¡Esto te permite añadir elementos al juego!

## Crear la representación del artículo

Antes de poder añadir el elemento, necesita crear una representación de elementos que le permita establecer las propiedades del elemento que desea añadir.  
Aquí es donde entra la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) en:

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Importar el paquete de representación

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Item;`

## Propiedades de Zeng

Para obtener/establecer las propiedades puede utilizar ZenGetters/Setters o los métodos ZenMethods:

```zenscript
//property name: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Nombre de Propiedad                | Tipo                                                                                                                | Requerido | Valor por defecto | Descripción/Notas                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ----------------- | -------------------------------------------------------------------------------------------- |
| beaconPayment                      | boolean                                                                                                             | Nu        | falso             | Se puede dar a un faro para habilitar bonificaciones                                         |
| creativaTab                        | [Pestaña ICreativa](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                   | Nu        | Misc              | La pestaña Creativa en la que se pondrá el artículo                                          |
| brillante                          | boolean                                                                                                             | Nu        | falso             | Puede utilizarse para dar a tu objeto el efecto brillante (como si estuviera encantado).     |
| proveedor de artículos             | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)             | Nu        | -1 como color     | Color del elemento                                                                           |
| ítem DestroyedBlock                | [ItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)            | Nu        | falso             | ¿Qué sucede cuando el objeto acaba de destruir un bloque?                                    |
| velocidad de destrucción de objeto | [ItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)                | Nu        | nulo              | Determina la velocidad de ruptura de bloques del objeto.                                     |
| ítemObtener Contenedor             | [ItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)        | Nu        | nulo              | ¿Qué quedará en la cuadrícula de fabricación cuando este objeto se utilizó en una receta?    |
| clic derecho                       | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)                   | Nu        |                   | Llamado cuando el jugador hace clic derecho con el objeto                                    |
| uso del ítem                       | EnumUseAcción                                                                                                       | Nu        | "Ninguno"         | Qué animación tendrá el uso del objeto ("NINGUNO", "EAT", "DRINK", "BLOCK", "BOW")           |
| Proveedor de nombre localizado     | [Proveedor de ILocalización](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/) | Nu        | nulo              | Puede utilizarse para determinar programáticamente el nombre de su artículo                  |
| maxDamage                          | int                                                                                                                 | Nu        | -1                | ¿Cuántos usos tiene el objeto? Menos de 0 significa que no puede ser dañado                  |
| maxStackSize                       | int                                                                                                                 | Nu        | 64                | ¿Cuántos objetos pueden caber en una pila? Menos de 0 significa tamaño de pila standart (64) |
| onItemUpdate                       | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                           | Nu        | nulo              | Llamado cada tick siempre que el objeto esté en el inventario de un jugador                  |
| onItemUse                          | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                                 | Nu        | nulo              | Llamado cuando el jugador hace clic derecho en un bloque con el objeto                       |
| onItemUseFinalizar                 | [ItemUseFinalizar](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)                   | Nu        | nulo              | Llamado cuando el jugador termina usando el objeto                                           |
| rareza                             | Enumrareza                                                                                                          | Nu        | COMÓN             | Qué rara es un objeto, determina el color ToolTip ("COMON", "UNCOMON", "RARE", "EPIC")       |
| olimpiando                         | flotante                                                                                                            | Nu        | -1                | ¿Cuánta experiencia gana el jugador por fundir ese objeto en un horno?                       |
| ubicación de texto                 | [Ubicación CTResources](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                           | Nu        | nulo              | Ubicación de recursos del objeto, usada para texturas, etc.                                  |
| clase de herramienta               | cadena                                                                                                              | Nu        |                   | Qué tipos de bloques puede romper la herramienta                                             |
| nivel de herramienta               | int                                                                                                                 | Nu        | -1                | El nivel de bloques se puede romper                                                          |
| unlocalizedName                    | cadena                                                                                                              | Sí        |                   | Nombre, debe ser minúsculas                                                                  |

## Registrando el elemento

¡Necesitas llamar a este método para registrar el elemento en el juego!  
¡De lo contrario no pasará nada!  
Después de haber llamado a esta función, no puede anular el registro del elemento ni cambiar ninguna de sus propiedades!

```zenscript
item.register();
```

## Ejemplo de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.ItemRight tClick;
import mods. ontenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem. reativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem. temRight Click = function(stack, world, player, hand) {
    Commands. all("jugadores del tablero de puntajes establecer @p nombre 5", jugador, mundo);
    return "Pasar";
};
zsItem.register();
```

## Localizando el objeto

Necesitará añadir `item.contenttweaker.itemName.name=Localized Name` a los archivos de idioma respondientes.  
Ejemplo en en_us. archivo ang `item.contenttweaker.zsItem.name=Your itemName Here` mostrará `Your itemName Here` en el juego.

Alternativamente, puedes usar la función de localización [](/Vanilla/Game/IGame/)de CraftTweaker, ¡aunque se recomienda usar los archivos de idioma!