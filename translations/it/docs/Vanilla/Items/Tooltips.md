# Suggerimenti

Aggiungere o rimuovere un suggerimento è davvero facile:  
Tutto quello che ti serve è un oggetto (o oreDict o simile), in altre parole, un IIngrediente.

## Suggerimenti per la cancellazione

Questo rimuove TUTTI i suggerimenti dall'elemento ``

```zenscript
item.clearTooltip();
```

## Rimozione di suggerimenti specifici

Questa funzione rimuove tutti i suggerimenti che corrispondono al regex dato. Un suggerimento è generalmente una riga di testo (a meno che non ci siano linebreaks forzati a causa dello spazio).

```zenscript
item.removeTooltip(regex);
```

`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` is a string

## Suggerimenti Normale

Questo aggiunge `tT` come suggerimento a `elemento`.

```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Storage, cosa posso dire di più?");
```

`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` is a string

## Suggerimenti Maiusc

Questo aggiunge un suggerimento, che sarà visibile solo quando tieni premuto lo spostamento.  
Puoi anche aggiungere un'informazione che sarà visibile quando non tieni premuto lo spostamento (solitamente usata per creare qualcosa di simile a un messaggio che ti dice sul suggerimento di spostamento).

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltip("ROSSO!!", "Tieni premuto shift per sapere cosa sono");
```

`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` is an [IFormattedText](/Vanilla/Utils/IFormattedText/). Puoi anche usare una stringa come convertita automaticamente.  
`info` è un [IFormattedText](/Vanilla/Utils/IFormattedText/). È anche possibile utilizzare semplicemente una stringa come vengono convertiti automaticamente.

# Markup

Il mondo è colorato, e così dovrebbe essere tutti i nostri suggerimenti. Si può anche nidare queste opzioni, se con a (se si voleva un testo verde, che è scioccato)

## Colorare una stringa

Puoi applicare uno dei 16 colori alla tua stringa

```zenscript
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
format. ray
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
format.yellow
format.white
```

```zenscript
<minecraft:stick>.addTooltip(format.green("Questo non era ripe"));
```

## Formattazione di una stringa

Puoi applicare diversi formati alla tua Stringa se:

```zenscript
format.obfuscated
format.bold
format.strikethrough
format.underline
format.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("Questo è un cattivo suggerimento"));
```

## Funzioni di suggerimento

È possibile sostituire il parametro [IFormattedText](/Vanilla/Utils/IFormattedText/) con un ITooltipFunction (`import crafttweaker.item. Funzione Tooltip;`).  
Queste funzioni consentono di generare dinamicamente un suggerimento basato su IItemStack dato.

Una funzione di suggerimento è una funzione che richiede un [IItemStack](/Vanilla/Items/IItemStack/) e restituisce il suggerimento come stringa. Ciò significa che l'utilizzo di un comando `format` *non funziona* per queste funzioni, dovrai fare affidamento sui prefissi di formattazione di Minecraft, se hai bisogno di farlo.

Per i suggerimenti degli strumenti di spostamento, è possibile fornire una seconda funzione pure, che consente di generare anche il suggerimento che dovrebbe essere mostrato quando lo spostamento non viene premuto. Per i suggerimenti di spostamento sono entrambi i parametri come funzione o entrambi come [IFormattedText](/Vanilla/Utils/IFormattedText/), nessun mix-up!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Example
<ore:myAxeOreDictionary>. dd(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>. ddAdvancedTooltip(function(item) {   
    return "Damage: " ~ item. amage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>. ddShiftTooltip(function(item) {    
    return "Uses left: " ~ (item. axDamage - item.damage);
}, function(item){
    return "Hold shift for some juicy math.";
});
```