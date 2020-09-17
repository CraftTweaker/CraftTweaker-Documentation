# Creazione Di Esplosioni

La creazione di esplosioni viene utilizzata per trasformare un oggetto in un altro esponendolo a un'esplosione quando si tratta di un oggetto a terra. Può essere specificato un tasso di perdita configurabile (casuale). Per impostazione predefinita, questo viene utilizzato per convertire lingotti di ferro in lingotti di ferro compresso con un tasso di perdita del 20%.

## Chiamata

Puoi chiamare il pacchetto di Creazione di Esplosioni usando `mods.pneumaticcraft.explosioncrafting`

## Rimozione

Questa funzione rimuove la prima ricetta che trova con l'output [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dato`:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(IIngredient output);
// Example
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

Questa funzione rimuove *tutte le* ricette di creazione di esplosioni:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRicette();
```

## Aggiunta

Queste funzioni sono usate per aggiungere nuove ricette di Creazione di Esplosioni:

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(IItemStack input, IItemStack output, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(IOreDictEntry input, IItemStack output, int loss_rate);

// Esempio
mods. neumaticcraft.explosioncrafting.removeAllRicette();
// Un pacchetto di modo esperto potrebbe rendere il ferro normale una scelta molto povera, e acciaio molto meglio.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting. ddRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// Un modo per fare un sacco di mattoni del Nether per (in media) 4x il costo di ^ rack
mods. neumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```