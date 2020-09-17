# NuclearCraft

**Nota:La doppia serie di parentesi nelle funzioni, `([...])` è necessaria.** Questo è fondamentalmente perché tutti i metodi NuclearCraft CraftTweaker richiedono una serie di oggetti, siano essi ingredienti, stringhe, interi o doppi.

Tutte le ricette coinvolgono cinque serie di informazioni - input dell'elemento, input del fluido, output dell'elemento, uscite del fluido e informazioni aggiuntive. I primi quattro sono chiaramente gli ingredienti e i prodotti coinvolti nella ricetta, e le informazioni extra contengono dati come tempo di elaborazione e potenza per le macchine, la vita di base, la variabile di energia e calore dei combo di fusione, ecc.

Tutte le parti della ricetta sono semplicemente elencate nel metodo - il codice interno NuclearCraft si occuperà di suddividere in quelle cinque categorie e confezionare le informazioni in una ricetta.

## Aggiunte Ricetta
I metodi di ricetta specificheranno `itemInput` per gli input di oggetto. <br/> I metodi della ricetta specificheranno `itemOutput` per gli output dell'articolo. <br/> I metodi di ricetta specificheranno `fluidInput` per gli input fluidi. <br/> I metodi di ricetta specificheranno `fluidOutput` per le uscite di fluido. <br/> I metodi di ricetta specificheranno `blockInput` per gli input di blocco. <br/> I metodi di ricetta specificheranno `blockOutput` per le uscite di blocco. <br/> **Nota: `blockInput` e `blockOutput` deve essere `IItemStack`/`IIngrediente` versioni di blocchi**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Ingressi Fluidi
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Input Blocco
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Blocca Uscite
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Rimozione Ricetta
Quando si specifica una ricetta da rimuovere, tutto ciò che è necessario è per specificare tutti gli ingredienti di input o di output. Non sono richiesti dati sulle possibilità degli ingredienti. Ancora una volta, gli elementi devono venire per primi, seguiti dai fluidi.

Potresti anche voler rimuovere tutto di un certo tipo di ricetta - per fare questo, basta usare il metodo `removeAllRicette()`.

## Probabilità Ingredienti
Gli output di elemento e fluido possono avere ulteriori informazioni attaccate a loro - in particolare, informazioni che possono randomizzare la dimensione dello stack di uscita in qualche modo. Questa informazione aggiuntiva è semplicemente contrassegnata alla fine dell'ingrediente specificato. <br/>

La dimensione dello stack prodotto su ogni processo viene assegnata in modo casuale da una distribuzione binomiale specificata dalla possibilità informazioni. La percentuale e la dimensione dello stack degli ingredienti giocano i ruoli della probabilità e del numero di prove, rispettivamente. <br/>

Per ChanceFluidStacks, deve essere specificata anche una 'differenza di pila', che determina la differenza di dimensione tra le pile possibili (per ChanceItemStack e ChanceOreStacks, questo è effettivamente 1). Ad esempio, un ChanceFluidStack per un ingrediente di dimensione 500, con una differenza dello stack di 150 e dimensioni minime dello stack di 50, produrrà 50, 200, 350 o 500 millibuckets del fluido.

### ChanceItemStack
La forma di un `ChanceItemStack` è `IItemStack output, int percentage, @Optional int minimumStackSize`. <br/> La possibilità di produrre l' `output` è `percentuale`. <br/> Se non specificato, `minimumStackSize` è 0.

### ChanceOreDictEntry
La forma di un `ChanceOreDictEntry` è `IOreDictEntry output, int percentage, @Optional int minimumStackSize`. <br/> La possibilità di produrre l' `output` è `percentuale`. <br/> La dimensione minima dello stack per l'output è `minimumStackSize`. Se non specificato, il valore predefinito è 0.

### ChanceLiquidStack
La forma di un `ChanceLiquidStack` è `ILiquidStack, int percentage, int stackDifference, @Optional int minimumStackSize`. <br/> La possibilità di produrre l'output è `percentuale`. <br/> La differenza tra le possibili dimensioni dello stack è `stackDifference`. La dimensione minima dello stack per l'output è `minimumStackSize`. Se non specificato, il valore predefinito è 0.

- Esempio: ``<liquid:ethanol>` * 500, 100, 150, 50
    - La macchina produrrà 50, 200, 350 o 500 millibuckets di etanolo