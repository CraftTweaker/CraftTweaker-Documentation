# IBlockDefinition

Die IBlockDefinition-Objekte bieten zusätzliche Informationen zu Blöcken.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.block.IBlockDefinition;`

## Aufruf eines IBlockDefinition-Objekts

* Verwendung der `-Definition` ZenGetter für ein [IBlock](/Vanilla/Blocks/IBlock/) Objekt.

## Aufrufen einer IBlockDefinition-Liste

* Verwende `Spiele.block` um eine Liste aller Blockdefinitionen im Spiel zu erhalten.

## ZenGetter/ZenSetter

| ZenGetter       | ZenSetter           | Was macht es                                                | Type                                                |
| --------------- | ------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
|                 | canSpawnInBlock     | Gibt zurück, wenn eine Entität in diesem Block spawnen kann | bool                                                |
| kreativ-Tab     | kreativ-Tab         |                                                             | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| standard Status |                     |                                                             | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                                             | float                                               |
| id              |                     | Gibt die Block-ID zurück                                    | string                                              |
| displayName     |                     | Gibt den Anzeigenamen des Blocks zurück                     | string                                              |
|                 | Härte               |                                                             | int                                                 |
| abruf Level     |                     | Gibt das Erntelevel des Blocks zurück                       | int                                                 |
| harvestTool     |                     | Gibt das Sammelwerkzeug des Blocks zurück                   | string                                              |
|                 | helle Deckkraft     |                                                             | int                                                 |
|                 | leuchtende Stufe    |                                                             | int                                                 |
|                 | widerstand          |                                                             | int                                                 |
| unlocalizedName |                     | Gibt den unlokalisierten Namen des Blocks zurück            | string                                              |
| zufällig        | zufällig            |                                                             | bool                                                |

## ZenMethoden

### Block unzerbrechlich setzen

Verwendet keine Parameter.  
Gibt nichts zurück.  
identisch mit `Härte = -1;`

```zenscript
defObj.setUnbreakable();
```

### Tickrate in einer bestimmten Welt erhalten

Verwendet ein [IWorld](/Vanilla/World/IWorld/) Objekt.  
Gibt einen Int zurück.

```zenscript
defObj.getTickRate(IWelt);
```

### Überprüfen Sie, ob der Block auf einen anderen Block gesetzt werden kann

Verwendet ein [IWorld](/Vanilla/World/IWorld/) Objekt, ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt und abhängig von der verwendeten Methode, auch ein [IFacing](/Vanilla/World/IFacing/) Objekt.  
Gibt einen Bool zurück.

```zenscript
defObj.canPlaceBlockOnSide(IWorld Welt, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld Welt, IBlockPos pos);
```

### Hol dir die Heiterkeit des Blocks

Verwendet ein [IBlockState](/Vanilla/Blocks/IBlockState/), ein [IBlockAccess](/Vanilla/World/IBlockAccess/) Objekt, ein [IBlockPos](/Vanilla/World/IBlockPos/) und ein optionales [IEntity](/Vanilla/Entities/IEntity/) Objekt.  
Gibt einen Float zurück.

```zenscript
defObj.getSlipperiness(IBlockState Zustand, IBlockAccess-Zugang, IBlockPos pos, @Optionale IEntity Entity);
```

### Lege das Erntelevel des Blocks fest

Verwendet eine Zeichenkette und einen Int.  
Gibt eine Leere zurück (nichts).

```zenscript
defObj.setHarvestLevel(string toolclass, int level);
```

### Erhalte einen Blockstatus durch Metadaten

Verwendet eine Int.  
Gibt einen [IBlockState](/Vanilla/Blocks/IBlockState/) zurück.

```zenscript
defObj.getStateFromMeta(int meta);
```