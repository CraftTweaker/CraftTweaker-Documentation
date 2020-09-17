# IItemStack

Un oggetto IItemStack è costituito da una definizione di [elementi](/Vanilla/Items/IItemDefinition/), un valore meta/danno e dati NBT.  
In altre parole, si riferisce a un elemento o a un blocco.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.IItemStack;`

## Calling an IItemStack

Ci sono diversi metodi che restituiscono un IItemStack

* Utilizzando il [bracket Handler](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Utilizzando il metodo `makeStack()` su un [IItemDefinition](/Vanilla/Items/IItemDefinition/) object `<minecraft:stone>.definition.makeStack(0)`
* Utilizzando lo stack `` getter su un oggetto [IEntityDrop](/Vanilla/Entities/IEntityDrop/)
* Usando il `firstItem` getter su un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

Se si chiamano queste funzioni, molto probabilmente lo farai per iterare attraverso le liste/Array risultanti

* Utilizzando il metodo `items` su un [IIngredient](/Vanilla/Variable_Types/IIngredient/) restituisce un IItemStack List: `<ore:ingotGold>.items`
* Usando il metodo `itemArray` su un [IIngrediente](/Vanilla/Variable_Types/IIngredient/) restituisce un IItemStack[]: `<ore:ingotGold>.itemArray`
* Utilizzando il metodo `items` su un oggetto [IMod](/Vanilla/Game/Mods/#imod) restituisce un IItemStack[]: `caricatoMods["minecraft"].items`

## Funzioni

Cosa possiamo fare con questo adesso?

### Estensione Di IIngrediente

IItemStack estende [IIngrediente](/Vanilla/Variable_Types/IIngredient/).  
Ciò significa che tutte le funzionalità disponibili per gli oggetti [IIngrediente](/Vanilla/Variable_Types/IIngredient/) sono applicabili anche a IItemStacks. <details><summary>Metodi Derivati</summary> 

* stack.mark
* stack.amount
* stack.items
* stack.itemArray
* stack.liquids
* stack.commandString
* pila <unk> otherIngredient
* stack.or(otherIngredient)
* stack.transform([transformer](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([transformer](/Vanilla/Items/Item_Transformers/))
* stack.only([condition](/Vanilla/Items/Item_Conditions/))
* stack.marked(mark)
* stack.matches(oggetto)
* stack.matchesExact(item)
* stack.matches(liquido)
* stack ha ingrediente
* stack.applyTransform(stack,player)
* stack.hasTransformers()</details>

### ZenGetters/ZenSetters

Leggi come usarli [qui](/UsingThisWiki/). Anche, controllare gli esempi qui sotto.

| ZenGetter/ZenMethod | ZenSetter/ZenMethod | Tipo                                                        |
| ------------------- | ------------------- | ----------------------------------------------------------- |
| definizione         |                     | [IItemDefinition](/Vanilla/Items/IItemDefinition/)          |
| nome                |                     | stringa                                                     |
| displayName         | displayName         | stringa                                                     |
| maxStackSize        | maxStackSize        | int                                                         |
| durezza             | durezza             | galleggiante                                                |
| danno               |                     | int                                                         |
| maxDamage           | maxDamage           | int                                                         |
| hasTag              |                     | bool                                                        |
| tag                 | withTag(tag)        | [IData](/Vanilla/Data/IData/)                               |
| ores                |                     | List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>    |
| toolClasses         |                     | Elenco<string\>                                            |
| itemEnchantability  |                     | int                                                         |
| containerItem       |                     | IItemStack                                                  |
| hasContainerItem    |                     | bool                                                        |
| riparazioneCosto    | riparazioneCosto    | int                                                         |
| canEditBlocks       |                     | bool                                                        |
| isOnItemFrame       |                     | bool                                                        |
| isEnchantable       |                     | bool                                                        |
| isEnchanted         |                     | bool                                                        |
| isDanneggiato       |                     | bool                                                        |
| isDamageable        |                     | bool                                                        |
| isItemBlock         |                     | bool (se l'elemento contenuto è un itemblock)               |
| isStackable         |                     | bool                                                        |
| isBeaconPayment     |                     | bool                                                        |
| hasEffect           |                     | bool                                                        |
| hasDisplayName      |                     | bool                                                        |
| metadati            |                     | int                                                         |
| hasSottotipi        |                     | bool                                                        |
| isEmpty             |                     | bool                                                        |
| burnTime            |                     | int                                                         |
| showsDurabilityBar  |                     | bool                                                        |
| hasCustomEntity     |                     | bool                                                        |
| incantesimi         |                     | Lista<[Incantesimo](/Vanilla/Enchantments/IEnchantment/)\> |
| matchTagExact       |                     | bool                                                        |

#### Importo

| Chiamata metodo                 | Restituzioni                                                     | ParameterTypes |
| ------------------------------- | ---------------------------------------------------------------- | -------------- |
| `stack.anyAmount()`             | Un nuovo IItemStack con la proprietà modificata                  |                |
| `stack.amount(int importo)`     | Un nuovo IItemStack con la proprietà modificata                  | int            |
| `stack.withAmount(int amount)`  | Un nuovo IItemStack con la proprietà modificata                  | int            |
| `stack * amount`                | Un nuovo IItemStack con la proprietà modificata                  | int            |
| `stack.splitStack(int importo)` | La divisione IItemStack. Il vecchio sarà ridotto di conseguenza. | int            |

#### Peso

| Chiamata metodo                          | Restituzioni                                             | ParameterTypes     |
| ---------------------------------------- | -------------------------------------------------------- | ------------------ |
| `stack.percent(galleggiante)`            | A [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (100 = 100%) |
| `stack.weight(galleggiante probabilità)` | A [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)   |

#### Danno

| Chiamata metodo                                | Restituzioni                                    | ParameterTypes                             |
| ---------------------------------------------- | ----------------------------------------------- | ------------------------------------------ |
| `stack.anyDamage()`                            | Un nuovo IItemStack con la proprietà modificata |                                            |
| `stack.withDamage(int danni)`                  | Un nuovo IItemStack con la proprietà modificata | int                                        |
| `stack.damageItem(int amount, IEntity entity)` | vuoto (nulla)                                   | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### Etichette

| Chiamata metodo                                  | Restituzioni                                    | ParameterTypes                      |
| ------------------------------------------------ | ----------------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | Un nuovo IItemStack con la proprietà modificata |                                     |
| `stack.withTag(IData tag)`                       | Un nuovo IItemStack con la proprietà modificata | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData tag, bool matchTagExact)`   | Un nuovo IItemStack con la proprietà modificata | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(nome stringa)`                  | Un nuovo IItemStack con la proprietà modificata | stringa                             |
| `stack.updateTag(IData tag)`                     | Un nuovo IItemStack con la proprietà modificata | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData tag, bool matchTagExact)` | Un nuovo IItemStack con la proprietà modificata | [IData](/Vanilla/Data/IData/), bool |

