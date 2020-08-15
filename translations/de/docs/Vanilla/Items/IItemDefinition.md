# IItemDefinition

Ein IItemDefinition-Objekt ist der direkte Verweis auf ein Element.  
Es unterscheidet sich von einem [IItemStack](/Vanilla/Items/IItemStack/) , da dies nur auf das Element verweist, es enthält keine Meta-Informationen oder NBT-Werte!

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.item.IItemDefinition;`

## Wie man einen bekommt

Der einfachste Weg ist von einem [IItemStack](/Vanilla/Items/IItemStack/), aber Sie können auch eine Liste aller registrierten IItemDefinitionen im Spiel erhalten und damit etwas tun.

```zenscript
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = game.items;
```

## Was ist damit zu tun

### ZenGetters und parameterlose ZenMethoden

| ZenGetter          | Was macht es                                                                                                                         | Rückgabetyp                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| id                 | Gibt die Artikel-ID zurück                                                                                                           | string                                                          |
| name               | Gibt den unlokalisierten Artikelnamen zurück                                                                                         | string                                                          |
| ores               | Gibt alle Erzeinträge zurück, die dieses Element enthalten. Kann auch Erzeinträge enthalten, die sich auf einen Unterpunkt beziehen. | `Liste<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| besitzer           | Gibt den Mod-Namen zurück, zu dem dieser Gegenstand gehört.                                                                          | string                                                          |
| standard Instanz   |                                                                                                                                      | [IItemStack](/Vanilla/Items/IItemStack/)                        |
| kreativ-Tab        |                                                                                                                                      | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/)             |
| creativeTabs       |                                                                                                                                      | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab/)           |
| canItemEditBlocks  |                                                                                                                                      | bool                                                            |
| itemEnchantability |                                                                                                                                      | int                                                             |
| subItems           |                                                                                                                                      | Liste <[IItemStack](/Vanilla/Items/IItemStack/)\>              |

### ZenSetter und andere Leerzeichen Methoden

| ZenSetter/ZenMethode                   | Parametertyp                                        |
| -------------------------------------- | --------------------------------------------------- |
| kreativ-Tab                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | keine                                               |
| setContainerItem(IItemDefinition item) | IItemDefinition                                     |

### ZenMethoden

- `def.makeStack(meta);` Erstellt einen [IItemStack](/Vanilla/Items/IItemStack/) mit den angegebenen Metadaten. Metadaten sind Int und OPTIONAL.
- `def.setHarvestLevel(String-Typ, Int Level);` Ändert das Erntelevel des Gegenstands auf den entsprechenden Typ und Level
- `def.getSubItems(creativeTab);` Gibt eine Liste <[IItemStack](/Vanilla/Items/IItemStack/)\> mit allen Unterelementen für den angegebenen [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) zurück.
- `def.getItemBurntime(item);` Gibt eine Int zurück, die entweder -1 (Vanilla Logik wird angewendet), 0 (Nicht smeltabelle) oder die Brennzeit der Elemente darstellt