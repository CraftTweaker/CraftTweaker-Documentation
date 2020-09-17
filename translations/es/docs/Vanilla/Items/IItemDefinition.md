# Definición de ítems

Un objeto ItemDefinition es la referencia directa a un elemento.  
Es diferente de un [ItemStack](/Vanilla/Items/IItemStack/) ya que esto solo se refiere al artículo, no incluye meta-información ni valores NBT!

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.ItemDefinition;`

## Cómo obtener uno

La manera más fácil es desde un [ItemStack](/Vanilla/Items/IItemStack/), pero también puedes obtener una lista de todas las ItemDefiniciones registradas en el juego y hacer algo con eso.

```zenscript
//ItemStack Zengetter "definición" -> single ItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = game.items;
```

## Qué hacer con él

### ZenGetters y ZenMethods sin parámetros

| ZenGetter          | ¿Qué hace                                                                                                                             | Tipo de devolución                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| id                 | Devuelve el ID del elemento                                                                                                           | cadena                                                          |
| nombre             | Devuelve el nombre del elemento no localizado                                                                                         | cadena                                                          |
| ores               | Devuelve todas las entradas minerales que contengan este elemento. También puede contener minerales que se refieren a un subelemento. | `Lista<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| dueño              | Devuelve el nombre del mod al que pertenece este elemento.                                                                            | cadena                                                          |
| default Instance   |                                                                                                                                       | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| creativaTab        |                                                                                                                                       | [Pestaña ICreativa](/Vanilla/CreativeTabs/ICreativeTab/)        |
| pestañas creativas |                                                                                                                                       | [Tabla ICreativa[]](/Vanilla/CreativeTabs/ICreativeTab/)        |
| canItemEditBlocks  |                                                                                                                                       | pluma                                                           |
| itemEnchantability |                                                                                                                                       | int                                                             |
| subItems           |                                                                                                                                       | Lista <[ItemStack](/Vanilla/Items/IItemStack/)\>               |

### ZenSetters y otros métodos vacíos

| ZenSetter/ZenMethod                    | Tipo de parámetro                                        |
| -------------------------------------- | -------------------------------------------------------- |
| creativaTab                            | [Pestaña ICreativa](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | ninguno                                                  |
| setContainerItem(IItemDefinition item) | Definición de ítems                                      |

### Métodos

- `def.makeStack(meta);` Crea un [ItemStack](/Vanilla/Items/IItemStack/) con los metadatos dados. Metadata es un int y OPTIONAL.
- `def.setHarvestLevel(String type, int level);` Cambia el nivel de cosecha del artículo al tipo y nivel correspondientes
- `def.getSubItems(creativeTab);` Devuelve una lista <[ItemStack](/Vanilla/Items/IItemStack/)\> con todos los subelementos para el [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) dado.
- `def.getItemBurntime(item);` Devuelve un int que representa ya sea -1 (la lógica de Vanilla se aplicará), 0 (No fundible) o el tiempo de quemado de los elementos