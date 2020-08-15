# Der Klammerhandler

Der Bracket Handler ist die einzige Möglichkeit, um ein Schlagwort zu erhalten.

## Syntax
Die Syntax dieses Klammerhandlers ist extrem einfach zu befolgen, und gleichzeitig erlaubt es eine große Vielfalt von Möglichkeiten, in welchem Tag es vom Klammerhandler zurückgegeben werden soll.

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

Im obigen Code-Snippet die Teile in allen Caps sind die Teile, die vom Entwickler angepasst werden können und das Ziel, das zurückgegeben wird, repräsentieren.

`TYPE` identifiziert den [Typ des Tag](/Mods/Boson/Tags/TagType/) , der erstellt wird. Der Typ muss eine der Mnemonik sein, die einen Tag-Typ identifiziert. Eine Liste gültiger Tag-Typen finden Sie auf der verlinkten Seite.

`NAMESPACE` identifiziert den Namensraum eines Tags, d.h. die Mod-ID, die das Tag besitzt. In den meisten Fällen wird der Namensraum entweder `schmieden` oder `minecraft`, aber es ist auch möglich, andere Namensräume zu verwenden, z. . für mod-spezifische Tags.

`NAME` repräsentiert den Namen des Tags, das abgerufen werden soll.

Werfen Sie einen Blick auf den Abschnitt Verhalten , um zu erfahren, was dieser Klammerhandler zurückgibt.

## Verhalten
Differently from other bracket handlers that are present in CraftTweaker, the behavior of this bracket handler differs according to which loader is processing the script the bracket handler is in.

### Die `Tags` laden
If the bracket handler is referenced in a script loaded by the [`tags` loader](/Mods/Boson/Loaders/Tags/), it will return a [`Tag`](/Mods/Boson/Tags/Tag/). Dies erlaubt die Manipulation der Elemente, die im Tag selbst enthalten sind. Weitere Informationen finden Sie in der Klassendokumentation.

### Der `preinit` Lader
Wenn der Klammer-Handler in einem Skript referenziert wird, das vom `preinit` geladen wird, wird eine Ausnahme geworfen, da Tags später im Minecraft-Lebenszyklus geladen werden, nämlich kurz bevor Rezepte registriert werden.

### Jeder andere Lader
Wenn der Klammerhandler in einem Skript referenziert wird, das von anderen Ladern geladen wird einschliesslich des Standard- `Rezept-Ereignisses` wird es ein [`TagIngredient`](/Mods/Boson/Tags/TagIngredient/) zurückgeben. Dies erlaubt keine Manipulation von dem Tag-Inhalt, aber erlaubt es, das Schlagwort in Rezepten und anderen Methodenanrufen zu verwenden, die eine Instanz von [`IIngredient`](/Vanilla/Variable_Types/IIngredient/) als Parameter erfordern.

## Beispielnutzung

Dieses erste Beispiel zeigt die Verwendung eines `TagIngredient` um ein neues Rezept hinzuzufügen. Beachten Sie die Verwendung des `Elementes` Tag Typs:

```zenscript
val tagIngredient = <tag-items:forge:ingots/iron>;
recipes.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

This second example shows the manipulation of a `Tag` of type `blocks`:

```zenscript
#loader tags
val tag = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" as NameSpacedString);
```
