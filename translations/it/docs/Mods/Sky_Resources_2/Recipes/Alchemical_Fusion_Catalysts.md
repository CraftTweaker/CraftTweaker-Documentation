# Catalizzatori Alchemici A Fusione

Il pacchetto *catalizzatori* viene utilizzato per aggiungere o rimuovere catalizzatori per Alchemical Fusion.

## Chiamata

Puoi chiamare il pacchetto *catalizzatori* utilizzando `mods.skyresources.catalysts`

## Aggiunta Catalizzatore

```zenscript
//mods.skyresources.catalysts.add(IItemStack stack, float value);
mods.skyresources.catalysts.add(<minecraft:diamond>, 4.20);
```

## Rimozione Catalizzatore

```zenscript
//mods.skyresources.catalysts.remove(IItemStack output);
mods.skyresources.catalysts.remove(<skyresources:alchemyitemcomponent:2>);
```