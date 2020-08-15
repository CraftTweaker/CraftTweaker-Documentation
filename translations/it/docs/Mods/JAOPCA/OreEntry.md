# OreEntry

Un OreEntry è un materiale come oro, diamante, carbone, Redstone e così via.  
Puoi usarlo per ottenere diversi [OreDictEntries](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/).

## Metodi

In generale, i metodi prendono un parametro di stringa che è un prefisso da usare.  
Per esempio, un OreEntry per `"Gold"`, chiamato con il prefisso `"polvere"` restituirà Polvere d'oro.  
Per questi esempi, presumeremo che questo sia stato dichiarato:  
I commenti dopo le chiamate di esempio indicheranno ciò che la chiamata di metodo può restituire (a meno che nella categoria extra).

```zenscript
val oreEntry = mods.jaopca.JAOPCA.getOre("Gold");
```

### Ottieni proprietà voce

È possibile ottenere queste proprietà:

```zenscript
oreEntry.energyModifier; //1.0 as double
oreEntry.rarity; //1.0 as double
oreEntry.oreType; //"INGOT" as string
```

### Ottieni OreName o OreNameSinonimi

Il nome del minerale è essenziale come è registrato e quello che si utilizza in un getOre per recuperarlo.  
Il nome minerale sinonimi sono sinonimi che le mod o gli autori del pacchetto possono registrare per combinare due o più oreEntries (e. . "Alluminio" e "Alluminio"). La maggior parte delle oreEntries probabilmente non avrà nulla registrato, però. I sinonimi getter restituiranno una lista contenente tutti i sinonimi come stringe.

```zenscript
oreEntry.oreName; //"Gold"
oreEntry.oreNameSinonimi; //[]
```

### Ottieni IOreDictEntry

Restituisce un nuovo [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) con il prefisso specificato.

```zenscript
oreEntry.getOreDictEntry("polvere"); //<ore:dustGold>
```

### Get IItemStack

Restituisce un nuovo [IItemStacks](/Vanilla/Items/IItemStack/) che corrisponde al prefisso dato.  
Puoi fornire un prefisso alternativo di ripiego da usare se non viene trovato alcun oggetto corrispondente.

Se non viene trovato alcun elemento corrispondente e non viene trovato alcun elemento corrispondente utilizzando il prefisso di ripiego (se fornito), restituirà `null`.

```zenscript
//oreEntry.getItemStack(prefix);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); //null

//oreEntry.getItemStack(prefix, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid", "faulty"); //null
```

### Get ILiquidStack

Restituisce un nuovo [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) che corrisponde al prefisso dato.  
Puoi fornire un prefisso alternativo di ripiego da usare se non viene trovato alcun liquido corrispondente.

Se non viene trovato alcun liquido corrispondente e non viene trovato alcun liquido corrispondente utilizzando il prefisso di ripiego (se fornito), restituirà `null`.

```zenscript
//oreEntry.getLiquidStack(prefix);
oreEntry.getLiquidStack("molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); //null

//oreEntry.getLiquidStack(prefix, fallback);
oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid", "faulty"); //null
```

### Ottieni Extra

Una Voce può avere un extra registrato. Un extra può ad esempio essere un output secondario durante la polverizzazione di un minerale corrispondente.

È possibile controllare se una voce ha un extra, ottenere il extra (o `null` se non presente) o l'extraName.  
Puoi anche utilizzare gli stessi metodi di cui sopra (`getOreDictEntry`, `getLiquidStack` e `getItemStack`).

Ci sono fino a 3 extra che possono essere registrati. Per semplicità non ci saranno esempi per i metodi equivalenti, saranno solo indicati

```zenscript
//First extra
oreEntry.hasExtra; //true or false
oreEntry.extra; //matching oreEntry or null
oreEntry. xtraName; //il nome o null

//Methods for first extra
oreEntry. etOreDictEntryExtra(prefix);
oreEntry.getItemStackExtra(prefix);
oreEntry.getItemStackExtra(prefix, fallback);
oreEntry. etLiquidStackExtra(prefix);
oreEntry.getLiquidStackExtra(prefix, fallback);



//Second extra
oreEntry.hasSecondExtra; //true or false
oreEntry. econdExtra; //matching oreEntry or null
oreEntry.secondExtraName; //the name or null

//Methods for second extra
oreEntry.getOreDictEntrySecondExtra(prefix);
oreEntry. etItemStackSecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix, fallback);
oreEntry.getLiquidStackSecondExtra(prefix);
oreEntry.getLiquidStackSecondExtra(prefix, fallback);



//Third extra
oreEntry.hasThirdExtra; //true or false
oreEntry.thirdExtra; //matching oreEntry or null
oreEntry. hirdExtraName; //the name or null

//Methods for third extra
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix, fallback);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefix, fallback);
```