# Interazione Liquidazione

Il pacchetto liquidInteraction viene utilizzato per aggiungere interazioni liquide (come lava e luce a stella liquida) ai calici AS.

## Importazione del pacchetto

Se vuoi importare il pacchetto, qui vai:

```zenscript
import mods.astralsorcery.LiquidInteraction;
```

## Rimuovi interazione

Questa funzione rimuove la prima ricetta che trova che utilizza i [liquidi](/Vanilla/Liquids/ILiquidStack/) dati e restituisce l'output [stack](/Vanilla/Items/IItemStack/)dato.  
Se si esclude l'uscita, rimuoverà la prima ricetta che utilizza i due liquidi dati indipendentemente dalla loro uscita.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Aggiunta ricetta

Aggiunge un'interazione liquida alle interazioni calice-

[FluidStack](/Vanilla/Liquids/ILiquidStack/) amounts count as the amount of liquid that will be consumed if an interaction occurs.  
possibilità1 e possibilità2 definire le probabilità che i fluidi in ingresso input1 e input2 siano consumati rispettivamente.  
peso determina la probabilità che questo sia selezionato rispetto alle altre interazioni liquide registrate per una data coppia di input fluidi

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```