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

Le funzioni ricetta possono essere assegnate ad una variabile, cosicché possano essere utilizzate facilmente in più ricette.

Informe:

```zenscript
import crafttweaker.api.item.IItemStack;

var funzioneRicettaDiEsempioPerRicettaInforme as function(solitoProdotto as IItemStack, ingredienti as IItemStack[]) as IItemStack = (solitoProdotto, ingredienti) => {
    if(ingredienti[0].displayName == "vero blocco di diamante"){
        return solitoProdotto;
    }

    return <item:minecraft:clay>.setDisplayName("Diamante");
};

// ingredienti[0] per funzioneRicettaDiEsempioPerRicettaInforme sarà <item:minecraft:dirt>
craftingTable.addShapeless("esempio_funzione_ricetta_in_variabile_informe_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], funzioneRicettaDiEsempioPerRicettaInforme);

// ingredienti[0] per funzioneRicettaDiEsempioPerRicettaInforme sarà <item:minecraft:cobblestone>
craftingTable.addShapeless("esempio_funzione_ricetta_in_variabile_informe_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], funzioneRicettaDiEsempioPerRicettaInforme);
```

Con forma (riflessa):

```zenscript
import crafttweaker.api.item.IItemStack;

var funzioneRicettaDiEsempioPerRicettaConForma as function(solitoProdotto as IItemStack, ingredienti as IItemStack[][]) as IItemStack = (solitoProdotto as IItemStack, ingredienti as IItemStack[][]) => {
    var contatore = 0;
    // Controlla che tutte le <item:minecraft:clay_ball> abbiano come nome "Diamante"
    for riga in ingredienti {
        for oggetto in riga {
            if (<item:minecraft:clay_ball>.matches(oggetto) && recipeItem.displayName == "Diamante") {
                // Se l'oggetto nella ricetta è <item:minecraft:clay_ball> e ha come nome "Diamante", incrementiamo il contatore
                contatore++;
            }
        }
    }

    // Se ci sono 8 <item:minecraft:clay_ball> aventi come nome "Diamante"
    if (contatore == 8) {
        if (inputs[1][1].displayName == "Diamante Speciale") {
            // Se <item:minecraft:diamond> ha come nome "Diamante Speciale"
            // Ritorna 2 <item:minecraft:diamond_block>
            return solitoProdotto * 2;
        } else {
            // Ritorna <item:minecraft:diamond_block>
            return solitoProdotto;
        }
    }

    // Altrimenti, ritorna <item:minecraft:clay> avente come nome "Blocco di Diamante"
    return <item:minecraft:clay>.setDisplayName("Blocco di Diamante");
};

craftingTable.addShaped("esempio_funzione_ricetta_in_variabile_con_forma_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], funzioneRicettaDiEsempioPerRicettaConForma);

craftingTable.addShaped("esempio_funzione_ricetta_in_variabile_con_forma_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], funzioneRicettaDiEsempioPerRicettaConForma);
```

## Rimuovere una RIcetta

### Rimuovere una Ricetta in base al Nome

`craftingTable.removeByName(nomeRicetta);`

- `nomeRicetta` &lt;string>

Rimuove la ricetta che ha come nome il valore dato.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Rimuovere Ricette in base al Prodotto

`craftingTable.removeRecipe(prodotto);`

- `prodotto` <[IItemStack](/vanilla/api/items/IItemStack)>

Rimuove tutte le ricette il cui prodotto è l'[IItemStack](/vanilla/api/items/IItemStack) dato.

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Rimuovere Ricette in base all'ID Mod

`craftingTable.removeByModid(idMod);`

- `idMod` &lt;string>

Rimuove tutte le ricette aggiunte dalla mod data.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Escludere Ricette dalla Rimozione per ID Mod

`craftingTable.removeByModid(idMod, filtroEsclusione);`

- `idMod` &lt;string>
- `filtroEsclusione` <[RecipeFilter](/vanilla/api/recipe/RecipeFilter)>
  - `nome` &lt;string> Il nome della ricetta per un eventuale filtraggio. _L'ID mod non è incluso_

Rimuove tutte le ricette aggiunte dalla mod data. Le ricette vengono escluse se il risultato di filtroEsclusione è vero (true) in base al nome della ricetta.

```zenscript
craftingTable.removeByModid("minecraft", (nome) => {
    // Controlla se il nome della ricetta corrisponde a "minecraft:red_bed_from_white_bed"
    return nome == "red_bed_from_white_bed";
});
```

È possibile escludere più di una ricetta. Un modo di farlo è presentato nel seguente esempio:

```zenscript
// Un vettore di nomi di ricette rappresentati come stringhe
var esclusioniMinecraft as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (npme) => {
    return nome in esclusioniMinecraft;
});
```

### Rimuovere Ricette in base ad una Regex

`craftingTable.removeByRegex(regex);`

- `regex` &lt;string>

Rimuove tutte le ricette il cui nome può essere identificato dalla regex (espressione regolare) data.

```zenscript
// Rimuove ricette come "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", e "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:*_carpet");
```

### Rimuovere Tutte le Ricette

`craftingTable.removeAll();`

Rimuove tutte le ricette dal banco da lavoro.

```zenscript
craftingTable.removeAll();
```
