# Mixer Di Plastica

Il mixer di plastica è una macchina con due funzioni:

* Solidificare il liquido di plastica liquida in lastre di plastica solide, utilizzando coloranti rossi, verdi e blu per colorare i fogli.
* Per fondere fogli di plastica solidi in plastica liquida. Ciò richiede una temperatura minima di 150°C (423K).

Il supporto CraftTweaker aggiunge la capacità di specificare qualsiasi elemento e combinazione liquida per scopi di fusione e/o solidificazione. È possibile specificare che gli elementi devono essere solo fusi, i fluidi devono essere solidificati o consentire un processo bidirezionale.

Mentre la solidificazione oggetto può essere qualsiasi oggetto, è più opportuno utilizzare oggetti colorabili qui, poiché i coloranti sono sempre utilizzati, indipendentemente dal fatto che l'oggetto in uscita sia o meno colorabile.

## Chiamata

È possibile chiamare il pacchetto Mixer di plastica utilizzando `mods.pneumaticcraft.plasticmixer`.

## Rimozione

Questa funzione rimuove la prima ricetta che trova con il dato [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `input`:

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack fluido);
// Esempio
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

Questa funzione rimuove *tutte le* ricette del mixer plastico:

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRicette();
```

## Aggiunta

Le seguenti funzioni possono essere utilizzate per aggiungere ricette al TPP:

```zenscript
// Aggiungi una ricetta a due vie (temperatura in Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, IItemStack stack, int temperature);

// Aggiungi una ricetta che consente solo la solidificazione
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(ILiquidStack liquidInput, IItemStack itemOutput);

// Aggiungi una ricetta che permette di fondere solo (temperatura in Kelvin)
mods.pneumaticcraft.plasticmixer. ddMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Esempio: converte 100mB Lava a/da calcestruzzo (fondere a 573K)
mods. neumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Esempio: convertire l'olio 2000mB in plastica (ma non consentire la fusione indietro)
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Esempio: convertire Plastica in Olio 100mB a 473K (ma non consentire solidificazione)
mods. neumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```