# Lightwell

È possibile aggiungere e rimuovere Liquefications Lightwell

## Chiamata

Puoi chiamare il pacchetto WellRecipe usando `mods.astralsorcery.Lightwell`.

## Rimozione

Questa funzione rimuove la prima ricetta che trova che restituisce l'output [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fornito` utilizzando l'input [IItemStack](/Vanilla/Items/IItemStack/) `` fornito . Se ci sono più ricette che restituiscono l'output fornito, è necessario chiamare questo metodo più volte!

È possibile impostare l'output su `null` per cercare solo tramite lo stack di input

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack output);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Addizione

```zenscript
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Parametro             | Tipo Parametro                                 | Descrizione                                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input                 | [IItemStack](/Vanilla/Items/IItemStack/)       | La voce di input                                                                                                                                                                                              |
| output                | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Il Liquido restituito. Solo il tipo di fluido conta, la quantità (come il faro predefinito) dipenderà da cose come giorno/notte e così via…                                                                   |
| outputMultiplier      | galleggiante                                   | Moltiplicatore che viene applicato insieme alla luce stellare raccolta per calcolare la quantità di fluido in uscita. Di solito 0.3 - 1.2 (alias: non scrivere come 200 qui, se vuoi rimanere ragionevole :P) |
| shatterMoltiplicatore | galleggiante                                   | Più alto è questo moltiplicatore, minore è la possibilità che l'elemento catalizzatore frantumi.                                                                                                              |
| colorHEX              | int                                            | Il codice colore usato per le particelle intorno all'elemento di hovering.                                                                                                                                    |