#### Casting A Blocchi

| Chiamata metodo     | Restituzioni                                        |
| ------------------- | --------------------------------------------------- |
| `stack.asBlock()`   | Un nuovo oggetto [IBlock](/Vanilla/Blocks/IBlock/). |
| `stack come IBlock` | Un nuovo oggetto [IBlock](/Vanilla/Blocks/IBlock/). |

#### Lore/DisplayName

| Chiamata metodo                       | Restituzioni                                                                                                                            | ParameterTypes                              |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `stack.withDisplayName(nome stringa)` | Un nuovo IItemStack con la proprietà modificata. A differenza del displayName setter, questo si applica solo a questo singolo elemento. | stringa (supporta i codici colore con "§")  |
| `stack.withLore(String[] lore)`       | Un nuovo IItemStack con la proprietà modificata.                                                                                        | string[] (supporta i codici colore con "§") |
| `stack.clearCustomName()`             | vuoto (nulla)                                                                                                                           |                                             |

#### Incantesimi

| Chiamata metodo                                                     | Restituzioni  | ParameterTypes                                                                       |
| ------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition enchantment)` | Un bool.      | [Definizione IEnchantmentDefinizione](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addEnchantment(IEnchantment enchantment)`                    | vuoto (nulla) | [IEnchantment](/Vanilla/Enchantments/IEnchantment/)                                  |

#### canItem...

