# Materialteil

Ein Materialteil Objekt ist, wie der Name vorschlägt, eine Kombination aus einem [Material](/Mods/ContentTweaker/Materials/Materials/Material/) und einem [Teil](/Mods/ContentTweaker/Materials/Parts/Part/), zum Beispiel `Platinausrüstung`.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.MaterialPart;`

## Ein solches Objekt wird abgerufen

Es gibt mehrere Möglichkeiten, ein solches Objekt zu retreiben, entweder als Liste oder als einzelnes Objekt.

Einzelnes Objekt:

- Verwendung des [Materialteil Klammerhandlers](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/)
- Verwende eine [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) Registrierungsteil Methode
- Verwende eine [Ersatzteil](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterial Methode

Liste:

- Benutze [Materialsystem's](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial Methode
- Verwende eine [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) Registrierungsteile Methode
- Verwende eine [Ersatzteil-](/Mods/ContentTweaker/Materials/Parts/Part/) RegisterToMaterials Methode

## Felder

Sie können die folgenden Informationen von einem Materialteil abrufen:

| ZenMethode           | Rückgabetyp                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | string                                                                          |
| getLocalizedName()   | string                                                                          |
| hasEffect()          | boolean                                                                         |
| hasOverlay()         | boolean                                                                         |
| getMaterial()        | [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)                 |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | string                                                                          |
| getCTColor()         | [Farbe](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                        |
| getColor()           | int                                                                             |
| isColorized()        | boolean                                                                         |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

Sie können auch folgende Informationen für einen Materialteil festlegen:

| ZenMethode                          | Parameter                    | Beschreibung                                                                                                             |
| ----------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| setColorisiert(gefärbt)             | boolesche gefärbt            | Legt fest, ob der Artikelfarbcode angewendet wird                                                                        |
| setTextureLocation(textureLocation) | Texture-Position des Strings | Legt den Texturpfad des Elements fest. Zum Beispiel, wenn Sie wollen, dass eine Ausrüstung anders aussieht als der Rest. |