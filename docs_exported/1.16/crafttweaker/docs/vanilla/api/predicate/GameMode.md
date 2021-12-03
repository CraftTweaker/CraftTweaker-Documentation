# GameMode

Represents the various kinds of game modes that are available within the game.

 A game mode indicates how the player should experience the game and with which restrictions. Refer to the
 documentation of the various entries for a description.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.GameMode;
```


## Enum Constants

GameMode is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript

// The survival game mode.
// 
// In this game mode, the player needs to worry about survival, be it fighting enemies, gathering resources to
// survive, or simply exploring. The player is restricted in its movements and has to worry about both health and
// hunger. Resources need also to be gathered from the game world.
GameMode.SURVIVAL

// The creative game mode.
// 
// In this game mode, the first one to be added to the game, the player is able to obtain unlimited amount of
// resources from the menu, along with breaking and placing blocks as they see fit. There is no hunger nor health
// and no enemies to worry about. The player is also free to fly around in the world, though cannot clip through
// blocks.
GameMode.CREATIVE

// The adventure game mode.
// 
// In this game mode, the player is restricted in its actions, being able to only walk around the world, and fight
// against enemies. While the player still needs to handle both health and hunger, it cannot break nor place any
// blocks unless specifically enabled to do so by the game itself.
GameMode.ADVENTURE

// The spectator game mode.
// 
// In this game mode, the player is not able to interact with the world, but it is effectively unrestricted in its
// movements, allowing both flying and no-clip through blocks. It is also the only game mode in which players can
// assume the point of view (i.e. spectate) other entities, including other players.
GameMode.SPECTATOR
```
