# JEI

CraftTweaker è dotato di supporto per JustEnoughItems (JEI). È possibile aggiungere o nascondere elementi o fluidi in JEI o aggiungere una pagina Descrizioni per loro.

## Rimuovi

È possibile rimuovere l'oggetto da JEI o rimuoverlo e tutto è la creazione di ricette tavolo.

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI. ide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Nascondi Categorie

È possibile utilizzare questo per nascondere intere categorie JEI (es. ricette di creazione, ricette forno, ricette macchina X, ...).  
Accetta la categoria come stringa, puoi ottenere tutte le categorie registrate eseguendo `/ct jeiCategories` ingame.

```zenscript
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## Aggiungi Elemento

Puoi anche aggiungere un [IItemStack](/Vanilla/Items/IItemStack/) a JEI per aggiungere elementi che non sono stati aggiunti o per aggiungere un elemento con NBT-Tag a JEI

```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## Aggiungi Descrizione

Una descrizione JEI è una pagina extra mostrata quando si cerca la ricetta/utilizzo di un ingrediente in JEI che contiene informazioni su questo ingrediente.  
You can add a JEI Description to an [IItemStack](/Vanilla/Items/IItemStack/), an [IItemStack](/Vanilla/Items/IItemStack/)[], an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) or an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

Se le stringhe sono troppo lunghe per essere scritte su una riga (o pagina) creerà automaticamente interruzioni di riga/pagina.  
Ogni parametro stringa avrà almeno una riga e avvolgerà la fine della finestra se troppo lunga.

```zenscript
//addDescription(IItemStack item, stringa... disc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, stringa... disc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Mai","Gonna","Dai","Tu","Su","Mai","Gonna","Let","Tu","Giù"]);

//addDescription(IOreDictEntry dict, stringa... disc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "Puoi usarli per creare cose", "", "cose come l'Armatura","","","Sì...","Anche quello...");

//addDescription(ILiquidStack stack, stringa... disc);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

Il parametro `desc` è un varArg, che significa che puoi dare una stringa[] contenente tutte le stringhe di descrizione o molte stringhe singole, qualunque cosa preferisci. Semplicemente non mescolarli!