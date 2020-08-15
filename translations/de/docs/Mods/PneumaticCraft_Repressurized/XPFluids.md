# XP Flüssigkeiten

XP Fluiden werden in PneumaticCraft: Repressurized by the Aerial Interface, ein mächtiger Block, der ferngesteuert mit einem verbundenen Spieler verbunden werden kann. XP Flüssigkeiten, die in die Luftschnittstelle gepumpt werden, werden in Spielererfahrungen umgewandelt, und XP Flüssigkeiten werden aus der Erfahrung des Spielers gezogen.

Standardmäßig werden die folgenden Flüssigkeiten von der Luftschnittstelle erkannt:

* XP Saft (EnderIO, Cyklisch, Openblocks)
* Essenz des Wissens (thermische Erweiterung)
* Mob-Essenz (Industrielle Foregoing)

Dieses Paket ermöglicht die Verwendung beliebiger anderer Flüssigkeiten durch die Luftschnittstelle als XP-Flüssigkeiten oder die Deregulierung bestehender XP-Flüssigkeiten.

## Anruf

Sie können das XP Fluids Paket mit `mods.pneumaticcraft.xpfluid` aufrufen.

## Entfernen

Diese Funktion dereguliert den [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `Flüssigkeit`:

```zenscript
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack Fluid);
// Beispiel
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

Diese Funktion Dereguliert *alle* bekannten XP Flüssigkeiten:

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## Hinzufügen

Diese Funktion kann verwendet werden, um Flüssigkeiten als XP-Flüssigkeiten zu registrieren:

```zenscript
// Registrieren Sie eine Flüssigkeit als XP Flüssigkeit. xpRatio definiert die Menge des Spielers XP pro Millibucket Flüssigkeit.
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack Flüssigkeit);

// Beispiel: Registriere LPG als XP Flüssigkeit im Wert von 10 XP pro mB
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```