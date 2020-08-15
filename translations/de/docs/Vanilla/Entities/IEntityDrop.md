# IEntityDrop

Ein IEntityDrop bezieht sich auf eine Beute von einer [Entität](/Vanilla/Entities/IEntityDefinition/).

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importieren Sie crafttweaker.entity.IEntityDrop;`

## ZenGetter

Sie können diese Informationen von ihnen abrufen.

| ZenGetter       | Was macht es                                                 | Rückgabetyp                              | Auslastung        |
| --------------- | ------------------------------------------------------------ | ---------------------------------------- | ----------------- |
| zufällig        | Gibt die Chance auf den Drop zurück.                         | float                                    | `drop.chance`     |
| max             | Gibt den maximalen Betrag des Tropfens zurück.               | int                                      | `drop.max`        |
| min             | Gibt den Mindestbetrag des Tropfens zurück.                  | int                                      | `drop.min`        |
| nur spielerisch | Gibt zurück, ob der Drop nur Spieler ist.                    | boolean                                  | `drop.playeronly` |
| range           | Gibt den minimalen bis maximalen Umfang des Ausfalls zurück. | Integerbereich                           | `drop.range`      |
| stapeln         | Gibt das gedroppte Element zurück.                           | [IItemStack](/Vanilla/Items/IItemStack/) | `drop.stack`      |