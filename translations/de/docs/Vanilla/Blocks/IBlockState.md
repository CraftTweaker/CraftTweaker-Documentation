# IBlockState

Ein IBlockState Objekt repräsentiert den aktuellen Status eines Blocks.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.block.IBlockState;`

## Aufruf eines IBlockState

Es gibt mehrere Methoden, die einen IBlockState zurückgeben

- Verwendung des [Klammerhandlers](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- Verwendung der statischen Methode `IBlockState.getBlockState()` (Siehe unten für weitere Informationen)
- Verwendung der `getMatchingBlockStates()` Methode für ein [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) Objekt um ein Array von IBlockStates zu erhalten.
- Verwendung der Methode `withProperty()` für ein anderes IBlockState Objekt.

## Einen IBlockState zur Laufzeit auflösen

Möglicherweise gibt es Zeiten, in denen dein Skript auf die Interaktion mit einem Block eines Mods angewiesen ist, der noch nicht geladen wurde zum Beispiel in Blockereignissen im ContentTweaker oder einem anderen Preinit-Skriptlader. Wenn du versuchst, einen [Klammerhandler](/Vanilla/Brackets/Bracket_BlockState/) für einen Block zu verwenden, der noch nicht registriert ist, wird der Handler nicht auflösen und Ihr Skript wird nicht funktionieren.

Um dies zu vermeiden, können Sie die statische Methode `IBlockState.getBlockState()` verwenden, um einen IBlockState zur Laufzeit aufzulösen.

### statischer getBlockStatus

`statische IBlockState getBlockState(String Blockname, String... properties)` Parameters:

- String Blockname → Eine Zeichenkette im Format "modid:blockname" wie sie im [BlockState Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) erscheinen würde
- String... Eigenschaften → Null oder mehr Zeichenketten von `"name=value"` Paare von Eigenschaften, die auf diesen Blockstatus angewendet werden sollen. Alle nicht spezifizierten Eigenschaften verwenden den gleichen Wert wie in der Standard-Blockstate für den angegebenen Blocknamen.

Gibt einen IBlockState des angegebenen `Blocknamens` mit den angegebenen `Eigenschaften`oder den Standard-Blockstatus zurück, wenn keine Eigenschaften angegeben sind.

## Erweiterte IBlockeigenschaften

IBlockState erweitert [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). Das bedeutet, dass alle Methoden, die [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) Objekten zur Verfügung stehen, auch für IBlockState Objekte verfügbar sind.

## Erweiterung des IBlockStateMatcher

IBlockState erweitert [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). Das bedeutet, dass alle Methoden, die [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) Objekten zur Verfügung stehen, auch für IBlockState Objekte verfügbar sind.

## ZenMethoden und ZenGetters

| ZenGetter     | Rückgabetyp                       | Beschreibung                                                                                          |
| ------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| blockieren    | [IBlock](/Vanilla/Blocks/IBlock/) | Gibt den referenzierten Block zurück                                                                  |
| meta          | int                               | Gibt die Metadaten des referierten Blocks zurück                                                      |
| Kommandozeile | string                            | Gibt einen möglichen [Klammerhandler](/Vanilla/Brackets/Bracket_BlockState/) für diesen Status zurück |

## ZenMethoden

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameter:

- [IWelt](/Vanilla/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Vanilla/World/IBlockPos/) Pos → Position des Blocks

Gibt einen booleschen Wert zurück, der sicherstellt, ob der Block ersetzt werden kann oder nicht.

### Lade oder ändere Eigenschaften

Sie können eine Liste aller registrierten Objekte erhalten, entweder als Liste mit allen Eigenschaftsnamen oder als Karte, die die Eigenschaften auf ihren Wert abbildet.  
Sie können auch prüfen, welche Werte für einen bestimmten Eigenschaftsnamen möglich sind.  
Sie können auch `withProperty` verwenden, um ein neues IBlockState Objekt zu erstellen, dessen Eigenschaft geändert wurde.

```zenscript
Liste<String> getPropertyNames();
String getPropertyValue(String name);
List<String> getAllowedValuesForProperty(String name);

IBlockState withProperty(String name, String value);
```

### Vergleicht zwei IBlockState Objekte

Sie können entweder `int compare(IBlockState other);` oder die ZenVergleiche Marken `==` `!=`verwenden.  
Die Rückgabe der verschiedenen Typen:

- `state.compare(other)` gibt eine Int zurück, die 0 ist, wenn sie gleich sind
- `Status == anderer` gibt einen Bool zurück, der zutrifft, wenn er gleich ist

### Einen expliziten Blockstatus-Matcher erhalten

Gibt einen [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) zurück, der dem angegebenen Block entspricht.

```zenscript
IBlockStateMatcher MatchBlock();
```