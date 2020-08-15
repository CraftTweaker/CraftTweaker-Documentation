# IBlockStateMatcher

Ein IBlockStateMatcher Objekt kann verwendet werden, um ein [IBlockState](/Vanilla/Blocks/IBlockState/) Objekt mit einer Reihe von Anforderungen oder einer Reihe von übereinstimmenden Blockstatus-Zuständen abzugleichen.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/) oder statische `verwenden. reate()` Methode), also seien Sie besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren Sie crafttweaker.block.IBlockStateMatcher;`

## Passen eines bestimmten IBlockState an

Jeder [IBlockState](/Vanilla/Blocks/IBlockState/) ist auch ein IBlockStateMatcher, der nur zu sich selbst passt.

## Jeglichen Blockstatus für einen bestimmten Block anpassen

Sie können [IBlockState](/Vanilla/Blocks/IBlockState/)'s `matchBlock()` Methode verwenden, um einen IBlockStateMatcher zu erstellen, der allen möglichen Blockstatus für diesen Block entspricht.

## Calling an IBlockStateMatcher

Es gibt mehrere Methoden, die einen IBlockStateMatcher zurückgeben

- Verwendung von `IBlockStateMatcher.create()`.
- Verwendung der Methode `withMatchedValuesForProperty()` auf einem anderen IBlockStateMatcher.
- ODER zwei IBlockStateMatchers zusammen, um einen Compound Matcher zu erhalten.
- Erstellen eines [IBlockState](/Vanilla/Blocks/IBlockState/), da alle IBlockState Objekte IBlockStateMatcher sind.

## Zusammengesetzte Matcher

Wenn Sie OR (`|`) verwenden, um IBlockStateMatcher zu kombinieren, ist der resultierende IBlockStateMatcher nicht mehr an einen bestimmten zugrunde liegenden Block gebunden, wie es bei einem [IBlockState](/Vanilla/Blocks/IBlockState/) oder einem IBlockStateMatcher der mit dem `IBlockStateMatcher erstellt wurde. reate()` Methode. Stattdessen passt der Matcher auf jeden Blockzustand, der von einem der kombinierten Matcher identifiziert worden wäre.

Da dieser Blockstatus nicht an einen bestimmten Block gebunden ist, ist es nicht möglich, die `mitMatchedValuesForProperty()` Methode zum Abrufen eines anderen IBlockStateMatcher zu verwenden.

### statisches Erstellen

`statischer IBlockStateMatcher erstellen... blockStates);` Parameters:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → Null oder mehr Blockstaten, die mit diesem Matcher übereinstimmen. 

Gibt einen IBlockStateMatcher zurück, um den angegebenen Blockstatus(en) zu entsprechen.

- Wenn null `Blockstatus` geliefert werden, wird dieser Matcher niemals mit irgendwelchen Blockstatus übereinstimmen. 
- Wenn nur ein Blockstatus in `Blockstatus angegeben wird,`, der resultierende IBlockStateMatcher wird *jeden* Blockstatus des zugrunde liegenden IBlockState-Blocks mit allen Eigenschaften, die als übereinstimmend akzeptiert werden, erfüllen. Die `mit MatchedValuesForProperty` Methode kann verwendet werden, um spezifischere Anforderungen für die Eigenschaften hinzuzufügen. 
- Wenn mehrere `Blockstatus` geliefert werden der resultierende IBlockStateMatcher ist identisch mit dem ODER-Operator (`|`) mit jedem der IBlockStates zur Verfügung gestellt.

## ZenMethoden

### passt

`boolesche Matches(IBlockState blockState);`  
Parameter:

- [IBlockState](/Vanilla/Blocks/IBlockState/) Blockstatus → Das Blockstatusobjekt, mit dem übereinstimmen soll

Gibt einen Booleschen Wert zurück, der angibt, ob der Blockstatus den Anforderungen dieses Matchers entspricht.  
Sie können auch `A hat B` , das `A.matches(B)` repräsentiert.

### Erhalte oder füge erlaubte Eigenschaften hinzu

*(Diese Methoden sind nur für nicht-zusammengesetzte IBlockStateMatcher Instanzen erlaubt)*

    IBlockStateMatcher mit MatchedValuesForProperty(String name, String... values);
    Liste<String> getMatchedValuesForProperty(String name);
    Karte<String, List<String>> getMatchedProperties();
    

Parameter:

- Zeichenkettenname → Der Name der Eigenschaft
- String... -Werte → Ein oder mehrere Werte, die die Eigenschaft eines passenden IBlockState haben kann.

Gibt einen neuen IBlockStateMatcher mit den gleichen Eigenschaften wie dieser IBlockStateMatcher zurück, mit Ausnahme des angegebenen Objekts `Namens`, , der nun einen der angegebenen `Werte` als übereinstimmende Eingabe zulässt.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Returns a collection of every [IBlockState](/Vanilla/Blocks/IBlockState/) with any combination of properties that match this IBlockStateMatcher. Diese Liste kann Blockstatus enthalten, die nicht möglich sind, durch normale Spielmittel zu gelangen. (Ex: `IBlockStateMatcher. reate(<blockstate:minecraft:log>)` gibt einen IBlockStateMatcher zurück, der zu den Protokollen mit der Eigenschaft `Achse=keine`passt , mit Rindentexturen auf allen 6 Seiten.)

### Prüfen, ob ein BlockState ein zusammengesetzter Zustand ist

`boolean isCompound()`

Macht was du erwarten würdest.

### Eine Befehlszeichenrepräsentation erhalten

`ZenGetter Befehlszeichenkette`

Gibt einen Klammerhandlerausdruck zurück, falls erforderlich, gepaart mit `mit MatchedValueForProperty()` aufrufen.  
Beachten Sie jedoch, dass die zurückgegebenen Methodenaufrufe nicht `""` um die Parameter herum haben.  
Wenn Sie also dieses Ergebnis kopieren wollten, müssen Sie es manuell zu den Argumenten hinzufügen!