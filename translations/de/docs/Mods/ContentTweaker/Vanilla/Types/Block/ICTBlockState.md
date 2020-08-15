# ICTBlockState

Ein ICTBlockState Objekt repräsentiert den aktuellen Status eines Blocks.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.BlockState;`

## Aufruf eines ICTBlockState

Sie können einen ICTBlockState entweder als Parameter in einer [IBlockAction-Funktion](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) oder vom [Block Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/) erhalten

`<block:minecraft:dirt>`

## ZenMethoden und ZenGetters

| ZenMethode        | ZenGetter  | Rückgabetyp                                                            | Beschreibung                                                      |
| ----------------- | ---------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| getBlock()        | blockieren | [IBlock](/Vanilla/Blocks/IBlock/)                                      | Gibt den referenzierten Block zurück                              |
| getMeta()         | meta       | int                                                                    | Gibt die Metadaten des referierten Blocks zurück                  |
| canProvidePower() |            | boolean                                                                | Gibt zurück, wenn der empfohlene Block Redstone-Power bieten kann |
| getMobilityFlag() |            | [PushReaktion](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | Gibt die Push-Reaktion zurück                                     |

## ZenMethoden

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameter:

- [IWelt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) Pos → Position des Blocks

Gibt einen booleschen Wert zurück, der sicherstellt, ob der Block ersetzt werden kann oder nicht.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameter:

- [IWelt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) Pos → Position des Blocks

Gibt eine Int zurück, die den aktuellen Lichtwert an der angegebenen Stelle darstellt.

### getWeakPower

`int getWeakPower(IWorld world, IBlockPos blockPos, Facing Facing);`  
Parameter:

- [IWelt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) Pos → Position des Blocks
- [Facing](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) facing → Die zu überprüfende Seite

Gibt eine Int zurück, die die aktuelle redstone-Kraft auf dieser Seite darstellt.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameter:

- [IWelt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) Pos → Position des Blocks

Gibt eine Int zurück, die den Rotsteinvergleichungstyp des Blocks überschreibt.

### Vergleicht zwei ICTBlockState Objekte

Du kannst entweder `int compare(ICTBlockState other);` oder die ZenVergleiche Tokens `==` `!=`verwenden.  
Die Rückgabe der verschiedenen Typen:

- `state.compare(other)` gibt eine Int zurück, die 0 ist, wenn sie gleich sind
- `Status == anderer` gibt einen Bool zurück, der zutrifft, wenn er gleich ist