# Calderone

La confezione di Cauldron viene utilizzata per aggiungere/rimuovere ricette per il calderone. Nota che se il calderone è impostato su `simple` nella configurazione, solo le ricette che utilizzano l'acqua saranno in grado di essere realizzate, ma tutte le ricette saranno ancora mostrate in JEI.

## Chiamata

Puoi chiamare il pacchetto Cauldron usando `mods.inspirations.Cauldron`

## Fluidi

Le ispirazioni presentano tre tipi di ricette utilizzando fluidi: quelle per trasformare un elemento utilizzando un fluido, quelli per trasformare un fluido utilizzando un oggetto, e quelli per aggiungere riempire con un fluido utilizzando un oggetto. Mentre tutti i gestori assumono una pila fluida, solo il tipo di fluido influenzerà la ricetta. Ispirazioni calderoni utilizzare il sistema di vaniglia di tre bottiglie in un calderone così le quantità vengono maneggiate in un altro parametro.

### Aggiunta di fluidi

Aggiunge una ricetta convertendo l'elemento di input all'oggetto di output usando il fluido.

* L'elemento in ingresso supporta le dimensioni dello stack per richiedere che la stack tenuta sia una certa dimensione.
* I livelli determinano quanti livelli vengono consumati dalla ricetta. Supporta 0-3, predefinito 1
* La bollitura determina se il calderone deve essere posto sopra il fuoco per la ricetta. Può essere vero per richiederlo, falso per richiedere di non avere fuoco, o null (default) per ignorarlo.

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(IItemStack output, IIngredient input, ILiquidStack fluid, @Optional int levels @Optional boolean boiling);
mods.inspirations. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Rimozione di fluidi

Rimuove una ricetta fluida esistente dal calderone.

```zenscript
//mods.inspirations.Cauldron.removeFluidRecipe(IIngredient output, @Optional IIngredient input, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Aggiunta trasformazione fluido

Aggiunge una ricetta che converte il fluido nel fluido di uscita usando l'oggetto.

* L'elemento in ingresso supporta le dimensioni dello stack per richiedere che la stack tenuta sia una certa dimensione.
* Il livello massimo determina la quantità massima di fluido consentita per questa trasformazione. Utilizzato per consentire alle ricette di avere una versione più economica se il calderone contiene meno fluido.
* La bollitura determina se il calderone deve essere posto sopra il fuoco per la ricetta. Può essere vero per richiederlo, falso per richiedere di non avere fuoco, o null (default) per ignorarlo.

```zenscript
//mods.inspirations.Cauldron.addFluidTransform(ILiquidStack output, IIngredient input, ILiquidStack fluid, @Optional int maxLevels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Rimozione trasformazione fluido

Rimuove una ricetta di trasformazione fluido esistente dal calderone. L'output è `IIngrediente` ma supporta solo una pila fluida o un jolly.

```zenscript
//mods.inspirations.Cauldron.removeFluidTransform(IIngredient output, [IIngredient input, [IFluidStack fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### Riempi l'aggiunta della ricetta

Aggiunge una ricetta riempiendo il calderone con il fluido fornito..

* L'elemento in ingresso supporta le dimensioni dello stack per richiedere che la stack tenuta sia una certa dimensione.
* I livelli determinano quanto la ricetta riempie il calderone. Il valore predefinito è 1 se non è fornito.
* Il contenitore determina l'oggetto restituito dopo aver eseguito questa ricetta. Se non viene fornito nessuno, non restituisce nulla.

```zenscript
//mods.inspirations.Cauldron.addFillRecipe(IIngredient input, ILiquidStack fluid, @Optional int levels @Optional IItemStack container);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.inspirations.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### Riempi rimozione ricetta

Rimuove una ricetta di riempimento esistente dal calderone.

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(IIngredient input, @Optional ILiquidStack fluid);
mods.inspirations.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.inspirations.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## Birra e pozioni

Le ispirazioni presentano due tipi di ricette di pozioni usando pozioni: preparare ricette che cambiano una pozione da un tipo ad un altro, e ricette di pozione che cambiano un oggetto usando una pozione.

Dal momento che le ricette assumono `PozioneTipo`invece di `Pozione`direttamente, i parametri di pozione sono stringhe. Un elenco di tutti i tipi di pozione può essere ottenuto usando il comando `/ct pozioni di ispirazioni`.

### Aggiunta della produzione

Aggiunge una ricetta che converte la pozione di ingresso nella pozione di uscita usando il reagente.

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(output String, input String, reagente IIngrediente);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### Rimozione della birra

Rimuove una ricetta di preparazione esistente dal calderone. Sia l'input che l'output possono essere impostati su nulla per agire come un jolly.

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Aggiunta ricetta pozione

Aggiunge una ricetta convertendo l'elemento di input all'oggetto di output usando la pozione.

* I livelli determinano quanti livelli vengono consumati dalla ricetta. Supporta 0-3, predefinito 1
* La bollitura determina se il calderone deve essere posto sopra il fuoco per la ricetta. Può essere vero per richiederlo, falso per richiedere di non avere fuoco, o null (default) per ignorarlo.

```zenscript
//mods.inspirations.Cauldron.addPotionRecipe(IItemStack output, IIngredient input, String poion, @Optional int levels @Optional boolean boiling);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### Rimozione ricetta pozione

Rimuove una ricetta di pozione esistente dal calderone. Per impostazione predefinita non esistono ricette di pozione ma gli addons possono aggiungere una ricetta.

```zenscript
//mods.inspirations.Cauldron.removePotionRecipe(IIngredient output, @Optional IIngredient input, @Optional String poion);
```

## Coloranti

Le ispirazioni sono dotate di un solo tipo di ricetta di tintura per trasformare un oggetto utilizzando un colorante. Le ricette di tintura assumono un colore di tintura che rappresenta un valore da `EnumDyeColor`. Per ottenere un elenco di tutti i valori, viene fornito il comando `/ct ispirazioni coloranti`.

### Aggiunta

Aggiunge una ricetta che converte l'input in uscita usando il colorante che consuma un unico livello di acqua tinta.

```zenscript
//mods.inspirations.Cauldron.addDyeRecipe(IItemStack output, IIngredient input, String dye);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Rimozione

Rimuove una ricetta di colorante esistente dal calderone.

```zenscript
//mods.inspirations.Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```