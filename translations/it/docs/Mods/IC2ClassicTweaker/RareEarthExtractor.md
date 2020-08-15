# Estrattore Raro Della Terra

## Pacchetto

```zenscript
import mods.ic2.RareEarthExtractor;
```

## Metodo

- **valore float**
- **[IItemStack](/Vanilla/Items/IItemStack/)... ingressi** Può avere più di uno specificato per l'ingresso. Se così tutti gli elementi specificati danno lo stesso valore specificato.

### Aggiungi Voci Rare Della Terra

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(valore galleggiante, IItemStack... input);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```