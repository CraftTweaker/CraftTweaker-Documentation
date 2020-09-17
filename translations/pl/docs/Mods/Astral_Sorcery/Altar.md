# Ołtarz rzemieślniczy

Możesz dodawać i usuwać przepisy tworzenia z Altaru AS.

## Dzwonienie

Możesz wywołać pakiet AltarRecipe używając `mods.astralsorcery.Ołtarz`.

## Usuń przepisy Ołtarza

Ta funkcja usuwa przepis z podaną lokalizacją zasobów.  
Możesz dostać te lokalizacje przez najechanie na wyjściu receptury w JEI lub kompozycji Astralnej, gdy ekran F3 jest aktywny.  
Wyświetla ostrzeżenie, jeśli przepis nie istnieje.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorceryy:shaped/internal/altar/lightwell");
```

<details><summary>Pre v1.10 handler</summary>

Ta funkcja usuwa pierwszy przepis, który znajdzie zwrot dostarczony [IItemStack](../../../Vanilla/Items/IItemStack/) `wyjścia` i używa dostarczonego poziomu ołtarza.  
Jeśli istnieje wiele receptur, które zwracają podaną wartość, musisz wywołać tę metodę wielokrotnie!

<table>
    <tr><th>Poziom Ołtarza</th><th>Nazwa poziomu</th></tr>
    <tr><td>0</td><td>Jasny stół rzemieślniczy</td></tr>
    <tr><td>1</td><td>Ołtarz Wytwarzania Gwiazdy</td></tr>
    <tr><td>2</td><td>Ołtarz Celestial</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(wyjście IItemStack, wyjście z altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## Dodaj przepisy Ołtarza

Od v1.10 wszystkie przepisy wymagają lokalizacji zasobów jako pierwszy parametr.  
W przeciwieństwie do nazw receptury vanilla nie są one opcjonalne i napotkasz błędy, jeśli ich nie podasz. Jeśli chcesz nadpisać istniejący przepis, możesz po prostu dodać nowy przepis o tej samej lokalizacji.  
Możesz dostać te lokalizacje przez najechanie na wyjściu receptury w JEI lub kompozycji Astralnej, gdy ekran F3 jest aktywny.

Wszystkie metody dodawania receptury wymagają tych parametrów:  
ciąg `przepis Lokalizacja`,  
[IItemStack](/Vanilla/Items/IItemStack/) `wyjścia`  
int `starlightRequired`,  
int `craftingTickTime`  
[Składnik](/Vanilla/Variable_Types/IIngredient/)[] `wejścia`

Parametr `wejścia` jest, w przeciwieństwie do receptury tabeli rzemieślniczej tylko 1 Tablica wymiarów.  
Możesz użyć [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEnordy](/Vanilla/OreDict/IOreDictEntry/) lub `null` jako członkowie tablicy

Te przepisy nie mogą być bezkształtowane!

### Odkrycie

`wejścia` długość *musi być* 9

`inputs` Order:  
![Zamówienie wejściowe](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Załączniki

Dodaje przepis na stół rzemieślniczy Gwiazdy (T2)

`wejścia` długość *musi być* 13

`inputs` Order:  
![Zamówienie wejściowe](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar. ddAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### Konstelacja

Dodaje przepis do Ołtarza Celestial (T3)

`wejścia` długość *musi być* 21

`inputs` Order:  
![Zamówienie wejściowe](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
mods.astralsorcery.Altar. ddConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            null, null, <liquid:astralsorcery.liquidstarlight> <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star>, <minecraft:nether_star>
            <minecraft:nether_star> <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### Cecha

Dodaje przepis do Ołtarza Cechy (T4)

`Constellation` Constellation as a unlocalized String. Jest to parametr opcjonalny.

`wejścia` długość *musi być* 25 lub większa. Pozycje o indeksie 25 lub wyższym będą uważane za „pozycje zewnętrzne”, które należy umieścić na przekaźnikach wokół ołtarza.

`inputs` Order:  
![Zamówienie wejściowe](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(ciąg receptur, wyjście IItemStack, int starlight, int craftTickTime, IIngredient[] wejść, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar. ddTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava>, <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava> <liquid:lava>,null, 
    null, null, null,<ore:blockMarble>, <ore:blockMarble>
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble> 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>
    //Elementy zewnętrzne, indeksy 25+
    <minecraft:sand>, <minecraft:sand> <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"astralsorcery. onstellation.evorsio);
```