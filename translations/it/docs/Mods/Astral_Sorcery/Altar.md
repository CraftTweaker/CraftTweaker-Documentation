# Artigianato Dell'Altare

È possibile aggiungere e rimuovere le ricette di creazione dall'Altare AS.

## Chiamata

Puoi chiamare il pacchetto AltarRecipe usando `mods.astralsorcery.Altar`.

## Rimuovi Ricette Dell'Altare

Questa funzione rimuove la ricetta con la posizione delle risorse data.  
È possibile ottenere quelle posizioni passando sopra l'output della ricetta in JEI o il tomo Astrale mentre la schermata F3 è attiva.  
Stampa un avviso se la ricetta non esiste.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```

<details><summary>Pre v1.10 handler</summary>

Questa funzione rimuove la prima ricetta che trova che restituisce l'output [IItemStack](../../../Vanilla/Items/IItemStack/) `fornito` e utilizza il livello di altare fornito.  
Se ci sono più ricette che restituiscono l'output fornito, è necessario chiamare questo metodo più volte!

<table>
    <tr><th>Livello Altare</th><th>Nome del livello</th></tr>
    <tr><td>0</td><td>Tavolo Da Lavoro Luminoso</td></tr>
    <tr><td>1</td><td>Altare Artigianato Starlight</td></tr>
    <tr><td>2</td><td>Altare Celeste</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack output, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## Aggiungi Ricette Altare

Dal v1.10 tutte le ricette richiedono una posizione risorsa come primo parametro.  
A differenza dei nomi delle ricette della vaniglia, non sono opzionali e si riscontrano errori se non lo si fornisce. Se si desidera sovrascrivere una ricetta esistente, è sufficiente aggiungere una nuova ricetta con la stessa posizione.  
È possibile ottenere quelle posizioni passando sopra l'output della ricetta in JEI o il tomo Astrale mentre la schermata F3 è attiva.

Tutti i metodi di aggiunta della ricetta richiedono questi parametri:  
stringa `recipeLocation`,  
[IItemStack](/Vanilla/Items/IItemStack/) `output`,  
int `starlightRichiesto`,  
int `craftingTickTime`,  
[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] `ingressi`

Il parametro `in ingressi` è, a differenza delle ricette Crafting Table solo un Array dimensionale.  
Puoi usare [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) o `null` come membri dell'array

Queste ricette non possono essere senza forma!

### Scoperta

`input` length *deve essere* 9

`inputs` Order:  
![Ordine Di Input](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Attunzione

Aggiunge una ricetta al Tavolo da Artigianato Starlight (T2)

`input` length *deve essere* 13

`inputs` Order:  
![Ordine Di Input](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar. ddAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### Costellazione

Aggiunge una ricetta all'Altare Celeste (T3)

`ingressi` lunghezza *deve essere* 21

`inputs` Order:  
![Ordine Di Input](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
mods.astralsorcery.Altar. ddConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            null, null, <liquid:astralsorcery.liquidstarlight> <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star> <minecraft:nether_star>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### Trait

Aggiunge una ricetta all'Altare del Trait (T4)

`Constellation` the Constellation as an unlocalized String. Questo è un parametro opzionale.

`ingressi` lunghezza *deve essere* 25 o superiore. Gli oggetti all'indice 25 o superiore saranno considerati come "oggetti esterni" che devono essere messi su relè intorno all'altare.

`inputs` Order:  
![Ordine Di Input](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, IIngredient[] inputs, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar. ddTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava> <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>,null, 
    null, null, null,<ore:blockMarble>, <ore:blockMarble>
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
    //Articoli esterni, indici 25+
    <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"astralsorcery. onstellation.evorsio");
```