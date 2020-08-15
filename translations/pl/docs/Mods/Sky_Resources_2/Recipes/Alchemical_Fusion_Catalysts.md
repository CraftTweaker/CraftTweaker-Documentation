# Katalizatory do syntezy alchemicznej

Pakiet *katalizatorów* jest używany do dodawania lub usuwania katalizatorów do syntezy alchemicznej.

## Dzwonienie

Możesz wywołać pakiet *katalizatorów* używając `mods.skyresources.catalysts`

## Dodanie katalizatora

```zenscript
//mods.skyresources.catalysts.add(IItemStack stack, wartość float);
mods.skyresources.catalysts.add(<minecraft:diamond>, 4.20);
```

## Usuwanie katalizatora

```zenscript
//mods.skyresources.catalysts.remove(wyjście IItemStack);
mods.skyresources.catalysts.remove(<skyresources:alchemyitemcomponent:2>);
```