| Chiamata metodo                                    | Restituzioni                                                            | ParameterTypes                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------- |
| `stack.canPlaceOn(IBlockDefinition block)`         | Un branco che dice se l'oggetto può essere posizionato sul blocco.      | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(IBlockDefinition block)`         | Un branco che dice se l'oggetto può distruggere il blocco.              | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(IBlockState block)`         | Un branco che dice se l'oggetto può raccogliere il blocco.              | [IBlockState](/Vanilla/Blocks/IBlockState/)           |
| `stack.getStrengthagainstBlock(IBlockState block)` | Un galleggiante che rappresenta la forza dell'oggetto contro il blocco. | [IBlockState](/Vanilla/Blocks/IBlockState/)           |

#### create IEntityItem

| Chiamata metodo                                              | Restituzioni                                                                                               | Tipi Di Parametri                                                        |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | Un nuovo [IEntityItem](/Vanilla/Entities/IEntityItem/) che corrisponde all'oggetto appena creato nel mondo | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | Un nuovo [IEntityItem](/Vanilla/Entities/IEntityItem/) che corrisponde all'oggetto appena creato nel mondo | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## ProdottoTrasformatori e ArticoloCondizioni

Puoi trovare come usarli nella pagina [IIngrediente](/Vanilla/Variable_Types/IIngredient/) o nelle loro voci di respeciva:  
[Condizioni Articolo](/Vanilla/Items/Item_Conditions/)  
[Trasformatori Item](/Vanilla/Items/Item_Transformers/)

## Esempi

#### DisplayName

Globalmente (traduce l'elemento nel nuovo nome).

```zenscript
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Imposta il nome visualizzato delle mele a "Tomato"
apple. isplayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
```

Localmente (solo questo singolo oggetto).

```zenscript
<minecraft:coal>.withDisplayName("Oro Nero");
```

#### Lore

`<minecraft:coal>.withLore(["Questa funzione","richiede un","string[]"]);`

#### Dimensione Massima Pila

La dimensione massima dello stack è quanti oggetti si adattano in una pila, per esempio, la dimensione dello stack della lana è 64 e Buckets’ solo 16.

```zenscript
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//prints 64
print(mela. axStackSize);

//imposta le mele Max Stack size a 32
apple.maxStackSize = 32;

//prints 32
print(mela. axStackSize);

//imposta le mele Dimensione massima dello stack del Bucket Dimensione massima dello stack
apple.maxStackSize = bucket.maxStackSize;

//prints 16
print(apple.maxStackSize);
```

#### Durezza

La Durezza è quanto tempo ci vuole per rompere il blocco di riferimento. Funziona solo se l'oggetto si riferisce a un blocco.

```zenscript
erba vasale = <minecraft:grass>;

//prints 1.0
print(grass.durezza);

//set erba Durezza fino a 10.0
grass.durezza = 10.0;

//prints 10.0
print(grass.durezza);
```

#### Danno

Il danno per gli oggetti che non possono essere danneggiati è 0.

```zenscript
val pick = <minecraft:diamond_pickaxe>;

//prints 1561
print(pick. axDamage);

//imposta il danno massimo del piccone di diamante a 256
pick.maxDamage = 256;

//prints 256
print(pick. axDamage);



//Il danno non importa, utilizzato nelle ricette
<minecraft:iron_pickaxe>.anyDamage();

//Con il danno dato
<minecraft:iron_pickaxe>.withDamage(122);
```

#### Tag

The tag is an [IData](/Vanilla/Data/IData/) object.  
If the item does not contain a tag, it will return an empty tag, never null.

```zenscript
//crea mela con il tag specificato
//Rimuove i tag esistenti
<minecraft:apple>. ithTag({Unbreakable: 1});

//crea mela con un tag emtpy
<minecraft:apple>. ithEmptyTag();

//rimuove un tag con il suo nome
elemento. emoveTag("tagName");

//update the existing tag
//If the tag doesn't override an existing tag, they will stay constant.
item.updateTag({Unbreakable: 1});
```

#### Liquido

Restituisce il liquido contenuto in un singolo elemento (se multiplo) o nullo se l'elemento non è contenitore.  
Restituisce un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Oggetto o null.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Importo

Quante mele ci sono?

```zenscript
<minecraft:apple>. nyAmount();

//1 Apple
val apple = <minecraft:apple>;

//2 Mele
val moreMele = mela * 2;

//3 Mele
val evenMoreApples = <minecraft:apple> * 3;
```

#### Peso

Restituisce un [weightedItemStack](/Vanilla/Items/WeightedItemStack/) con la percentuale fornita.

```zenscript
val mela = <minecraft:apple>;

//Crea un pesoItemStack con 100 percento di possibilità
var applePercentuale = mela % 100;

//Fa lo stesso di quanto sopra
mela Percentuale = mela. ottanta (1,0);
```

#### Ores

Restituisce una lista di [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) riferendosi a questo elemento.

```zenscript
<minecraft:apple>.ores;
```

#### Casting su IBlock

Puoi lanciare un IItemStack su un [IBlock](/Vanilla/Blocks/IBlock/), fintanto che ti riferisci a un blocco, altrimenti il cast lancerà un'eccezione.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> come crafttweaker.block.IBlock;
```

Puoi anche testare se un IItemStack contiene un ItemBlock e può quindi essere convertito:

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Proprietà Cibo

È possibile controllare se un IItemStack è un prodotto alimentare e quali proprietà alimentari ha.  
Potrebbe non funzionare per ogni oggetto alimentare in modus!

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```