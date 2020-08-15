# Fermentatore

ModTweaker consente di aggiungere o rimuovere ricette Fermenter forestali

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.Fermenter`

## Rimozione Ricetta

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## Aggiunta Ricetta

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, IItemStack resource, ILiquidStack fluidInput, int fermentationValue, float fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

Quantità di flusso di liquidi: fermentazioneValore * fluidoOutputModifier

| Parametro           | Tipo                                           | descrizione                                           |
| ------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| fluidOutput         | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | L'output della Recipe's                               |
| risorsa             | [IItemStack](/Vanilla/Items/IItemStack/)       | L'input dell'oggetto della Recipe's                   |
| fluidInput          | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Input liquido del destinatario                        |
| fermentationValue   | int                                            | Quantità di inputFluido su elemento organico richiede |
| fluidOutputModifier | int                                            | Moltiplicatore di uscita                              |

## Rimozione Carburante

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## Aggiunta Di Carburante

```zenscript
//mods.forestry.Fermenter.addFuel(IItemStack item, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| Parametro       | Tipo                                     | Descrizione                                                                                       |
| --------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| elemento        | [IItemStack](/Vanilla/Items/IItemStack/) | Articolo per diventare un carburante valido per il fermentatore                                   |
| fermentPerCiclo | int                                      | Quanto viene fermentato per ciclo di lavoro, cioè quanto fluido viene consumato.                  |
| burnDuration    | int                                      | Quantità di cicli di lavoro un singolo elemento di questo combustibile dura prima della scadenza. |