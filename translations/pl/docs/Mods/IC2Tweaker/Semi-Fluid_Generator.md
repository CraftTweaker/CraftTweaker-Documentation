# Generator pół-luid

## Pakiet

`import mods.ic2.SemiFluidGenerator;`

## Metody

- **[Ciecz ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** Ciecz która może być użyta jako paliwo w generatorze półpłynów
- **podwójna moc wyjściowa** Wyjście mocy mierzone w EU/tick

## Dodaj płyn

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack – ciecz o podwójnej mocy wyjściowej;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```