# Banco da Lavoro

## Tipi di Ricette

Ci sono tre tipi di ricette per i banchi da lavoro:

- **Informi:** Una ricetta informe è una ricetta dove la posizione degli oggetti nella griglia di fabbricazione non è importante.
- **Con forma:** Una ricetta con forma è una ricetta dove la posizione degli oggetti deve corrispondere ad una predeterminata griglia.
- **Con forma riflessa:** Una ricetta riflessa è equivalente ad una ricetta con forma, ma può essere specchiata lungo l'asse orizzontale o verticale.

## Aggiungere una Ricetta

_Quando aggiungi una ricetta, assicurati che i nomi delle ricette siano unici!_

### Aggiungere Ricette Informi

`craftingTable.addShapeless(nomeRicetta, risultato, ingredienti, funzioneRicetta);`

- `nomeRicetta` &lt;string>
- `prodotto` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ingredienti` <[IIngredient](/vanilla/api/items/IIngredient)[]>
- `funzioneRicetta` (Opzionale) <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Aggiunge una ricetta [informe](#recipe-types) al banco da lavoro. Siccome le ricette [informi](#recipe-types) ignorano la posizione degli oggetti iniziali, l'ordine degli oggetti durante la creazione della ricetta non è importante.

Le ricette [informi](#recipe-types) possono avere fino a 9 elementi in input, ma quelle con 4 input o meno posso anche essere fabbricate nella griglia 2x2 disponibile nell'inventario.

Le ricette del banco da lavoro possono produrre più di un oggetto singolo. Per far ciò, è possibile sfruttare l'[operatore di moltiplicazione di IItemStack](/vanilla/api/items/IItemStack/#mul) sull'oggetto prodotto.

```zenscript
craftingTable.addShapeless("esempio_informe_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Una ricetta senza forma può avere fino a 9 elementi in input
// In questo esempio si può anche notare come si possa avere più
// di un oggetto in output. Difatti, nel seguente esempio, il prodotto sarà di 8 Erbe Alte
craftingTable.addShapeless("esempio_informe_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Fai riferimento a [Usare le Funzioni Ricetta](#using-recipe-functions) per alcuni esempi su come usare le funzioni ricetta._

### Aggiungere Ricette con Forma e con Forma Riflessa

`craftingTable.addShaped(nomeRicetta, prodotto, ingredienti, funzioneRicetta);`

`craftingTable.addShapedMirrored(nomeRicetta, prodotto, ingredienti, funzioneRicetta);`

- `nomeRicetta` &lt;string>
- `prodotto` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ingredienti` <[IIngredient](/vanilla/api/items/IIngredient)[][]>
- `funzioneRicetta` (Opzionale) <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

Aggiunge una ricetta [con forma](#recipe-types) (o [riflessa](#recipe-types), a seconda della funzione usata) al banco da lavoro. L'ordine degli oggetti quando la ricetta viene creata detta la posizione di ciascun oggetto all'interno della griglia di fabbricazione.

Rendere la ricetta una ricetta [con forma riflessa](#recipe-types) permette una maggiore flessibilità al giocatore sulla posizione degli oggetti nella griglia di fabbricazione.

Sia le ricette [con forma](#recipe-types) sia quelle [con forma riflessa](#recipe-types) possono essere create per permetterne la fabbricazione in una griglia 2x2 (nell'inventario) o 3x3.

Le ricette del banco da lavoro possono produrre più di un oggetto singolo. Per far ciò, è possibile sfruttare l'[operatore di moltiplicazione di IItemStack](/vanilla/api/items/IItemStack/#mul) sull'oggetto prodotto.

```zenscript
// Aggiunta di una ricetta con forma
craftingTable.addShaped("esempio_con_forma_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Aggiunta di una ricetta con forma 2x2 (potrebbe anche essere resa riflessa)
craftingTable.addShaped("esempio_con_forma_1, <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Aggiunta di una ricetta con forma riflessa
craftingTable.addShapedMirrored("esempio_con_forma_riflessa_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Fai riferimento a [Usare le Funzioni Ricetta](#using-recipe-functions) per alcuni esempi su come usare le funzioni ricetta._

## Usare le Funzioni Ricetta

Una funzione ricetta permette di generare un prodotto programmaticamente. Questo può essere utile soprattutto quando è necessario usare delle informazioni riguardanti uno degli oggetti in input, come il suo livello di danno o altri dati NBT.

_Siccome le ricette con forma e con forma riflessa sono molto simili, gli esempi riguarderanno solamente le prime. Ogni esempio che usa `addShaped` può essere letto come se venisse usata `addShapedMirrored`._

### Usare RecipeFunctionArray in una Ricetta Informe

`funzioneRicetta` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(prodottoUsuale as IItemStack, ingredienti as IItemStack[]) => {};`

- `prodottoUsuale` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ingredienti` <[IItemStack](/vanilla/api/items/IItemStack)[]> Array di ingredienti ordinati nello stesso modo definito nella ricetta originale.

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless("esempio_informe_funzione_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (solitoProdotto as IItemStack, ingredienti as IItemStack[]) => {
    // Controlla se <item:minecraft:dirt> ha come nome "vero blocco di diamante"
    if (inputs[0].displayName == "vero blocco di diamante") {
        // Ritorna <item:minecraft:diamond> * 9
        return solitoProdotto;
    }

    // Altrimenti ritorna<item:minecraft:clay> avente come nome "Diamante"
    return <item:minecraft:clay>.setDisplayName("Diamante");
});
```

### Usare RecipeFunctionMatrix in una Ricetta Con Forma (Riflessa)

`funzioneRicetta` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(solitoProdotto as IItemStack, ingredienti as IItemStack[][]) => {};`

- `prodottoUsuale` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ingredienti` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Array di ingredienti ordinati nello stesso modo definito nella ricetta originale. Un ingrediente può essere trovato definendone prima la riga, poi la colonna (`ingredienti[0][1]`, per esempio, identifica l'ingrediente nella prima riga, seconda colonna).

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShaped("esempio_con_forma_funzione_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (solitoProdotto as IItemStack, ingredienti as IItemStack[][]) => {
        var contatore = 0;
        // Controlla che tutte le <item:minecraft:clay_ball> abbiano come nome "Diamante"
        for riga in ingredienti {
            for oggetto in riga {
                if (<item:minecraft:clay_ball>.matches(oggetto) && oggetto.displayName == "Diamante") {
                    // Se l'oggetto nella ricetta è <item:minecraft:clay_ball> e ha come nome "Diamante", incrementiamo il contatore
                    contatore++;
                }
            }
        }

        // Se ci sono 8 <item:minecraft:clay_ball> aventi come nome "Diamante"
        if (contatore == 8) {
            if (inputs[1][1].displayName == "Diamante Speciale") {
                // Se<item:minecraft:diamond> ha come nome "Diamante Speciale"
                // Ritorna 2 <item:minecraft:diamond_block>
                return solitoProdotto * 2;
            } else {
                // Ritorna <item:minecraft:diamond_block>
                return solitoProdotto;
            }
        }

        // Altrimenti, ritorna <item:minecraft:clay> avente come nome "Blocco di Diamante"
        return <item:minecraft:clay>.setDisplayName("Blocco di Diamante");
    });
```

### Uso Avanzato

#### Funzioni come Variabili

Recipe functions can be assigned to a variable allowing you to ulitize the same function for multiple recipes easily.

Shapeless:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapelessRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(inputs[0].displayName == "totally real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>.setDisplayName("Diamond");
};

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:dirt>
craftingTable.addShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:cobblestone>
craftingTable.addShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Shaped/Mirrored:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapedRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var counter = 0;
    // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
    for row in inputs {
        for recipeItem in row {
            if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                counter++;
            }
        }
    }

    // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
    if (counter == 8) {
        if (inputs[1][1].displayName == "Special Diamond") {
            // If <item:minecraft:diamond> has a display name of "Special Diamond"
            // Return 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Returns <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
    return <item:minecraft:clay>.setDisplayName("Diamond Block");
};

craftingTable.addShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

craftingTable.addShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## Removing a Recipe

### Remove a Recipe by Name

`craftingTable.removeByName(recipeName);`

- `recipeName` &lt;string>

Removes the recipe that matches the name provided.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Remove Recipes by Output

`craftingTable.removeRecipe(output);`

- `output` <[IItemStack](/vanilla/api/items/IItemStack)>

Removes all recipes where the output result is the provided [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Remove Recipes by Mod ID

`craftingTable.removeByModid(modId);`

- `modId` &lt;string>

Removes all recipes added by the provided mod.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Exclude Recipes From Mod ID Removal

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` &lt;string>
- `exclusionFilter` <[RecipeFilter](/vanilla/api/recipe/RecipeFilter)>
  - `name` &lt;string> The name of the current recipe being checked. _The mod id will not be included_

Removes all recipes added by the provided mod. Recipes are excluded if the result of the exclusionFilter returns true for the recipe name.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Checks if the name of the recipe matches "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

Multiple recipes can also be excluded. One way this can be done is as follows:

```zenscript
// An array of recipe names as strings
var minecraftExclusions as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### Remove Recipes by Regex

`craftingTable.removeByRegex(regex);`

- `regex` &lt;string>

Removes all recipes that's name matches the regex string.

```zenscript
// Removes recipes such as "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", and "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Remove All Recipes

`craftingTable.removeAll();`

Removes all crafting table recipes.

```zenscript
craftingTable.removeAll();
```
