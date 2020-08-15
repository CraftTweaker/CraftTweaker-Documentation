# BlockState Klammerhandler

Der BlockState Bracket Handler gibt Ihnen Zugriff auf die BlockStates im Spiel. Es ist nur möglich BlockStates im Spiel zu registrieren so dass das Hinzufügen oder Entfernen von Mods Probleme verursachen kann, wenn Sie die Blockzustände des Mods in einem BlockState Bracket Handler referenzieren.

BlockStates werden im BlockState Bracket Handler wie folgt referenziert:

```zenscript
<blockstate:modid:blockname>
```

Mit dem `-Modid` ist das Modid der Mod in der der Block definiert ist und `Blockname` ist der Name des Blocks. Dies gibt den Standard-BlockState für den angegebenen Block zurück.

Um einen bestimmten Blockzustand mit dem BlockState Bracket Handler zu erhalten, können Sie optional seine Eigenschaften wie folgt festlegen:

```zenscript
<blockstate:modid:blockname:properties>
```

Wo `Eigenschaften` ist ein durch Kommas getrennter Satz von `name=value` Paare für alle Eigenschaften, die Sie im Blockstatus angeben möchten. Alle Eigenschaften, die nicht angegeben werden, werden dieselben Werte wie im Standard-Blockstatus angegeben.

Dies gibt ein IBlockState Objekt zurück. Bitte lesen Sie [den entsprechenden Wiki-Eintrag](/Vanilla/Blocks/IBlockState/) für weitere Informationen.

Beachten Sie, dass dieser Klammerhandler eine Referenz auf einen bestimmten Blockstatus erzeugt. Wenn Sie mit mehreren Blockzuständen übereinstimmen möchten, lesen Sie bitte [den IBlockStateMatcher Wiki Eintrag](/Vanilla/Blocks/IBlockStateMatcher).

## Beispiele

Ein Beispiel für den BlockState Bracket Handler wäre Folgendes:

```zenscript
//Schmutzblock
<blockstate:minecraft:dirt>

//Eiche Log, vertikal
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

//Fichtenprotokoll, horizontal entlang der x-Achse
<blockstate:minecraft:log:variant=spruce,axis=x>
```