# Spieleklasse

Die IGame Class wird verwendet, um allgemeine Spielinformationen zu erhalten. Kann mit `Spiel erreicht werden`

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importieren Sie crafttweaker.game.IGame;`

## ZenGetter

| ZenGetter     | Was tut es?                                            | Rückgabetyp                                                       | Auslastung         |
| ------------- | ------------------------------------------------------ | ----------------------------------------------------------------- | ------------------ |
| biome         | Gibt alle registrierten Biome als Liste zurück         | Liste <[IBiome](/Vanilla/Biomes/IBiome/)>                         | `game.biome`       |
| blocks        | Gibt alle registrierten Blöcke als Liste zurück        | Liste <[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>     | `game.blocks`      |
| objekte       | Gibt alle registrierten Entitäten als Liste zurück     | Liste <[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)> | `spiele.Entitäten` |
| gegenstände   | Gibt alle registrierten Elemente als Liste zurück      | Liste <[IItemDefinition](/Vanilla/Items/IItemDefinition/)>        | `game.items`       |
| Flüssigkeiten | Gibt alle registrierten Flüssigkeiten als Liste zurück | Liste <[ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/)>  | `game.liquids`     |
| tränke        | Gibt alle registrierten Tränke als Liste zurück        | Liste <[ITrank](/Vanilla/Potions/IPotion/)>                       | `game.tränke`      |

## Methoden

### GetEntity

```zenscript
//getEntity(EntityName)

//im Wesentlichen das gleiche
val Schafe = game.getEntity("Schafe");
val sheep1 = <entity:minecraft:sheep>;
```

### Lokalisierung festlegen

Legt die Lokalisierung fest.  
Alle Parameter sind Zeichenketten. `game.setLocalization(Schlüssel, Wert);`  
`game.setLocalization(lang, Schlüssel, Wert);`

### Lokalisieren

Gibt einen lokalisierten String  
`game.localize(key)`  
`game.localize(key, lang)` zurück