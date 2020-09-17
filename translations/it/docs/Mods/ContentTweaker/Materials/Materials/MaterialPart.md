# MaterialPart

Un oggetto MaterialPart è, come il nome suggerisce una combinazione di un [Materiale](/Mods/ContentTweaker/Materials/Materials/Material/) e una [Parte](/Mods/ContentTweaker/Materials/Parts/Part/), such as `platinum gear`.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.MaterialPart;`

## Recupero di un tale oggetto

Ci sono diversi modi di ritrasmettere un tale oggetto, sia come lista che come singolo oggetto.

Oggetto Singolo:

- Utilizzando il [Material Part Bracket Handler](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/)
- Usare un [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) registerPart Method
- Utilizzando un [Part's](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterial Method

Lista:

- Utilizzando [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial Method
- Utilizzando un [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) registerParts Method
- Utilizzando un metodo [Part's](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterials

## Campi

È possibile recuperare le seguenti informazioni da un MaterialPart:

| ZenMethod            | Tipo Di Reso                                                                    |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | stringa                                                                         |
| getLocalizedName()   | stringa                                                                         |
| hasEffect()          | boolean                                                                         |
| hasOverlay()         | boolean                                                                         |
| getMaterial()        | [IMateriale](/Mods/ContentTweaker/Materials/Materials/Material/)                |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | stringa                                                                         |
| getCTColor()         | [Colore](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                       |
| getColor()           | int                                                                             |
| isColorized()        | boolean                                                                         |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

È inoltre possibile impostare le seguenti informazioni di un MaterialPart:

| ZenMethod                           | Parametro         | Descrizione                                                                                                                |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| setColorized(colorato)              | colorato booleano | Imposta se il codice colore dell'elemento è applicato                                                                      |
| setTextureLocation(textureLocation) | textureLocation   | Imposta il percorso della texture dell'oggetto. Ad esempio, se si desidera che un Gear abbia un aspetto diverso dal resto. |