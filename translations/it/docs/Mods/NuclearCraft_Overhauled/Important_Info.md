# NuclearCraft: Modificato

Tutte le ricette coinvolgono cinque serie di informazioni - input dell'elemento, input del fluido, output dell'elemento, uscite del fluido e informazioni aggiuntive. I primi quattro sono chiaramente gli ingredienti e i prodotti coinvolti nella ricetta, e le informazioni extra contengono dati come tempo di elaborazione e potenza per le macchine, tempo di esaurimento di base, gene di calore, efficienza, criticità e livello di radiazione di combustibili di fissione solidi, ecc.

Tutte le parti della ricetta sono semplicemente elencate nel metodo - il codice NC interno si occuperà di suddividere in quelle cinque categorie e confezionare le informazioni in una ricetta.


## Probabilità Ingredienti

Gli output di elemento e fluido possono avere ulteriori informazioni attaccate a loro - in particolare, informazioni che possono randomizzare la dimensione dello stack di uscita in qualche modo. Questa informazione aggiuntiva è data utilizzando gli 'ingredienti della possibilità' di NC.

La dimensione dello stack prodotto su ogni processo viene assegnata in modo casuale da una distribuzione binomiale specificata dalla possibilità informazioni. La percentuale e la dimensione dello stack degli ingredienti giocano i ruoli della probabilità e del numero di prove, rispettivamente. Si può anche specificare una dimensione minima dello stack - senza questo, la dimensione minima dello stack è semplicemente 0.

Per ChanceFluidIngredients deve anche essere specificata una 'differenza di pila', che determina la differenza di dimensione tra le possibili pile (per ChanceItemIngredients, questo è effettivamente 1). Ad esempio, un ChanceFluidIngredient per un ingrediente di dimensione 500, con una differenza dello stack di 150 e dimensioni minime dello stack di 50, produrrà 50, 200, 350 o 500 millibuckets del fluido.

**Nota: `ChanceItemIngredient` and `ChanceFluidIngredient` count as `IIngredient` for the purpose of recipes in NuclearCraft: Overhauled**

### ChanceItemIngredient

#### Creazione

```zenscript
mods.nuclearcraft.ChanceItemIngredient.create(IIngrediente ingrediente, int chancePercent, @Optional int minStackSize);
```

#### Esempi

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Metodi Extra

```zenscript
IIngrediente getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### ChanceFluidIngredient
Questi possono essere utilizzati ovunque venga utilizzato il normale `ILiquidStack`.

#### Creazione
```zenscript
mods.nuclearcraft.ChanceFluidIngredient.create(IIngrediente ingrediente, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### Esempi
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Metodi Extra
```zenscript
IIngrediente getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Aggiunte Ricetta
I metodi di ricetta specificheranno `itemInput` per gli input di oggetto. <br/> I metodi della ricetta specificheranno `itemOutput` per gli output dell'articolo. <br/> I metodi di ricetta specificheranno `fluidInput` per gli input fluidi. <br/> I metodi di ricetta specificheranno `fluidOutput` per le uscite di fluido. <br/> I metodi di ricetta specificheranno `blockInput` per gli input di blocco. <br/> I metodi di ricetta specificheranno `blockOutput` per le uscite di blocco. <br/> **Nota: `blockInput` e `blockOutput` deve essere `IItemStack`/`IIngrediente` versioni di blocchi**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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
