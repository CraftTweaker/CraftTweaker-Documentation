# Merkmalsrepräsentation

Eine Merkmalsdarstellung stellt einen Tinkers' Construct Trait dar.  
Sie können ein solches Objekt entweder vom [Merkmalsbauer](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) oder vom [Trait-Klammerhandler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/) erhalten.

## Diese Klasse importieren

Möglicherweise ist es erforderlich, dass Sie die Klasse importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere mods.contenttweaker.tconstruct.Merkmal`

## ZenGetter

| ZenGetter     | Type   |
| ------------- | ------ |
| identifier    | string |
| Kommandozeile | string |

## Merkmalsartikel hinzufügen

Kombiniert man die angegebene Zutat mit einem Werkzeug in der Werkzeugschmiede, kann man das Merkmal als Modifikator anwenden.

```zenscript
//myTrait.addModifierItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- `Gegenstand` ist der Gegenstand, auf den man zutrifft. Sie können [Artikelbedingungen](/Vanilla/Items/Item_Conditions/) verwenden, aber keine Transformatoren. 
- `Der benötigte Betrag` ist die Anzahl der Gegenstände, gegen die abgestimmt wird. Sie können sie über alle Slots der Toolforge aufteilen, so dass Sie auch über 64 hinausgehen können. Im obigen Beispiel benötigen Sie 4 Eisenblöcke pro Zuschlag. Standard ist 1.
- `Betrag übereinstimmend` ist die Menge an Merkmalspunkten pro `Betrag. Benötigt`. Im obigen Beispiel geben vier Eisenblöcke zwei Merkmalspunkte. Standard ist 1.

## Zugriff auf Merkmalsdaten

Merkmalsdaten sind Daten, die zu einem Merkmal gehören und ItemBound sind. Sie können daher den [IItemStack](/Vanilla/Items/IItemStack/) zur Verfügung stellen und das [TraitDataRepresentation](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/) Objekt abrufen.

    val myTraitData = myTrait.getData(itemWithTrait);