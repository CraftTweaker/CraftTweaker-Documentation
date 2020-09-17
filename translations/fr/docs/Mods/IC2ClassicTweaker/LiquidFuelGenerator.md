# Générateur de carburant liquide

## Paquet

```zemscript
Importer mods.ic2.LiquidFuelGenerator ;
```

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquide** Le liquide qui peut être utilisé comme carburant dans les générateurs de combustible liquide. La quantité de liquide spécifiée ne fera aucune différence; elle utilise 100 Mo.
- **int ticks** Le temps en ticks que le liquide va brûler.
- **int powerOutput** EU/tick produit par le liquide.

### Ajouter un fluide

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquide, int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
