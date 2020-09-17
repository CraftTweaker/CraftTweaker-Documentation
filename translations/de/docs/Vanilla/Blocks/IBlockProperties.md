# IBlockProperties

Blockeigenschaften sind das, was einen Block von anderen Blöcken unterscheidet. Es dient hauptsächlich als Schnittstelle zu [IBlockState](/Vanilla/Blocks/IBlockState/), das bedeutet, dass alle diese Funktionen auch allen [IBlockState](/Vanilla/Blocks/IBlockState/) Objekten zur Verfügung stehen.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.block.IBlockProperties;`

| ZenGetter                    | Rückgabetyp                             | Beschreibung                                                                        |
| ---------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------- |
| canProvidePower              | bool                                    | Gibt zurück, wenn der empfohlene Block Redstone-Power bieten kann                   |
| mobilityFlag                 | string                                  | Gibt die [Mobilitätsflagge](/Vanilla/Blocks/IMobilityFlag/) als Zeichenkette zurück |
| material                     | [IMaterial](/Vanilla/Blocks/IMaterial/) | Gibt das [Material des Blocks zurück](/Vanilla/Blocks/IMaterial/)                   |
| causesSuffocation            | bool                                    | Gibt zurück, ob der Block dich ersticken kann.                                      |
| hasCustomBreakingFortschritt | bool                                    |                                                                                     |
| blockNormalCube              | bool                                    |                                                                                     |
| vollblöcke                   | bool                                    |                                                                                     |
| fullCube                     | bool                                    |                                                                                     |
| normalwürfel                 | bool                                    |                                                                                     |
| opaqueCube                   | bool                                    |                                                                                     |
| durchsichtig                 | bool                                    |                                                                                     |
| useNeighborHelligkeit        | bool                                    |                                                                                     |

## ZenMethoden

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameter:

- [IWelt](/Vanilla/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Vanilla/World/IBlockPos/) Pos → Position des Blocks

Gibt einen booleschen Wert zurück, der sicherstellt, ob der Block ersetzt werden kann oder nicht.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameter:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) Welt → Die Welt die eingecheckt werden soll
- [IBlockPos](/Vanilla/World/IBlockPos/) Pos → Position des Blocks

Gibt eine Int zurück, die den aktuellen Lichtwert an der angegebenen Stelle darstellt.

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess-Welt, IBlockPos blockPos, Facing Facing);`  
`int getStrongPower(IBlockAccess-Welt, IBlockPos blockPos, Facing Facing);`  
Parameter:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) Welt → Die Welt die eingecheckt werden soll
- [IBlockPos](/Vanilla/World/IBlockPos/) Pos → Position des Blocks
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameter:

- [IWelt](/Vanilla/World/IWorld/) Welt → Die Welt, in die eingecheckt werden soll
- [IBlockPos](/Vanilla/World/IBlockPos/) Pos → Position des Blocks

Gibt eine Int zurück, die den Rotsteinvergleichungstyp des Blocks überschreibt.

### Prüft, ob eine Entität auf dem Block spawnen kann

Verwende eine [IEntity](/Vanilla/Entities/IEntity/).  
Gibt einen Bool zurück.

```zenscript
blockProperties.canEntitySpawn(IEntity Entity);
```

### Erhalte den aktuellen Blockstatus

Verwende ein [IBlockAccess](/Vanilla/World/IBlockAccess/) und ein [IBlockPos](/Vanilla/World/IBlockPos/).  
Gibt ein neues IBlockProperties Objekt zurück.

```zenscript
blockProperties.getActualState(IBlockAccess-Welt, IBlockPos pos);
```

### Härte einen Block

Verwende [IWorld](/Vanilla/World/IWorld/) und einen [IBlockPos](/Vanilla/World/IBlockPos/).  
Gibt einen Float zurück.

```zenscript
blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
```

### Hole dir die Lichtoptik eines Blocks

Verwende [IWorld](/Vanilla/World/IWorld/) und einen [IBlockPos](/Vanilla/World/IBlockPos/).  
Gibt einen Int zurück.

```zenscript
blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
```

### Erhalte die Relative Blockverbindung eines Spielers

Verwende einen [IPlayer](/Vanilla/Players/IPlayer/), eine [IWorld](/Vanilla/World/IWorld/) und eine [IBlockPos](/Vanilla/World/IBlockPos/).  
Gibt einen Float zurück.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer Player, IWorld Welt, IBlockPos pos);
```

### Überprüfen Sie, ob eine Seite des Blocks solide ist

Verwende ein [IBlockAccess](/Vanilla/World/IBlockAccess/), ein [IBlockPos](/Vanilla/World/IBlockPos/) und ein [IFacing](/Vanilla/World/IFacing/) Objekt.  
Gibt einen Bool zurück.

```zenscript
blockProperties.isSideSolid(IBlockAccess-Welt, IBlockPos pos, IFacing facing);
```