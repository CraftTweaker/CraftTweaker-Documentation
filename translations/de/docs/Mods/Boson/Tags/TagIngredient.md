# `TagIngredient`

Ein `TagIngredient` ist eine `IIngredient` Implementierung, mit der Sie ein [`Tag`](/Mods/Boson/Tags/Tag/) in Rezepten verwenden können. Sie können auf diese Daten nur außerhalb der [`Tags` Loader](/Mods/Boson/Loaders/Tags/) zugreifen. For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## Klassendetails
Die Klasse befindet sich im `net.thesilkminer.mc.boson.zen.tag` Paket, wodurch `net.thesilkminer.mc.boson.zen.tag.TagIngredient` der voll qualifizierte Name für den Import ist.

## Neue Instanz erstellen
Werfen Sie einen Blick auf [die Klammerhandhaber-Dokumentation](/Mods/Boson/Tags/BracketHandler/).

## `IIngredient`
Da `TagIngredient` ein `IIngredient`ist, bietet es Zugriff auf alle Eigenschaften und Methoden dieser Schnittstelle. Werfen Sie auf [`IIngredient`Dokumentationsseite](/Vanilla/Variable_Types/IIngredient/) für weitere Details. Diese Dokumentationsseite umreißt nur Ergänzungen und Scherben, die speziell für diese Klasse sind.

## Eigenschaften
Ein `TagIngredient` bietet Schreibzugriff auf zusätzliche Eigenschaften, wie in der folgenden Tabelle dargestellt:

| Eigenschaftsname | Type                                      | Beschreibung                                                                |
| ---------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| `tagName`        | [`Namensraum String`](/Mods/Boson/Names/) | Name, der den Tag eindeutig identifiziert, auf den sich diese Zutat bezieht |

## Beispiel

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
