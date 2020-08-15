# Raffineria

La raffineria è una struttura multiblock che utilizza il calore per convertire un fluido di ingresso in due o più fluidi di uscita. Il multiblock è costituito da due o quattro blocchi di raffineria (inclusi), e il numero di possibili fluidi in uscita è limitato dal numero di blocchi di raffineria presenti nella struttura.

Prima di PneumaticCraft: Repressurized v0.9.0, la temperatura minima per qualsiasi ricetta di raffineria (cioè la temperatura alla quale inizia il procesing) era sempre 373K, o 100°C. Tuttavia, in v0.9.0 e successivamente, è possibile specificare una temperatura minima quando si aggiunge una ricetta di raffineria.

La raffineria inizierà a lavorare fluidi alla temperatura minima della ricetta e funzionerà più velocemente con l'aumento della temperatura.

Si noti che è possibile avere due o più ricette con lo stesso input, purché il numero di uscite sia diverso. In questo caso, verrà utilizzata la ricetta che produce le uscite più possibili (dato il numero di blocchi di raffineria nel multiblock).

## Chiamata

È possibile chiamare il pacchetto raffineria utilizzando `mods.pneumaticcraft.refinery`.

## Rimozione

Questa funzione rimuove la prima ricetta che trova che corrisponde a tutti gli output [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `forniti`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] uscite);
```

Questa funzione rimuove la prima ricetta che trova che corrisponde all'input [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dato`:

```zenscript
mods.pneumaticcraft.refinery.removeRicette (Ingresso IIngrediente);
```

Questa funzione rimuoverà *tutte le* ricette di raffineria:

```zenscript
mods.pneumaticcraft.refinery.removeAllRicette();
```

## Aggiunta

Queste funzioni aggiungono una nuova ricetta alla raffineria:

```zenscript
// Aggiungi una ricetta con la temperatura minima predefinita di 373K (100°C)
mods.pneumaticcraft.refinery. ddRecipe(ILiquidStack input, ILiquidStack[] outputs);

// (v0.9.0+ richiesto) Aggiungi una ricetta con una data temperatura minima
mods. neumaticcraft.refinery. ddRecipe(int minimumTemperatura, ILiquidStack input, ILiquidStack[] output);


// Esempio: entrambe le ricette usano l'acqua come input
// La prima ricetta sarà utilizzata in una raffineria di 2 blocchi
mods. neumaticcraft.refinery. ddRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// La seconda ricetta sarà utilizzata in una raffineria a 3 o 4 blocchi,
// e richiede anche una temperatura minima di 473K, o 200°C
mods. neumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```