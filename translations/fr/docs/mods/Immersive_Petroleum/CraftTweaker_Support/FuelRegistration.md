# Enregistrement du carburant

## Inscrire le Carburant

| Nom      | Type de texte                               |
| -------- | ------------------------------------------- |
| Fluide/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t   | Nombre entier                               |

Exemple:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Using 180mB per Tick
```

## Enregistrer le Carburant Moto

| Nom      | Type de texte                               |
| -------- | ------------------------------------------- |
| Fluide/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Exemple:
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerboatFuel(IFluidStack carburant);

mods.immersivepetroleum.FuelRegistry.registerboatFuel(<fluid:minecraft:water> * 6); // Utilisation de 6mB par Tick
```
