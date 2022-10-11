# ServerPlayer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.ServerPlayer;
```


## Extending Player

ServerPlayer extends [Player](/vanilla/api/entity/type/player/Player). That means all methods available in [Player](/vanilla/api/entity/type/player/Player) are also available in ServerPlayer

## Methods

:::group{name=getPersistentData}

Gets the persistent NBT data for this player.

 Persistent data is kept through deaths

Returns: The persistent data for this Entity.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// ServerPlayer.getPersistentData() as MapData

myServerPlayer.getPersistentData();
```

:::

:::group{name=updatePersistentData}

Updates the persistent NBT data for this player.

 Persistent data is kept through deaths

```zenscript
// ServerPlayer.updatePersistentData(data as MapData)

myServerPlayer.updatePersistentData({custom: "data"});
```

| Parameter |                 Type                 |        Description        |
|-----------|--------------------------------------|---------------------------|
| data      | [MapData](/vanilla/api/data/MapData) | The custom data to store. |


:::


## Properties

|      Name      |                 Type                 | Has Getter | Has Setter |                                             Description                                              |
|----------------|--------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------|
| persistentData | [MapData](/vanilla/api/data/MapData) | true       | false      | Gets the persistent NBT data for this player. <br />  <br />  Persistent data is kept through deaths |

