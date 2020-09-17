# Riscaldamento

## Pacchetto
```zenscript
import mods.terrafirmacraft.Riscaldamento;
```

## Addizione

```zenscript
Riscaldamento.addRecipe(String registryName, IItemStack input, IItemStack output, float transformTemp, float maxTemp);
```
- transformTemp è a quale temperatura la ricetta trasforma completamente l'input in stack di uscita.
- maxTemp è alla quale la temperatura di ingresso viene distrutta. Per un riferimento completo, controlla [Temperature di riscaldamento](/Mods/Terrafirmacraft/HeatingTemperatures)

## Rimozione

```zenscript
Heating.removeRecipe(IItemStack output);
Heating.removeRecipe(String registryName);
```