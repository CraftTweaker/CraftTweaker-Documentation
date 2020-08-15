# Générateur de Sem-Fluide

## Paquet

`Importer mods.ic2.SemiFluidGenerator;`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquide** Le liquide qui peut être utilisé comme combustible dans le générateur de semi-fluides
- **double powerOutput** The power output, measured in EU/tick

## Ajouter un fluide

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack liquide, double powerOutput;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```