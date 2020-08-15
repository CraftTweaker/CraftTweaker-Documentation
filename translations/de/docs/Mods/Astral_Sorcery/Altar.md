# Altar Handwerk

Du kannst Handwerksrezepte aus dem AS Altar hinzufügen und entfernen.

## Anruf

Sie können das AltarRezept-Paket mit `mods.astralsorcery.Altar` aufrufen.

## Altarrezepte entfernen

Diese Funktion entfernt das Rezept mit der angegebenen Ressourcen-Position.  
Sie können diese Positionen erhalten, indem Sie über die Rezeptausgabe in JEI oder dem Astral Tome schweben, während der F3-Bildschirm aktiv ist.  
Gibt eine Warnung aus, falls das Rezept nicht existiert.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```

<details><summary>Pre v1.10 handler</summary>

This function removes the first recipe it finds that returns provided [IItemStack](../../../Vanilla/Items/IItemStack/) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

<table>
    <tr><th>Altar Level</th><th>Ebenenname</th></tr>
    <tr><td>0</td><td>Leuchtender Herstellungstisch</td></tr>
    <tr><td>1</td><td>Starlight Crafting Altar</td></tr>
    <tr><td>2</td><td>Astronomischer Altar</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack Output, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## Altar Rezepte hinzufügen

Seit v1.10 benötigen alle Rezepte einen Ressourcenstandort als ersten Parameter.  
Im Gegensatz zu Vanillerezeptnamen sind diese nicht optional und Sie werden auf Fehler stoßen, wenn Sie sie nicht angeben. Wenn du ein existierendes Rezept überschreiben möchtest, kannst du einfach ein neues Rezept mit der gleichen Position hinzufügen.  
Sie können diese Positionen erhalten, indem Sie über die Rezeptausgabe in JEI oder dem Astral Tome schweben, während der F3-Bildschirm aktiv ist.

Alle Rezeptzusatzmethoden erfordern folgende Parameter:  
String `Rezeptposition`,  
[IItemStack](/Vanilla/Items/IItemStack/) `Ausgabe`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[Ingredient](/Vanilla/Variable_Types/IIngredient/)[] `Eingaben`

Der `Eingänge` ist im Gegensatz zu den Rezepten für Handwerkstische nur ein Dimensionales Array.  
Sie können [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEinträge](/Vanilla/OreDict/IOreDictEntry/) oder `null` als Array-Mitglieder

Diese Rezepte können nicht formlos sein!

### Entdeckung

`Eingaben` Länge *muss* 9 sein

`inputs` Order:  
![Eingänge Reihenfolge](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Befestigung

Fügt dem Starlight Handwerkstisch ein Rezept hinzu (T2)

`Eingaben` Länge *muss* 13 sein

`inputs` Order:  
![Eingänge Reihenfolge](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar. ddAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### Konstellation

Fügt dem Astronomischen Altar ein Rezept hinzu (T3)

`Eingaben` Länge *muss* 21 sein

`inputs` Order:  
![Eingänge Reihenfolge](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
mods.astralsorcery.Altar. ddConstellationAltarRecipe("mypackname:shaped/intern/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            null, null, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### Merkmal

Fügt dem Merkmalskaltar ein Rezept hinzu (T4)

`Konstellation` der Konstellation als unlokalisierter String. Dies ist ein optionaler Parameter.

`Eingänge` Länge *müssen* 25 oder höher sein. Artikel am Index 25 oder höher werden als "äußere Elemente" betrachtet, die in Relais um den Altar herum gesetzt werden müssen.

`inputs` Order:  
![Eingänge Reihenfolge](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, IIngredient[] inputs, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar. ddTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava>, <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>,null, 
    null, null, null, null,<ore:blockMarble>, <ore:blockMarble>,
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
    //Äußere Gegenstände, Indizes 25+
    <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"AstralZauberkunde". onstellation.evorsio");
```