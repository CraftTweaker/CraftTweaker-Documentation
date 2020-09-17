# IBiome

Mit der IBiome-Schnittstelle können Sie Informationen über ein registriertes Biom abrufen.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere craftweaker.world.IBiome;`

## Ein IBiom aufrufen

You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/) That is currently the only way

## ZenGetter

Atm, alles, was du mit einem IBiome-Objekt tun kannst, holt einige Informationen daraus:

| ZenGetter                | Rückgabetyp |
| ------------------------ | ----------- |
| name                     | string      |
| canRain                  | boolean     |
| isSnowyBiome             | boolean     |
| hohe Luftfeuchtigkeit    | boolean     |
| spawningChance           | float       |
| baseHöhe                 | float       |
| heightVariation          | float       |
| regnerisch               | float       |
| wasserColorMultiplikator | int         |
| ignorePlayerSpawnEignung | boolean     |
| Temperatur               | float       |